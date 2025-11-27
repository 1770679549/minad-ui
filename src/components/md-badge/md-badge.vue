<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 18:30:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 18:30:00
 * @FilePath: \minad-ui\src\components\md-badge\md-badge.vue
 * @Description: Badge 徽章组件
 *
-->
<template>
  <view :class="badgeClasses" :style="badgeStyles">
    <!-- 徽章内容 -->
    <slot></slot>
    
    <!-- 徽章 -->
    <view 
      v-if="!props.hidden && (showDot || badgeValue)" 
      class="md-badge__content"
      :class="[
        `md-badge__content--${props.type}`,
        {
          'md-badge__content--dot': showDot,
          'md-badge__content--fixed': isFixed
        }
      ]"
      :style="contentStyles"
    >
      <text v-if="!showDot" class="md-badge__text">{{ badgeValue }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { BadgeProps } from './type'

const props = withDefaults(defineProps<BadgeProps>(), {
  value: '',
  max: 99,
  dot: false,
  hidden: false,
  type: 'danger',
  color: '',
  customClass: '',
  customStyle: () => ({})
})

// 是否显示红点
const showDot = computed(() => {
  return props.dot || (props.value === 0 && !props.max)
})

// 计算徽章显示值
const badgeValue = computed(() => {
  if (showDot.value || props.hidden) return ''
  
  const value = props.value
  if (typeof value === 'number') {
    // 数字类型，处理最大值
    return value > props.max ? `${props.max}+` : value
  }
  // 字符串类型，直接返回
  return value
})

// 是否为固定尺寸
const isFixed = computed(() => {
  return typeof badgeValue.value === 'string' && badgeValue.value.length > 2
})

// 计算徽章内容样式
const contentStyles = computed(() => {
  const styles: Record<string, any> = {}
  
  // 自定义颜色
  if (props.color) {
    styles.backgroundColor = props.color
  }
  
  return styles
})

// 计算类名
const badgeClasses = computed(() => {
  return [
    'md-badge',
    props.customClass
  ]
})

// 计算样式
const badgeStyles = computed(() => {
  return {
    ...props.customStyle
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 徽章容器
.md-badge {
  position: relative;
  display: inline-block;
}

// 徽章内容
.md-badge__content {
  position: absolute;
  top: -5px;
  right: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: $md-border-radius-circle;
  font-size: $md-size-xs;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  transform: translate(50%, -50%);
  
  // 类型样式
  &--primary {
    background-color: $md-color-primary;
  }
  
  &--success {
    background-color: $md-color-success;
  }
  
  &--warning {
    background-color: $md-color-warning;
  }
  
  &--danger {
    background-color: $md-color-danger;
  }
  
  &--info {
    background-color: $md-color-info;
  }
  
  // 红点样式
  &--dot {
    width: 8px;
    height: 8px;
    min-width: 8px;
    padding: 0;
  }
  
  // 固定尺寸样式
  &--fixed {
    min-width: 20px;
    height: 20px;
  }
}

// 徽章文本
.md-badge__text {
  display: inline-block;
  line-height: 1;
}
</style>