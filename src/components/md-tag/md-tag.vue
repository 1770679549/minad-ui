<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 10:42:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 10:42:00
 * @FilePath: \minad-ui\src\components\md-tag\md-tag.vue
 * @Description: 标签组件
 *
-->
<template>
  <view 
    :class="tagClasses"
    :style="tagStyles"
    @click="handleClick"
  >
    <slot></slot>
    <view 
      v-if="closable"
      class="md-tag-close"
      @click.stop="handleClose"
    >
      <text class="md-tag-close-icon">×</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit } from '../../utils'
import type { TagProps, TagEmits } from './type'

// Props定义
const props = defineProps<TagProps>()

// 事件定义
const emit = defineEmits<TagEmits>()

// 计算标签类名
const tagClasses = computed(() => {
  const classes = ['md-tag']
  
  // 类型变体
  if (props.type) {
    classes.push(`md-tag--${props.type}`)
  }
  
  // 尺寸变体
  if (props.size) {
    classes.push(`md-tag--${props.size}`)
  }
  
  // 状态变体
  if (props.disabled) {
    classes.push('md-tag--disabled')
  }
  
  if (props.round) {
    classes.push('md-tag--round')
  }
  
  if (props.closable) {
    classes.push('md-tag--closable')
  }
  
  // 自定义类名
  if (props.customClass) {
    classes.push(props.customClass)
  }
  
  return classes
})

// 计算标签样式
const tagStyles = computed(() => {
  const styles: Record<string, any> = {}
  
  // 自定义颜色
  if (props.color) {
    styles.color = props.color
  }
  
  if (props.bgColor) {
    styles.backgroundColor = props.bgColor
  }
  
  // 自定义样式
  if (props.customStyle) {
    Object.assign(styles, props.customStyle)
  }
  
  return styles
})

// 处理点击事件
const handleClick = (event: any) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

// 处理关闭事件
const handleClose = (event: any) => {
  if (!props.disabled) {
    emit('close', event)
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/index';

// 标签基础样式
.md-tag {
  display: inline-flex;
  align-items: center;
  padding: $md-spacing-xs $md-spacing-sm;
  font-size: $md-size-small;
  line-height: 1.4;
  border-radius: $md-border-radius-base;
  transition: $md-transition;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  
  // 类型变体
  &--primary {
    background-color: rgba($md-color-primary, 0.1);
    color: $md-color-primary;
  }
  
  &--success {
    background-color: rgba($md-color-success, 0.1);
    color: $md-color-success;
  }
  
  &--warning {
    background-color: rgba($md-color-warning, 0.1);
    color: $md-color-warning;
  }
  
  &--danger {
    background-color: rgba($md-color-danger, 0.1);
    color: $md-color-danger;
  }
  
  &--info {
    background-color: rgba($md-color-info, 0.1);
    color: $md-color-info;
  }
  
  // 尺寸变体
  &--large {
    padding: $md-spacing-sm $md-spacing-md;
    font-size: $md-size-medium;
  }
  
  &--medium {
    padding: $md-spacing-xs $md-spacing-sm;
    font-size: $md-size-small;
  }
  
  &--small {
    padding: 2px $md-spacing-xs;
    font-size: $md-size-xs;
  }
  
  // 状态变体
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &--round {
    border-radius: $md-border-radius-circle;
  }
  
  &--closable {
    padding-right: $md-spacing-xs;
  }
}

// 关闭按钮
.md-tag-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: $md-spacing-xs;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: $md-transition;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  // 根据标签类型调整关闭按钮颜色
  .md-tag--primary & {
    background-color: rgba($md-color-primary, 0.2);
    
    &:hover {
      background-color: rgba($md-color-primary, 0.3);
    }
  }
  
  .md-tag--success & {
    background-color: rgba($md-color-success, 0.2);
    
    &:hover {
      background-color: rgba($md-color-success, 0.3);
    }
  }
  
  .md-tag--warning & {
    background-color: rgba($md-color-warning, 0.2);
    
    &:hover {
      background-color: rgba($md-color-warning, 0.3);
    }
  }
  
  .md-tag--danger & {
    background-color: rgba($md-color-danger, 0.2);
    
    &:hover {
      background-color: rgba($md-color-danger, 0.3);
    }
  }
  
  .md-tag--info & {
    background-color: rgba($md-color-info, 0.2);
    
    &:hover {
      background-color: rgba($md-color-info, 0.3);
    }
  }
}

// 关闭按钮图标
.md-tag-close-icon {
  font-size: 12px;
  line-height: 1;
  color: inherit;
}
</style>
