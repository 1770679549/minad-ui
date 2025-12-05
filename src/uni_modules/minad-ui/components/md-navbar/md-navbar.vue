<template>
  <view class="md-navbar" :style="navbarStyle">
    <view class="md-navbar__left" @click="handleLeftClick">
      <slot name="left">
        <view v-if="leftText" class="md-navbar__text">{{ leftText }}</view>
        <md-icon v-else-if="leftIcon" :name="leftIcon" class="md-navbar__icon"></md-icon>
      </slot>
    </view>
    
    <view class="md-navbar__center">
      <slot name="center">
        <view v-if="title" class="md-navbar__title">{{ title }}</view>
      </slot>
    </view>
    
    <view class="md-navbar__right" @click="handleRightClick">
      <slot name="right">
        <view v-if="rightText" class="md-navbar__text">{{ rightText }}</view>
        <md-icon v-else-if="rightIcon" :name="rightIcon" class="md-navbar__icon"></md-icon>
      </slot>
    </view>
    
    <!-- 占位元素，用于固定定位时防止内容被遮挡 -->
    <view v-if="fixed" class="md-navbar__placeholder" :style="{ height: height + 'px' }"></view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { NavbarProps, NavbarEmits } from './type'

// 定义 Props
const props = withDefaults(defineProps<NavbarProps>(), {
  title: '',
  leftText: '',
  leftIcon: '',
  rightText: '',
  rightIcon: '',
  height: 44,
  backgroundColor: '',
  textColor: '',
  fixed: false,
  bordered: true,
  leftClickable: true,
  rightClickable: true,
  customStyle: () => ({})
})

// 定义 Emits
const emit = defineEmits<NavbarEmits>()

// 计算导航栏样式
const navbarStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    height: typeof props.height === 'number' ? `${props.height}px` : props.height,
    ...props.customStyle
  }
  
  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor
  }
  
  if (props.textColor) {
    style.color = props.textColor
  }
  
  return style
})

// 处理左侧点击事件
const handleLeftClick = () => {
  if (props.leftClickable) {
    emit('left-click')
  }
}

// 处理右侧点击事件
const handleRightClick = () => {
  if (props.rightClickable) {
    emit('right-click')
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

.md-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--md-navbar-bg-color, #ffffff);
  color: var(--md-navbar-text-color, #000000);
  padding: 0 var(--md-padding-md, 16px);
  box-sizing: border-box;
  position: relative;
  
  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--md-z-index-navbar, 1000);
  }
  
  &--bordered {
    border-bottom: 1px solid var(--md-border-color, #e5e5e5);
  }
  
  &__placeholder {
    width: 100%;
  }
  
  &__left,
  &__right {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 var(--md-padding-sm, 8px);
    cursor: pointer;
    user-select: none;
    
    &:active {
      opacity: 0.7;
    }
  }
  
  &__center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
  }
  
  &__title {
    font-size: var(--md-font-size-lg, 18px);
    font-weight: var(--md-font-weight-bold, 600);
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
  
  &__text {
    font-size: var(--md-font-size-base, 14px);
    color: inherit;
  }
  
  &__icon {
    font-size: var(--md-icon-size-lg, 20px);
    color: inherit;
  }
}
</style>