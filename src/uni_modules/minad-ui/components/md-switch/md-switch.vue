<template>
  <view 
    class="md-switch-container" 
    :class="{
      'md-switch-container--text-inside': textPosition === 'inside' && (activeText || inactiveText),
      'md-switch-container--text-outside': textPosition === 'outside' && (activeText || inactiveText)
    }"
  >
    <!-- 左侧文字（外部位置时显示） -->
    <text 
      v-if="textPosition === 'outside' && inactiveText && modelValue !== activeValue" 
      class="md-switch__text md-switch__text--left"
    >
      {{ inactiveText }}
    </text>
    
    <view 
      class="md-switch" 
      :class="switchClasses"
      :style="switchStyles"
      @click="handleClick"
    >
      <!-- 开关轨道 -->
      <view class="md-switch__track"></view>
      
      <!-- 内部文字 -->
      <text 
        v-if="textPosition === 'inside' && currentText" 
        class="md-switch__text md-switch__text--inside"
      >
        {{ currentText }}
      </text>
      
      <!-- 开关滑块 -->
      <view class="md-switch__thumb">
        <slot name="icon">
          <view v-if="loading" class="md-switch__loading">
            <md-icon name="loading" size="12" />
          </view>
        </slot>
      </view>
      
      <!-- 输入框 -->
      <input 
        v-if="native" 
        type="checkbox" 
        class="md-switch__input"
        :checked="modelValue === activeValue"
        :disabled="disabled"
        @change="handleInputChange"
      />
    </view>
    
    <!-- 右侧文字（外部位置时显示） -->
    <text 
      v-if="textPosition === 'outside' && activeText && modelValue === activeValue" 
      class="md-switch__text md-switch__text--right"
    >
      {{ activeText }}
    </text>
    <text 
      v-if="textPosition === 'outside' && inactiveText && modelValue !== activeValue" 
      class="md-switch__text md-switch__text--right"
    >
      {{ inactiveText }}
    </text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isString, isNumber, isBoolean } from '../../utils'
import { MdIcon } from '../md-icon'
import type { SwitchProps, SwitchEmits } from './type'

// Props 定义
const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
  loading: false,
  size: 'medium',
  activeText: '',
  inactiveText: '',
  activeValue: true,
  inactiveValue: false,
  activeColor: undefined,
  inactiveColor: undefined,
  native: false,
  customClass: '',
  width: undefined,
  textPosition: 'outside'
})

// Emits 定义
const emit = defineEmits<SwitchEmits>()

// 计算属性
const switchClasses = computed(() => {
  return {
    'md-switch--checked': props.modelValue === props.activeValue,
    'md-switch--disabled': props.disabled,
    'md-switch--loading': props.loading,
    'md-switch--small': props.size === 'small',
    'md-switch--medium': props.size === 'medium',
    'md-switch--large': props.size === 'large',
    'md-switch--text-inside': props.textPosition === 'inside' && (props.activeText || props.inactiveText),
    'md-switch--text-outside': props.textPosition === 'outside' && (props.activeText || props.inactiveText),
    [props.customClass]: props.customClass
  }
})

const switchStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.activeColor) {
    styles['--md-switch-active-color'] = props.activeColor
  }
  
  if (props.inactiveColor) {
    styles['--md-switch-inactive-color'] = props.inactiveColor
  }
  
  if (props.width) {
    styles['width'] = `${props.width}px`
  }
  
  return styles
})

const currentText = computed(() => {
  return props.modelValue === props.activeValue ? props.activeText : props.inactiveText
})

// 方法
const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    return
  }
  
  emit('click', event)
  const newValue = props.modelValue === props.activeValue ? props.inactiveValue : props.activeValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

