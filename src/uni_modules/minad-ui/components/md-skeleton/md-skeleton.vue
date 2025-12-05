<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 19:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 19:00:00
 * @FilePath: \minad-ui\src\components\md-skeleton\md-skeleton.vue
 * @Description: Skeleton 骨架屏组件
 *
-->
<template>
  <view :class="skeletonClasses" :style="skeletonStyles">
    <!-- 文本类型 -->
    <view 
      v-if="props.type === 'text'" 
      class="md-skeleton__item md-skeleton__item--text"
      :style="itemStyles"
    ></view>
    
    <!-- 按钮类型 -->
    <view 
      v-else-if="props.type === 'button'" 
      class="md-skeleton__item md-skeleton__item--button"
      :style="itemStyles"
    ></view>
    
    <!-- 图片类型 -->
    <view 
      v-else-if="props.type === 'image'" 
      class="md-skeleton__item md-skeleton__item--image"
      :style="itemStyles"
    ></view>
    
    <!-- 输入框类型 -->
    <view 
      v-else-if="props.type === 'input'" 
      class="md-skeleton__item md-skeleton__item--input"
      :style="itemStyles"
    ></view>
    
    <!-- 头像类型 -->
    <view 
      v-else-if="props.type === 'avatar'" 
      class="md-skeleton__item md-skeleton__item--avatar"
      :style="itemStyles"
    ></view>
    
    <!-- 段落类型 -->
    <view 
      v-else-if="props.type === 'paragraph'" 
      class="md-skeleton__item md-skeleton__item--paragraph"
    >
      <view 
        v-for="index in rows" 
        :key="index"
        class="md-skeleton__paragraph-row"
        :style="getParagraphRowStyle(index)"
      ></view>
    </view>
    
    <!-- 默认类型（文本） -->
    <view 
      v-else 
      class="md-skeleton__item md-skeleton__item--text"
      :style="itemStyles"
    ></view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { SkeletonProps } from './type'

const props = withDefaults(defineProps<SkeletonProps>(), {
  type: 'text',
  animated: true,
  width: '',
  height: '',
  borderRadius: '',
  rows: 3,
  rowWidths: () => [],
  customClass: '',
  customStyle: () => ({})
})

// 计算行数
const rows = computed(() => {
  return Math.max(1, props.rows || 3)
})

// 计算骨架屏基础样式
const baseStyles = computed(() => {
  const styles: Record<string, any> = {}
  
  if (props.width) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  
  if (props.height) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  
  if (props.borderRadius) {
    styles.borderRadius = typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius
  }
  
  return styles
})

// 计算单个骨架项样式
const itemStyles = computed(() => {
  const styles = { ...baseStyles.value }
  
  // 根据类型设置默认样式
  if (props.type === 'avatar') {
    // 头像默认是圆形
    if (!props.borderRadius) {
      styles.borderRadius = '50%'
    }
    // 头像默认宽高相等
    if (props.width && !props.height) {
      styles.height = styles.width
    } else if (props.height && !props.width) {
      styles.width = styles.height
    }
  } else if (props.type === 'button') {
    // 按钮默认圆角
    if (!props.borderRadius) {
      styles.borderRadius = '3px'
    }
  } else if (props.type === 'input') {
    // 输入框默认圆角
    if (!props.borderRadius) {
      styles.borderRadius = '3px'
    }
  }
  
  return styles
})

// 获取段落行样式
const getParagraphRowStyle = (index: number) => {
  const styles: Record<string, any> = {
    height: props.height || '16px',
    marginBottom: index < rows.value ? '12px' : '0'
  }
  
  // 设置行宽度
  if (props.rowWidths && props.rowWidths.length > 0) {
    const width = props.rowWidths[index - 1] || props.rowWidths[props.rowWidths.length - 1]
    if (width) {
      styles.width = typeof width === 'number' ? `${width}px` : width
    }
  } else {
    // 默认每行宽度不同，模拟真实段落
    if (index === 1) {
      styles.width = props.width || '100%'
    } else if (index === 2) {
      styles.width = props.width || '80%'
    } else {
      styles.width = props.width || '60%'
    }
  }
  
  // 设置圆角
  if (props.borderRadius) {
    styles.borderRadius = typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius
  } else {
    styles.borderRadius = '3px'
  }
  
  return styles
}

// 计算类名
const skeletonClasses = computed(() => {
  return [
    'md-skeleton',
    {
      'md-skeleton--animated': props.animated
    },
    props.customClass
  ]
})

// 计算样式
const skeletonStyles = computed(() => {
  return {
    ...props.customStyle
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 骨架屏容器
.md-skeleton {
  display: inline-block;
  vertical-align: middle;
}

// 骨架屏项
.md-skeleton__item {
  background-color: $md-color-bg-grey;
  
  // 动画效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }
}

// 动画类
.md-skeleton--animated {
  .md-skeleton__item::before {
    animation: md-skeleton-loading 1.5s infinite;
  }
}

// 加载动画
@keyframes md-skeleton-loading {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

// 文本类型
.md-skeleton__item--text {
  position: relative;
  height: 16px;
  border-radius: 3px;
  overflow: hidden;
}

// 按钮类型
.md-skeleton__item--button {
  position: relative;
  height: 32px;
  border-radius: 3px;
  overflow: hidden;
}

// 图片类型
.md-skeleton__item--image {
  position: relative;
  height: 120px;
  border-radius: 3px;
  overflow: hidden;
}

// 输入框类型
.md-skeleton__item--input {
  position: relative;
  height: 32px;
  border-radius: 3px;
  overflow: hidden;
}

// 头像类型
.md-skeleton__item--avatar {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

// 段落类型
.md-skeleton__item--paragraph {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

// 段落行
.md-skeleton__paragraph-row {
  position: relative;
  background-color: $md-color-bg-grey;
  height: 16px;
  border-radius: 3px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }
  
  .md-skeleton--animated &::before {
    animation: md-skeleton-loading 1.5s infinite;
  }
}
</style>