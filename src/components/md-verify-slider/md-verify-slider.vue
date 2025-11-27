<template>
  <view 
    class="md-verify-slider" 
    :class="sliderClasses"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
    @mousedown="handleTouchStart"
    @mousemove="handleTouchMove"
    @mouseup="handleTouchEnd"
    @mouseleave="handleTouchEnd"
  >
    <!-- 背景轨道 -->
    <view class="md-verify-slider__track">
      <!-- 已滑动部分 -->
      <view class="md-verify-slider__track-active" :style="activeTrackStyle"></view>
    </view>
    
    <!-- 滑块 -->
    <view 
      class="md-verify-slider__thumb"
      :class="thumbClasses"
      :style="thumbStyle"
    >
      <slot name="icon">
        <md-icon 
          :name="currentIcon"
          :size="16"
        />
      </slot>
    </view>
    
    <!-- 提示文字 -->
    <text class="md-verify-slider__text">{{ currentText }}</text>
    
    <!-- 成功时的对勾 -->
    <view v-if="status === 'success'" class="md-verify-slider__success">
      <md-icon name="check" size="18" color="#fff" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { MdIcon } from '../md-icon'
import type { VerifySliderProps, VerifySliderEmits } from './type'

// Props 定义
const props = withDefaults(defineProps<VerifySliderProps>(), {
  disabled: false,
  width: 280,
  height: 40,
  initialText: '拖动滑块完成验证',
  slidingText: '释放滑块完成验证',
  successText: '验证成功',
  errorText: '验证失败',
  trackColor: '#f0f0f0',
  activeColor: '#007aff',
  thumbColor: '#fff',
  textColor: '#666',
  successColor: '#4cd964',
  customClass: ''
})

// Emits 定义
const emit = defineEmits<VerifySliderEmits>()

// 状态管理
const status = ref<'idle' | 'sliding' | 'success' | 'error'>('idle')
const isDragging = ref(false)
const thumbPosition = ref(0)
const trackWidth = ref(0)

// 计算属性
const sliderClasses = computed(() => {
  return {
    'md-verify-slider--disabled': props.disabled,
    'md-verify-slider--idle': status.value === 'idle',
    'md-verify-slider--sliding': status.value === 'sliding',
    'md-verify-slider--success': status.value === 'success',
    'md-verify-slider--error': status.value === 'error',
    [props.customClass]: props.customClass
  }
})

const thumbClasses = computed(() => {
  return {
    'md-verify-slider__thumb--success': status.value === 'success',
    'md-verify-slider__thumb--error': status.value === 'error'
  }
})

const activeTrackStyle = computed(() => {
  return {
    width: `${thumbPosition.value}px`,
    backgroundColor: status.value === 'success' ? props.successColor : props.activeColor
  }
})

const thumbStyle = computed(() => {
  return {
    left: `${thumbPosition.value}px`,
    backgroundColor: props.thumbColor
  }
})

const currentText = computed(() => {
  switch (status.value) {
    case 'sliding':
      return props.slidingText
    case 'success':
      return props.successText
    case 'error':
      return props.errorText
    default:
      return props.initialText
  }
})

const currentIcon = computed(() => {
  switch (status.value) {
    case 'success':
      return 'check'
    case 'error':
      return 'close'
    default:
      return 'arrowright'
  }
})

// 方法
const handleTouchStart = (event: TouchEvent | MouseEvent) => {
  if (props.disabled || status.value === 'success') {
    return
  }
  
  isDragging.value = true
  status.value = 'sliding'
  emit('change', 'sliding')
  
  // 阻止默认事件
  event.preventDefault()
}

const handleTouchMove = (event: TouchEvent | MouseEvent) => {
  if (!isDragging.value || props.disabled) {
    return
  }
  
  // 获取事件对象
  const e = event instanceof TouchEvent ? event.touches[0] : event
  
  // 获取滑块元素
  const sliderEl = (event.target as HTMLElement).closest('.md-verify-slider')
  if (!sliderEl) {
    return
  }
  
  // 计算滑块位置
  const rect = sliderEl.getBoundingClientRect()
  let newPosition = e.clientX - rect.left - (props.height || 40) / 2
  
  // 限制位置范围
  newPosition = Math.max(0, Math.min(newPosition, rect.width - (props.height || 40)))
  
  thumbPosition.value = newPosition
  
  // 阻止默认事件
  event.preventDefault()
}

const handleTouchEnd = () => {
  if (!isDragging.value || props.disabled) {
    return
  }
  
  isDragging.value = false
  
  // 验证是否成功（滑块是否接近右侧）
  const sliderEl = document.querySelector('.md-verify-slider')
  if (!sliderEl) {
    return
  }
  
  const rect = sliderEl.getBoundingClientRect()
  const successThreshold = rect.width - (props.height || 40)
  
  if (thumbPosition.value >= successThreshold - 10) {
    // 验证成功
    thumbPosition.value = successThreshold
    status.value = 'success'
    emit('success')
    emit('change', 'success')
  } else {
    // 验证失败，重置滑块
    thumbPosition.value = 0
    status.value = 'idle'
    emit('error')
    emit('change', 'idle')
  }
}

// 重置方法
defineExpose({
  reset: () => {
    thumbPosition.value = 0
    status.value = 'idle'
    emit('change', 'idle')
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

.md-verify-slider {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 280px;
  height: 40px;
  
  // 背景轨道
  &__track {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background-color: #f0f0f0;
    overflow: hidden;
    z-index: 0;
    
    // 已滑动部分
    &-active {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: #007aff;
      transition: width 0.1s ease;
      z-index: 1;
    }
  }
  
  // 滑块
  &__thumb {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: all 0.3s ease;
    
    // 成功状态
    &--success {
      background-color: #4cd964;
    }
    
    // 错误状态
    &--error {
      background-color: #ff3b30;
    }
  }
  
  // 提示文字
  &__text {
    position: relative;
    z-index: 2;
    font-size: 14px;
    color: #666;
    user-select: none;
    transition: all 0.3s ease;
  }
  
  // 成功时的对勾
  &__success {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  
  // 禁用状态
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  // 成功状态
  &--success {
    .md-verify-slider__text {
      color: #4cd964;
    }
  }
  
  // 错误状态
  &--error {
    .md-verify-slider__text {
      color: #ff3b30;
    }
  }
}
</style>