<template>
  <view class="md-tabbar" :class="tabbarClasses" :style="tabbarStyle">
    <!-- 使用子组件方式 -->
    <slot v-if="$slots.default" />
    
    <!-- 使用 tabs 属性方式 -->
    <view 
  v-else
  v-for="(item, index) in tabs" 
  :key="index"
  class="md-tabbar__item"
  :class="{
    'md-tabbar__item--active': modelValue === index,
    'md-tabbar__item--disabled': item.disabled
  }"
  @click="handleItemClick(index, item)"
>
  <view class="md-tabbar__icon-wrapper">
    <md-icon 
      :name="modelValue === index ? (item.activeIcon || item.icon) : item.icon" 
      class="md-tabbar__icon"
    ></md-icon>
        <view v-if="item.badge" class="md-tabbar__badge" :class="{ 'md-tabbar__badge--dot': item.badge === true }">
          {{ item.badge !== true ? item.badge : '' }}
        </view>
      </view>
      <view class="md-tabbar__text">{{ item.text }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { TabbarProps, TabbarEmits, TabbarItem } from './type'

// 定义 Props
const props = withDefaults(defineProps<TabbarProps>(), {
  tabs: () => [],
  modelValue: 0,
  fixed: true,
  bordered: true,
  backgroundColor: '',
  textColor: '',
  activeTextColor: '',
  height: 50,
  customStyle: () => ({})
})

// 定义 Emits
const emit = defineEmits<TabbarEmits>()

// 计算 Tabbar 类名
const tabbarClasses = computed(() => {
  return {
    'md-tabbar--fixed': props.fixed,
    'md-tabbar--bordered': props.bordered
  }
})

// 计算 Tabbar 样式
const tabbarStyle = computed<Record<string, any>>(() => {
  const style: Record<string, any> = {
    height: typeof props.height === 'number' ? `${props.height}px` : props.height,
    ...props.customStyle
  }
  
  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor
  }
  
  if (props.textColor) {
    style['--md-tabbar-text-color'] = props.textColor
  }
  
  if (props.activeTextColor) {
    style['--md-tabbar-active-text-color'] = props.activeTextColor
  }
  
  return style
})

// 处理标签点击事件
const handleItemClick = (index: number, item?: TabbarItem) => {
  if (item?.disabled) {
    emit('disabled', index, item)
    return
  }
  
  if (index !== props.modelValue) {
    emit('update:modelValue', index)
    emit('change', index, item)
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

.md-tabbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--md-tabbar-bg-color, #ffffff);
  padding-bottom: env(safe-area-inset-bottom); // 适配刘海屏
  box-sizing: border-box;
  position: relative;
  
  &--fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: var(--md-z-index-tabbar, 1000);
  }
  
  &--bordered {
    border-top: 1px solid var(--md-tabbar-border-color, #e5e5e5);
  }
  
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    padding: var(--md-padding-xs, 4px) 0;
    cursor: pointer;
    user-select: none;
    
    &--active {
      .md-tabbar__icon {
        color: var(--md-tabbar-active-text-color, #409eff);
      }
      
      .md-tabbar__text {
        color: var(--md-tabbar-active-text-color, #409eff);
        font-weight: var(--md-font-weight-medium, 500);
      }
    }
    
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    &:active {
      opacity: 0.7;
    }
  }
  
  &__icon-wrapper {
    position: relative;
    margin-bottom: var(--md-margin-xs, 4px);
  }
  
  &__icon {
    font-size: var(--md-icon-size-lg, 24px);
    color: var(--md-tabbar-text-color, #606266);
    transition: color 0.3s ease;
  }
  
  &__text {
    font-size: var(--md-font-size-sm, 12px);
    color: var(--md-tabbar-text-color, #606266);
    transition: color 0.3s ease;
  }
  
  &__badge {
    position: absolute;
    top: -4px;
    right: -8px;
    min-width: 16px;
    height: 16px;
    padding: 0 5px;
    background-color: var(--md-color-danger, #f56c6c);
    color: #ffffff;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    border-radius: 8px;
    white-space: nowrap;
    
    &--dot {
      min-width: 8px;
      width: 8px;
      height: 8px;
      padding: 0;
      border-radius: 50%;
    }
  }
}
</style>