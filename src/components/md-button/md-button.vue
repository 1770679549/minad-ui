<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-24 18:04:22
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 14:51:32
 * @FilePath: \minad-ui\src\components\md-button\md-button.vue
 * @Description:
 *
-->
<template>
  <button :class="['md-button', type, size, { disabled, loading }]" :disabled="disabled" @click="handleClick">
    <view v-if="loading" class="md-button-loading">
      <!-- 简单的加载动画，可根据需求替换为更复杂的SVG动画 -->
      <view class="md-button-loading-spinner"></view>
    </view>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { useI18n } from '../../i18n/i18n'
import type { ButtonProps, ButtonEmits } from './type'

const props = defineProps<ButtonProps>()

const emit = defineEmits<ButtonEmits>()

// Use i18n
const { t } = useI18n()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style lang="scss" scoped>

// 按钮基础样式
.md-button {
  padding: $md-spacing-sm $md-spacing-lg;
  border: none;
  border-radius: $md-border-radius-base;
  cursor: pointer;
  font-size: $md-size-medium;
  transition: $md-transition;

  // 类型变体
  &.primary { background-color: $md-color-primary; color: $md-color-text-inverse; }
  &.success { background-color: $md-color-success; color: $md-color-text-inverse; }
  &.warning { background-color: $md-color-warning; color: $md-color-text-inverse; }
  &.danger { background-color: $md-color-danger; color: $md-color-text-inverse; }
  &.info { background-color: $md-color-info; color: $md-color-text-inverse; }

  // 尺寸变体
  &.large { font-size: $md-size-large; padding: $md-spacing-md $md-spacing-xl; }
  &.medium { font-size: $md-size-medium; padding: $md-spacing-sm $md-spacing-lg; }
  &.small { font-size: $md-size-small; padding: $md-spacing-xs $md-spacing-md; }

  // 状态变体
  &.loading, &.disabled, &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

// 按钮加载指示器
.md-button-loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: $md-spacing-xs;
}

.md-button-loading-spinner {
  width: calc(#{$md-size-small} + 4px);
  height: calc(#{$md-size-small} + 4px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
}

// 深色主题加载指示器（用于亮色按钮类型）
.md-button.type-success .md-button-loading-spinner,
.md-button.type-info .md-button-loading-spinner,
.md-button.type-warning .md-button-loading-spinner,
.md-button.type-danger .md-button-loading-spinner {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top-color: currentColor;
}

// Loading spinner animation
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
