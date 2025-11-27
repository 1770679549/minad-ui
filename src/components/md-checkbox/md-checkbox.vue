<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 20:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 20:00:00
 * @FilePath: \minad-ui\src\components\md-checkbox\md-checkbox.vue
 * @Description: Checkbox 复选框组件
 *
-->
<template>
  <view 
    class="md-checkbox"
    :class="checkboxClasses"
    :style="checkboxStyles"
    @click="handleClick"
  >
    <!-- 复选框 -->
    <view 
      class="md-checkbox__input"
      :class="[
        {
          'md-checkbox__input--checked': isChecked,
          'md-checkbox__input--disabled': isDisabled,
          'md-checkbox__input--border': props.border
        }
      ]"
      :style="inputStyles"
    >
      <!-- 选中图标 -->
      <text 
        v-if="isChecked" 
        class="md-checkbox__icon"
        :style="{
          color: props.color || $md-color-primary
        }"
      >✓</text>
    </view>
    
    <!-- 标签 -->
    <text 
      v-if="props.label" 
      class="md-checkbox__label"
      :class="{
        'md-checkbox__label--disabled': isDisabled
      }"
    >{{ props.label }}</text>
    
    <!-- 插槽 -->
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted, watch } from 'vue'
import type { CheckboxProps, CheckboxEmits } from './type'
import type { CheckboxGroupProvide } from './type'

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  value: '',
  label: '',
  disabled: false,
  border: false,
  color: '',
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<CheckboxEmits>()

// 从父组件注入方法
const checkboxGroupProvide = inject<CheckboxGroupProvide>('checkboxGroupProvide')

// 计算是否选中
const isChecked = computed(() => {
  if (checkboxGroupProvide) {
    // 如果在CheckboxGroup中，根据group的modelValue判断
    return checkboxGroupProvide.modelValue.includes(props.value)
  }
  // 否则根据自身的modelValue判断
  return props.modelValue
})

// 计算是否禁用
const isDisabled = computed(() => {
  // 如果在CheckboxGroup中，根据group的disabled判断
  return props.disabled || (checkboxGroupProvide?.disabled || false)
})

// 计算输入框样式
const inputStyles = computed(() => {
  const styles: Record<string, any> = {}
  
  if (props.color && isChecked.value) {
    styles.borderColor = props.color
    styles.backgroundColor = props.color
  }
  
  return styles
})

// 计算类名
const checkboxClasses = computed(() => {
  return [
    'md-checkbox',
    {
      'md-checkbox--disabled': isDisabled.value
    },
    props.customClass
  ]
})

// 计算样式
const checkboxStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 处理点击事件
const handleClick = () => {
  if (isDisabled.value) return
  
  const newChecked = !isChecked.value
  
  if (checkboxGroupProvide) {
    // 如果在CheckboxGroup中，调用group的方法处理
    checkboxGroupProvide.handleCheckboxChange(props.value, newChecked)
  } else {
    // 否则直接更新自身状态
    emit('update:modelValue', newChecked)
    emit('change', newChecked, props.value)
  }
}

// 监听modelValue变化
watch(
  () => props.modelValue,
  (newValue) => {
    // 当不在CheckboxGroup中时，modelValue变化需要触发change事件
    if (!checkboxGroupProvide) {
      emit('change', newValue, props.value)
    }
  }
)

// 注册到CheckboxGroup
onMounted(() => {
  if (checkboxGroupProvide) {
    checkboxGroupProvide.registerCheckbox({
      value: props.value,
      checked: isChecked.value
    })
  }
})

// 从CheckboxGroup注销
onUnmounted(() => {
  if (checkboxGroupProvide) {
    checkboxGroupProvide.unregisterCheckbox({
      value: props.value
    })
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 复选框容器
.md-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  &--disabled {
    cursor: not-allowed;
  }
}

// 复选框
.md-checkbox__input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid $md-color-border;
  border-radius: $md-border-radius-base;
  background-color: #fff;
  transition: all $md-transition;
  margin-right: $md-spacing-xs;
  
  // 选中状态
  &--checked {
    border-color: $md-color-primary;
    background-color: $md-color-primary;
  }
  
  // 禁用状态
  &--disabled {
    border-color: $md-color-border;
    background-color: $md-color-bg-disabled;
  }
  
  // 边框样式
  &--border {
    border-width: 1px;
    border-style: solid;
  }
}

// 选中图标
.md-checkbox__icon {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

// 标签
.md-checkbox__label {
  font-size: $md-size-medium;
  color: $md-color-text;
  line-height: 20px;
  
  // 禁用状态
  &--disabled {
    color: $md-color-text-grey;
  }
}
</style>