<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 18:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 17:37:21
 * @FilePath: \minad-ui\src\components\md-icon\md-icon.vue
 * @Description: 图标组件
 *
-->
<template>
  <view
    class="md-icon"
    :class="{
      'md-icon--text': isTextIcon,
      'md-icon--loading': loading,
      'md-icon--spin': spin,
      [`md-icon--${size}`]: size,
      [iconClass]: !isTextIcon && !loading
    }"
    :style="{
      color,
      fontSize,
      transform: rotate ? `rotate(${rotate}deg)` : undefined
    }"
  >
    <template v-if="isTextIcon">
      {{ name }}
    </template>
    <template v-else-if="loading">
      <view class="md-icon__loading">
        <!-- 加载动画 -->
      </view>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </view>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { addUnit } from '../../utils'
import type { IconProps } from './type'

const props = defineProps<IconProps>()

// 判断是否是文本图标
const isTextIcon = computed(() => {
  return props.name && !props.name.startsWith('md-icon-')
})

// 计算图标类名（自动添加md-icon-前缀）
const iconClass = computed(() => {
  if (!props.name) return ''
  return props.name.startsWith('md-icon-') ? props.name : `md-icon-${props.name}`
})

// 自动计算字体大小
const fontSize = computed(() => {
  if (typeof props.size === 'number' || /^\d+$/.test(String(props.size))) {
    return addUnit(props.size)
  }
  return undefined
})
</script>

<style lang="scss" scoped>
@import '../../styles/index';
@import '../../styles/_element-icons';

// 图标基础样式
.md-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  vertical-align: middle;
  color: $md-color-text;
  font-size: $md-size-medium;
  transition: all $md-transition;

  &.md-icon--text {
    font-family: inherit;
  }

  &.md-icon--loading {
    animation: rotate 1s linear infinite;
  }

  &.md-icon--spin {
    animation: rotate 1s linear infinite;
  }

  &.md-icon--small {
    font-size: $md-size-small;
  }
  &.md-icon--medium {
    font-size: $md-size-medium;
  }
  &.md-icon--large {
    font-size: $md-size-large;
  }

  // 居中
  &.icon-center {
    margin: 0 auto;
  }

  &__loading {
    width: 1em;
    height: 1em;
    border: 2px solid rgba($md-color-text, 0.2);
    border-top-color: currentColor;
    border-radius: 50%;
    animation: rotate 0.8s linear infinite;
  }
}

// 文本图标
.md-icon-text {
  display: inline-block;
}

// 旋转动画
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
