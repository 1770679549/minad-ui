<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 15:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 15:00:00
 * @FilePath: \minad-ui\src\components\md-card\md-card.vue
 * @Description: Card 卡片组件
 *
-->
<template>
  <view 
    :class="cardClasses"
    :style="cardStyles"
    @click="handleClick"
  >
    <!-- 卡片头部 -->
    <view 
      v-if="showHeader || $slots.header"
      class="md-card__header"
    >
      <slot name="header">
        <text v-if="title" class="md-card__title">{{ title }}</text>
      </slot>
    </view>
    
    <!-- 卡片内容 -->
    <view class="md-card__content">
      <slot></slot>
    </view>
    
    <!-- 卡片底部 -->
    <view 
      v-if="showFooter || $slots.footer"
      class="md-card__footer"
    >
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CardProps, CardEmits } from './type'

const props = withDefaults(defineProps<CardProps>(), {
  type: 'default',
  showHeader: true,
  showFooter: false,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<CardEmits>()

// 计算卡片类名
const cardClasses = computed(() => {
  return [
    'md-card',
    `md-card--${props.type}`,
    props.customClass
  ]
})

// 计算卡片样式
const cardStyles = computed(() => {
  const styles: Record<string, any> = {
    ...props.customStyle
  }
  
  if (props.backgroundColor) {
    styles.backgroundColor = props.backgroundColor
  }
  
  if (props.borderRadius) {
    styles.borderRadius = typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius
  }
  
  if (props.shadow) {
    styles.boxShadow = props.shadow
  }
  
  return styles
})

// 处理卡片点击事件
const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 卡片基础样式
.md-card {
  position: relative;
  background-color: $md-color-bg;
  border-radius: $md-border-radius-base;
  transition: $md-transition;
  overflow: hidden;
  
  // 类型变体
  &--default {
    background-color: $md-color-bg;
  }
  
  &--bordered {
    border: 1px solid $md-color-border;
  }
  
  &--shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

// 卡片头部
.md-card__header {
  padding: $md-spacing-lg;
  border-bottom: 1px solid $md-color-border;
}

// 卡片标题
.md-card__title {
  font-size: $md-size-large;
  font-weight: 700;
  color: $md-color-text;
}

// 卡片内容
.md-card__content {
  padding: $md-spacing-lg;
  color: $md-color-text;
  font-size: $md-size-medium;
  line-height: 1.5;
}

// 卡片底部
.md-card__footer {
  padding: $md-spacing-lg;
  border-top: 1px solid $md-color-border;
  display: flex;
  justify-content: flex-end;
  gap: $md-spacing-sm;
}
</style>