const handleInputChange = (event: Event) => {
  if (props.disabled || props.loading) {
    return
  }
  
  const target = event.target as HTMLInputElement
  const newValue = target.checked ? props.activeValue : props.inactiveValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 容器样式
.md-switch-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

// 外部文字容器
.md-switch-container--text-outside {
  .md-switch__text {
    margin: 0 8px;
    font-size: 14px;
    color: #333;
  }
}

// 内部文字容器
.md-switch-container--text-inside {
  .md-switch {
    padding: 0 12px;
    width: auto;
    justify-content: space-between;
  }
}

.md-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  
  // 尺寸变量
  --md-switch-height-small: 16px;
  --md-switch-width-small: 30px;
  --md-switch-thumb-size-small: 12px;
  
  --md-switch-height-medium: 20px;
  --md-switch-width-medium: 38px;
  --md-switch-thumb-size-medium: 16px;
  
  --md-switch-height-large: 24px;
  --md-switch-width-large: 46px;
  --md-switch-thumb-size-large: 20px;
  
  // 颜色变量
  --md-switch-active-color: #007aff;
  --md-switch-inactive-color: #e0e0e0;
  --md-switch-active-background: #007aff;
  --md-switch-inactive-background: #e0e0e0;
  --md-switch-thumb-color: #ffffff;
  --md-switch-thumb-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  --md-switch-text-color: #333333;
  --md-switch-text-color-active: #ffffff;
  
  // 基本样式
  height: var(--md-switch-height-medium);
  width: var(--md-switch-width-medium);
  
  &:active {
    opacity: 0.7;
  }
  
  // 禁用状态
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  // 加载状态
  &--loading {
    cursor: not-allowed;
  }
  
  // 尺寸变体
  &--small {
    height: var(--md-switch-height-small);
    width: var(--md-switch-width-small);
    
    .md-switch__text--inside {
      font-size: 12px;
    }
  }
  
  &--medium {
    height: var(--md-switch-height-medium);
    width: var(--md-switch-width-medium);
    
    .md-switch__text--inside {
      font-size: 14px;
    }
  }
  
  &--large {
    height: var(--md-switch-height-large);
    width: var(--md-switch-width-large);
    
    .md-switch__text--inside {
      font-size: 16px;
    }
  }
  
  // 轨道样式
  &__track {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: var(--md-switch-inactive-color);
    transition: all 0.3s ease;
    z-index: 0;
  }
  
  // 文字样式
  &__text {
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    user-select: none;
    
    &--inside {
      position: relative;
      z-index: 1;
      color: var(--md-switch-text-color);
      padding: 0 8px;
      white-space: nowrap;
    }
    
    &--left {
      color: var(--md-switch-text-color);
    }
    
    &--right {
      color: var(--md-switch-text-color);
    }
  }
  
  // 滑块样式
  &__thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    height: calc(var(--md-switch-thumb-size-medium) - 4px);
    width: calc(var(--md-switch-thumb-size-medium) - 4px);
    border-radius: 50%;
    background-color: var(--md-switch-thumb-color);
    box-shadow: var(--md-switch-thumb-shadow);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  
  // 小尺寸滑块
  &--small &__thumb {
    height: calc(var(--md-switch-thumb-size-small) - 4px);
    width: calc(var(--md-switch-thumb-size-small) - 4px);
  }
  
  // 大尺寸滑块
  &--large &__thumb {
    height: calc(var(--md-switch-thumb-size-large) - 4px);
    width: calc(var(--md-switch-thumb-size-large) - 4px);
  }
  
  // 加载状态
  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--md-switch-active-color);
  }
  
  // 选中状态
  &--checked {
    & .md-switch__track {
      background-color: var(--md-switch-active-color);
    }
    
    & .md-switch__thumb {
      transform: translateX(calc(var(--md-switch-width-medium) - var(--md-switch-thumb-size-medium)));
    }
    
    &--small .md-switch__thumb {
      transform: translateX(calc(var(--md-switch-width-small) - var(--md-switch-thumb-size-small)));
    }
    
    &--large .md-switch__thumb {
      transform: translateX(calc(var(--md-switch-width-large) - var(--md-switch-thumb-size-large)));
    }
    
    & .md-switch__text--inside {
      color: var(--md-switch-text-color-active);
    }
  }
  
  // 原生输入框
  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
  }
}
</style>