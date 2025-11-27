<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 10:40:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 10:40:00
 * @FilePath: \minad-ui\src\components\md-image-preview\md-image-preview.vue
 * @Description: 图片预览组件
 *
-->
<template>
  <view v-if="visible" class="md-image-preview" @click="handleClose">
    <!-- 遮罩层 -->
    <view class="md-image-preview-mask"></view>
    
    <!-- 预览内容 -->
    <view class="md-image-preview-content" @click.stop>
      <!-- 关闭按钮 -->
      <view class="md-image-preview-close" @click="handleClose">
        <text class="md-image-preview-close-icon">×</text>
      </view>
      
      <!-- 图片容器 -->
      <view class="md-image-preview-wrapper">
        <image
          class="md-image-preview-img"
          :src="currentImage.src"
          :mode="mode"
          :style="imageStyle"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        ></image>
      </view>
      
      <!-- 图片指示器 -->
      <view v-if="images.length > 1" class="md-image-preview-indicator">
        <text class="md-image-preview-indicator-text">
          {{ currentIndex + 1 }} / {{ images.length }}
        </text>
      </view>
      
      <!-- 导航按钮 -->
      <view v-if="images.length > 1" class="md-image-preview-nav">
        <view class="md-image-preview-nav-left" @click="handlePrev">
          <text class="md-image-preview-nav-icon">‹</text>
        </view>
        <view class="md-image-preview-nav-right" @click="handleNext">
          <text class="md-image-preview-nav-icon">›</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import type { ImageItem, ImagePreviewProps, ImagePreviewEmits } from './type'

// Props定义
const props = defineProps<ImagePreviewProps>()

// 事件定义
const emit = defineEmits<ImagePreviewEmits>()

// 状态管理
const currentIndex = ref(0)
const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const touchStartX = ref(0)
const touchStartY = ref(0)
const touchStartTime = ref(0)

// 计算当前显示的图片
const currentImage = computed(() => {
  return props.images[currentIndex.value] || { src: '', alt: '' }
})

// 计算图片样式
const imageStyle = computed(() => {
  return {
    transform: `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value})`,
    transition: 'transform 0.3s ease'
  }
})

// 监听visible变化，重置状态
watch(() => props.visible, (newVal) => {
  if (newVal) {
    currentIndex.value = props.initialIndex || 0
    resetTransform()
  }
})

// 监听initialIndex变化
watch(() => props.initialIndex, (newVal) => {
  if (newVal !== undefined && props.visible) {
    currentIndex.value = newVal
    resetTransform()
  }
})

// 重置变换状态
const resetTransform = () => {
  scale.value = 1
  translateX.value = 0
  translateY.value = 0
}

// 关闭预览
const handleClose = () => {
  emit('close')
}

// 切换到上一张图片
const handlePrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    resetTransform()
    emit('change', currentIndex.value)
  }
}

// 切换到下一张图片
const handleNext = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
    resetTransform()
    emit('change', currentIndex.value)
  }
}

// 处理触摸开始
const handleTouchStart = (e: TouchEvent) => {
  if (!props.zoomable) return
  
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
  touchStartTime.value = Date.now()
}

// 处理触摸移动
const handleTouchMove = (e: TouchEvent) => {
  if (!props.zoomable || e.touches.length !== 1) return
  
  const currentX = e.touches[0].clientX
  const currentY = e.touches[0].clientY
  
  translateX.value += currentX - touchStartX.value
  translateY.value += currentY - touchStartY.value
  
  touchStartX.value = currentX
  touchStartY.value = currentY
}

// 处理触摸结束
const handleTouchEnd = (e: TouchEvent) => {
  if (!props.zoomable) return
  
  const currentTime = Date.now()
  const duration = currentTime - touchStartTime.value
  
  // 检测快速滑动
  if (duration < 300) {
    const deltaX = e.changedTouches[0].clientX - touchStartX.value
    const deltaY = e.changedTouches[0].clientY - touchStartY.value
    
    // 水平滑动超过阈值，切换图片
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        handlePrev()
      } else {
        handleNext()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/index';

// 预览组件容器
.md-image-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

// 遮罩层
.md-image-preview-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

// 预览内容
.md-image-preview-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

// 关闭按钮
.md-image-preview-close {
  position: absolute;
  top: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: $md-border-radius-circle;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: $md-transition;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .md-image-preview-close-icon {
    color: $md-color-text-inverse;
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
  }
}

// 图片容器
.md-image-preview-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  touch-action: none;
}

// 预览图片
.md-image-preview-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

// 图片指示器
.md-image-preview-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: $md-border-radius-base;
  z-index: 10;
  
  .md-image-preview-indicator-text {
    color: $md-color-text-inverse;
    font-size: $md-size-medium;
  }
}

// 导航按钮
.md-image-preview-nav {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 10;
  
  .md-image-preview-nav-left,
  .md-image-preview-nav-right {
    width: 60px;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: $md-border-radius-circle;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: $md-transition;
    margin: 0 20px;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  
  .md-image-preview-nav-icon {
    color: $md-color-text-inverse;
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
  }
}

// 过渡动画
.md-image-preview-fade-enter-active,
.md-image-preview-fade-leave-active {
  transition: opacity 0.3s ease;
}

.md-image-preview-fade-enter-from,
.md-image-preview-fade-leave-to {
  opacity: 0;
}

// 图片模式样式
.md-image-preview-img {
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
</style>