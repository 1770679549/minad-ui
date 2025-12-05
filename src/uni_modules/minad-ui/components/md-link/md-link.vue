<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 17:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 17:00:00
 * @FilePath: \minad-ui\src\components\md-link\md-link.vue
 * @Description: 链接组件
 *
-->
<template>
  <a 
    :class="['md-link', type, size, { disabled, underline, external }]"
    :href="disabled ? undefined : href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    @click="handleClick"
  >
    <slot></slot>
    <view v-if="external" class="md-link-external-icon">
      <!-- 简单的外部链接图标 -->
      <view class="md-link-external-icon-inner"></view>
    </view>
  </a>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import type { LinkProps, LinkEmits } from './type'

const props = defineProps<LinkProps>()

const emit = defineEmits<LinkEmits>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<style lang="scss" scoped>

// 链接基础样式
.md-link {
  position: relative;
  text-decoration: none;
  font-size: $md-size-medium;
  transition: $md-transition;
  cursor: pointer;

  // 类型变体
  &.primary { color: $md-color-primary; }
  &.success { color: $md-color-success; }
  &.warning { color: $md-color-warning; }
  &.danger { color: $md-color-danger; }
  &.info { color: $md-color-info; }

  // 尺寸变体
  &.large { font-size: $md-size-large; }
  &.medium { font-size: $md-size-medium; }
  &.small { font-size: $md-size-small; }

  // 下划线控制
  &:not(.underline) {
    text-decoration: none;
  }

  &.underline {
    text-decoration: underline;
  }

  // 禁用状态
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // 悬停效果
  &:not(.disabled):hover {
    opacity: 0.8;
  }

  // 激活效果
  &:not(.disabled):active {
    opacity: 0.6;
  }
}

// 外部链接图标
.md-link-external-icon {
  display: inline-block;
  width: $md-size-small;
  height: $md-size-small;
  margin-left: $md-spacing-xs;
  vertical-align: middle;
}

.md-link-external-icon-inner {
  width: 100%;
  height: 100%;
  border: 1px solid currentColor;
  border-left: none;
  border-bottom: none;
  position: relative;
  transform: rotate(45deg);

  &::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 1px;
    background-color: currentColor;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}
</style>