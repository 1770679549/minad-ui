<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 17:05:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 17:04:44
 * @FilePath: \minad-ui\src\components\md-text\md-text.vue
 * @Description: 文本组件
 *
-->
<template>
  <view
    :class="[
      'md-text',
      type,
      size,
      {
        bold,
        italic,
        underline,
        ['text-center']: align === 'center',
        ['text-right']: align === 'right',
        ['text-left']: align === 'left'
      }
    ]"
    :style="{
      lineHeight: lineHeight || undefined,
      letterSpacing: letterSpacing || undefined
    }"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { TextProps } from './type'

const props = defineProps<TextProps>()
</script>

<style lang="scss" scoped>

// 文本基础样式
.md-text {
  font-size: $md-size-medium;
  color: $md-color-text;
  line-height: 1.5;

  // 类型变体
  &.primary { color: $md-color-primary; }
  &.success { color: $md-color-success; }
  &.warning { color: $md-color-warning; }
  &.danger { color: $md-color-danger; }
  &.info { color: $md-color-info; }
  &.secondary { color: $md-color-text-grey; }

  // 尺寸变体
  &.large { font-size: $md-size-large; }
  &.medium { font-size: $md-size-medium; }
  &.small { font-size: $md-size-small; }

  // 样式变体
  &.bold { font-weight: 700; }
  &.italic { font-style: italic; }
  &.underline { text-decoration: underline; }

  // 对齐方式
  &.text-center { text-align: center; }
  &.text-right { text-align: right; }
  &.text-left { text-align: left; }
}
</style>
