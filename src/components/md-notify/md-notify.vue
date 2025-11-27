<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 15:54:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 16:21:03
 * @FilePath: \minad-ui\src\components\md-notify\md-notify.vue
 * @Description: Notify 通知组件
 *
-->
<template>
  <view v-if="visible" class="md-notify-container" @click="handleClick">
    <!-- 通知内容 -->
    <view
      :class="notifyClasses"
      :style="notifyStyles"
    >
      <!-- 图标 -->
      <md-icon
        v-if="showIcon"
        :name="iconName"
        class="md-notify__icon"
      ></md-icon>
      
      <!-- 内容区域 -->
      <view class="md-notify__content">
        <!-- 标题 -->
        <text v-if="title" class="md-notify__title">{{ title }}</text>
        <!-- 内容 -->
        <text v-if="content" class="md-notify__text">{{ content }}</text>
      </view>
      
      <!-- 关闭按钮 -->
      <md-icon
        v-if="showClose"
        name="close"
        class="md-notify__close"
        @click.stop="handleCloseClick"
      ></md-icon>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { MdIcon } from '../md-icon'
import type { NotifyProps, NotifyEmits, NotifyType, NotifyPosition } from './type'

const props = withDefaults(defineProps<NotifyProps>(), {
  modelValue: false,
  type: 'default',
  position: 'top',
  duration: 3000,
  showClose: true,
  showIcon: true,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<NotifyEmits>()

// 内部可见性状态
const visible = ref(props.modelValue)
let timer: number | null = null

// 监听modelValue变化
watch(() => props.modelValue, (newValue) => {
  visible.value = newValue
  if (newValue) {
    startTimer()
  } else {
    clearTimer()
  }
}, { immediate: true })

// 监听visible变化
watch(visible, (newValue) => {
  if (!newValue) {
    emit('update:modelValue', false)
    emit('close')
    clearTimer()
  }
})

// 计算通知类名
const notifyClasses = computed(() => {
  return [
    'md-notify',
    `md-notify--${props.type}`,
    `md-notify--${props.position}`,
    props.customClass
  ]
})

// 计算通知样式
const notifyStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 计算图标名称
const iconName = computed(() => {
  switch (props.type) {
    case 'success':
      return 'checkcircle'
    case 'warning':
      return 'warning'
    case 'error':
      return 'closecircle'
    case 'info':
      return 'info'
    default:
      return 'info'
  }
})

// 开始计时
const startTimer = () => {
  clearTimer()
  if (props.duration > 0) {
    timer = window.setTimeout(() => {
      visible.value = false
    }, props.duration)
  }
}

// 清除计时
const clearTimer = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

// 处理通知点击
const handleClick = () => {
  emit('click')
}

// 处理关闭按钮点击
const handleCloseClick = () => {
  emit('close-click')
  visible.value = false
}

// 组件卸载时清除计时器
onUnmounted(() => {
  clearTimer()
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 通知容器
.md-notify-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  &.md-notify--center {
    align-items: center;
  }
  
  &.md-notify--bottom {
    align-items: flex-end;
  }
}

// 通知
.md-notify {
  position: relative;
  display: flex;
  align-items: center;
  padding: $md-spacing-md $md-spacing-lg;
  background-color: $md-color-bg;
  border-radius: $md-border-radius-base;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: $md-spacing-lg;
  pointer-events: auto;
  animation: fadeIn 0.3s ease;
  
  // 类型变体
  &--success {
    background-color: rgba($md-color-success, 0.1);
    border-left: 4px solid $md-color-success;
    color: $md-color-success;
  }
  
  &--warning {
    background-color: rgba($md-color-warning, 0.1);
    border-left: 4px solid $md-color-warning;
    color: $md-color-warning;
  }
  
  &--error {
    background-color: rgba($md-color-danger, 0.1);
    border-left: 4px solid $md-color-danger;
    color: $md-color-danger;
  }
  
  &--info {
    background-color: rgba($md-color-info, 0.1);
    border-left: 4px solid $md-color-info;
    color: $md-color-info;
  }
  
  &--default {
    background-color: rgba($md-color-primary, 0.1);
    border-left: 4px solid $md-color-primary;
    color: $md-color-primary;
  }
}

// 图标
.md-notify__icon {
  font-size: $md-size-large;
  margin-right: $md-spacing-sm;
}

// 内容区域
.md-notify__content {
  flex: 1;
  min-width: 0;
}

// 标题
.md-notify__title {
  font-size: $md-size-medium;
  font-weight: 500;
  display: block;
  margin-bottom: $md-spacing-xs;
}

// 文本内容
.md-notify__text {
  font-size: $md-size-small;
  line-height: 1.4;
  display: block;
}

// 关闭按钮
.md-notify__close {
  font-size: $md-size-medium;
  margin-left: $md-spacing-sm;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity $md-transition;
  
  &:hover {
    opacity: 1;
  }
}

// 动画效果
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
