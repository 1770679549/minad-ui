<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 10:55:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 10:55:00
 * @FilePath: \minad-ui\src\components\md-watermark\md-watermark.vue
 * @Description: 水印组件
 *
-->
<template>
  <view 
    :class="watermarkClasses"
    :style="watermarkStyles"
    ref="watermarkRef"
  >
    <slot></slot>
    <view 
      v-if="showWatermark"
      :class="['md-watermark-content', { 'md-watermark-content--text': !image, 'md-watermark-content--image': image }]"
      :style="watermarkContentStyles"
    >
      <!-- 文本水印 -->
      <text 
        v-if="!image"
        class="md-watermark-text"
        :style="textStyles"
      >
        {{ content }}
      </text>
      <!-- 图片水印 -->
      <image 
        v-else
        class="md-watermark-image"
        :src="image"
        :style="imageStyles"
      ></image>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import { addUnit } from '../../utils'
import type { WatermarkProps, WatermarkEmits } from './type'

// Props定义
const props = defineProps<WatermarkProps>()

// 事件定义
const emit = defineEmits<WatermarkEmits>()

// 引用定义
const watermarkRef = ref<HTMLElement | null>(null)

// 计算属性
const showWatermark = computed(() => props.show !== false)

// 水印容器类名
const watermarkClasses = computed(() => {
  const classes = ['md-watermark']
  
  if (props.customClass) {
    classes.push(props.customClass)
  }
  
  return classes
})

// 水印容器样式
const watermarkStyles = computed(() => {
  const styles: Record<string, any> = {
    position: 'relative',
    overflow: 'hidden'
  }
  
  if (props.customStyle) {
    Object.assign(styles, props.customStyle)
  }
  
  return styles
})

// 水印内容样式
const watermarkContentStyles = computed(() => {
  const styles: Record<string, any> = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    userSelect: 'none'
  }
  
  return styles
})

// 文本样式
const textStyles = computed(() => {
  const styles: Record<string, any> = {
    display: 'inline-block',
    padding: `${addUnit(props.gapY || 20)} ${addUnit(props.gapX || 40)}`,
    fontSize: addUnit(props.fontSize || 14),
    color: props.color || 'rgba(0, 0, 0, 0.15)',
    fontStyle: props.fontStyle || 'normal',
    fontWeight: props.fontWeight || 'normal',
    fontFamily: props.fontFamily || 'sans-serif',
    opacity: props.opacity !== undefined ? props.opacity : 0.15,
    transform: `rotate(${props.rotate || -15}deg)`,
    transformOrigin: '0 0',
    whiteSpace: 'nowrap'
  }
  
  return styles
})

// 图片样式
const imageStyles = computed(() => {
  const styles: Record<string, any> = {
    display: 'inline-block',
    padding: `${addUnit(props.gapY || 20)} ${addUnit(props.gapX || 40)}`,
    opacity: props.opacity !== undefined ? props.opacity : 0.15,
    transform: `rotate(${props.rotate || -15}deg)`,
    transformOrigin: '0 0'
  }
  
  if (props.width) {
    styles.width = addUnit(props.width)
  }
  
  if (props.height) {
    styles.height = addUnit(props.height)
  }
  
  return styles
})

// 检查是否需要显示水印
const checkShowWatermark = () => {
  return showWatermark.value && (props.content || props.image)
}

// 监听水印属性变化，重新渲染水印
watch(
  () => [
    props.content,
    props.image,
    props.width,
    props.height,
    props.gapX,
    props.gapY,
    props.rotate,
    props.opacity,
    props.fontSize,
    props.color,
    props.fontStyle,
    props.fontWeight,
    props.fontFamily,
    props.show
  ],
  async () => {
    await nextTick()
    // 水印属性变化时，自动重新渲染
  }
)

// 组件挂载后初始化水印
onMounted(async () => {
  await nextTick()
  emit('load')
})
</script>

<style lang="scss" scoped>
@import '../../styles/index';

// 水印容器
.md-watermark {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

// 水印内容
.md-watermark-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
  overflow: hidden;
  z-index: 999;
  
  // 文本水印布局
  &--text {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    white-space: nowrap;
  }
  
  // 图片水印布局
  &--image {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
}

// 文本水印
.md-watermark-text {
  display: inline-block;
  white-space: nowrap;
}

// 图片水印
.md-watermark-image {
  display: inline-block;
  vertical-align: middle;
}
</style>
