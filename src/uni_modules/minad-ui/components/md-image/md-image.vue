<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 10:30:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 10:39:32
 * @FilePath: \minad-ui\src\components\md-image\md-image.vue
 * @Description: 图片组件
 *
-->
<template>
  <view :class="['md-image', { 'md-image-loading': isLoading, 'md-image-error': hasError }]">
    <!-- 加载状态 -->
    <view v-if="isLoading" class="md-image-loading-content">
      <slot name="loading">
        <view class="md-image-loading-spinner"></view>
      </slot>
    </view>
    
    <!-- 错误状态 -->
    <view v-else-if="hasError" class="md-image-error-content">
      <slot name="error">
        <view class="md-image-error-icon">
          <text>!</text>
        </view>
      </slot>
    </view>
    
    <!-- 图片 -->
    <image
      v-else
      :class="['md-image-img', mode]"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      :webp="webp"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    ></image>
    
    <!-- 自定义内容插槽 -->
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ImageProps, ImageEmits } from './type'

// Props定义
const props = defineProps<ImageProps>()

// 事件定义
const emit = defineEmits<ImageEmits>()

// 状态管理
const isLoading = ref(true)
const hasError = ref(false)

// 处理图片加载成功
const handleLoad = () => {
  isLoading.value = false
  hasError.value = false
  emit('load')
}

// 处理图片加载失败
const handleError = () => {
  isLoading.value = false
  hasError.value = true
  emit('error')
}

// 处理图片点击事件
const handleClick = (event: any) => {
  emit('click', event)
  
  // 处理预览功能
  if (props.preview) {
    if (Array.isArray(props.preview)) {
      // 如果preview是数组，则使用该数组作为预览图片列表
      const currentIndex = props.preview.indexOf(props.src)
      emit('preview', props.preview, currentIndex >= 0 ? currentIndex : 0)
    } else {
      // 如果preview是布尔值true，则只预览当前图片
      emit('preview', [props.src], 0)
    }
  }
}
</script>

<style lang="scss" scoped>

// 图片容器基础样式
.md-image {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  background-color: $md-color-bg-grey;
  border-radius: $md-border-radius-sm;
  transition: $md-transition;

  // 加载状态
  &.md-image-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    min-height: 100px;
  }

  // 错误状态
  &.md-image-error {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    min-height: 100px;
    background-color: $md-color-bg-grey;
  }
}

// 图片基础样式
.md-image-img {
  display: block;
  width: 100%;
  height: 100%;
  transition: $md-transition;
}

// 加载内容
.md-image-loading-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

// 加载动画
.md-image-loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba($md-color-primary, 0.1);
  border-top-color: $md-color-primary;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

// 错误内容
.md-image-error-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

// 错误图标
.md-image-error-icon {
  width: 32px;
  height: 32px;
  background-color: $md-color-danger;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}

// 图片模式样式
.md-image-img {
  &.aspectFit {
    object-fit: contain;
  }
  
  &.aspectFill {
    object-fit: cover;
  }
  
  &.scaleToFill {
    object-fit: fill;
  }
}

// 旋转动画
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>