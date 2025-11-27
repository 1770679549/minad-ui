<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 16:17:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 16:17:00
 * @FilePath: \minad-ui\src\components\md-popup\md-popup.vue
 * @Description: Popup 弹窗组件
 *
-->
<template>
  <view v-if="visible" class="md-popup-container">
    <!-- 遮罩层 -->
    <view 
      v-if="mask" 
      class="md-popup__mask" 
      :style="maskStyles" 
      @click="handleMaskClick"
    ></view>
    
    <!-- 弹窗内容 -->
    <view 
      :class="popupClasses" 
      :style="popupStyles"
    >
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import type { PopupProps, PopupEmits } from './type'

const props = withDefaults(defineProps<PopupProps>(), {
  modelValue: false,
  position: 'center',
  mask: true,
  maskClosable: true,
  maskOpacity: 0.5,
  maskBackgroundColor: 'rgba(0, 0, 0, 0.5)',
  width: '',
  height: '',
  round: false,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<PopupEmits>()

// 内部可见性状态
const visible = ref(props.modelValue)

// 监听modelValue变化
watch(() => props.modelValue, (newValue) => {
  visible.value = newValue
  if (newValue) {
    emit('open')
  } else {
    emit('close')
  }
}, { immediate: true })

// 监听visible变化
watch(visible, (newValue) => {
  emit('update:modelValue', newValue)
})

// 计算遮罩层样式
const maskStyles = computed(() => {
  return {
    opacity: props.maskOpacity,
    backgroundColor: props.maskBackgroundColor
  }
})

// 计算弹窗类名
const popupClasses = computed(() => {
  return [
    'md-popup',
    `md-popup--${props.position}`,
    {
      'md-popup--round': props.round
    },
    props.customClass
  ]
})

// 计算弹窗样式
const popupStyles = computed(() => {
  const styles: Record<string, any> = {
    ...props.customStyle
  }
  
  // 根据位置设置宽度和高度
  if (props.position === 'left' || props.position === 'right' || props.position === 'center') {
    if (props.width) {
      styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
    }
  }
  
  if (props.position === 'top' || props.position === 'bottom' || props.position === 'center') {
    if (props.height) {
      styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
    }
  }
  
  return styles
})

// 处理遮罩层点击
const handleMaskClick = () => {
  emit('mask-click')
  if (props.maskClosable) {
    visible.value = false
  }
}

// 组件挂载时处理可见性
onMounted(() => {
  if (visible.value) {
    emit('open')
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 弹窗容器
.md-popup-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
}

// 遮罩层
.md-popup__mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  transition: opacity $md-transition;
}

// 弹窗
.md-popup {
  position: relative;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all $md-transition;
  pointer-events: auto;
  
  // 位置变体
  &--top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-height: 80vh;
  }
  
  &--bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 80vh;
  }
  
  &--left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    max-width: 80vw;
  }
  
  &--right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 80vw;
  }
  
  &--center {
    min-width: 280px;
    max-width: 80vw;
    max-height: 80vh;
  }
  
  // 圆角样式
  &--round {
    border-radius: $md-border-radius-lg;
    
    &.md-popup--top {
      border-radius: 0 0 $md-border-radius-lg $md-border-radius-lg;
    }
    
    &.md-popup--bottom {
      border-radius: $md-border-radius-lg $md-border-radius-lg 0 0;
    }
    
    &.md-popup--left {
      border-radius: 0 $md-border-radius-lg $md-border-radius-lg 0;
    }
    
    &.md-popup--right {
      border-radius: $md-border-radius-lg 0 0 $md-border-radius-lg;
    }
  }
}
</style>
