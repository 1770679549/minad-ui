<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 20:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 20:00:00
 * @FilePath: \minad-ui\src\components\md-radio\md-radio.vue
 * @Description: Radio 单选框组件
 *
-->
<template>
  <view 
    class="md-radio"
    :class="radioClasses"
    :style="radioStyles"
    @click="handleClick"
  >
    <!-- 单选框 -->
    <view 
      class="md-radio__input"
      :class="[
        {
          'md-radio__input--checked': isChecked,
          'md-radio__input--disabled': isDisabled,
          'md-radio__input--border': props.border
        }
      ]"
      :style="inputStyles"
    >
      <!-- 选中图标 -->
      <view 
        v-if="isChecked" 
        class="md-radio__icon"
        :style="{
          backgroundColor: props.color
        }"
      ></view>
    </view>
    
    <!-- 标签 -->
    <text 
      v-if="props.label" 
      class="md-radio__label"
      :class="{
        'md-radio__label--disabled': isDisabled
      }"
    >{{ props.label }}</text>
    
    <!-- 插槽 -->
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted, watch } from 'vue'
import type { RadioProps, RadioEmits } from './type'
import type { RadioGroupProvide } from './type'

const props = withDefaults(defineProps<RadioProps>(), {
  modelValue: false,
  value: '',
  label: '',
  disabled: false,
  border: false,
  color: '',
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<RadioEmits>()

// 从父组件注入方法
const radioGroupProvide = inject<RadioGroupProvide>('radioGroupProvide')

// 计算是否选中
const isChecked = computed(() => {
  if (radioGroupProvide) {
    // 如果在RadioGroup中，根据group的modelValue判断
    return radioGroupProvide.modelValue === props.value
  }
  // 否则根据自身的modelValue判断
  return props.modelValue
})

// 计算是否禁用
const isDisabled = computed(() => {
  // 如果在RadioGroup中，根据group的disabled判断
  return props.disabled || (radioGroupProvide?.disabled || false)
})

// 计算输入框样式
const inputStyles = computed(() => {
  const styles: Record<string, any> = {}
  
  if (isChecked.value) {
    if (props.color) {
      styles.borderColor = props.color
    }
  }
  
  return styles
})

// 计算类名
const radioClasses = computed(() => {
  return [
    'md-radio',
    {
      'md-radio--disabled': isDisabled.value
    },
    props.customClass
  ]
})

// 计算样式
const radioStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 处理点击事件
const handleClick = () => {
  if (isDisabled.value) return
  
  const newChecked = !isChecked.value
  
  if (radioGroupProvide) {
    // 如果在RadioGroup中，调用group的方法处理
    radioGroupProvide.handleRadioChange(props.value)
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
    // 当不在RadioGroup中时，modelValue变化需要触发change事件
    if (!radioGroupProvide) {
      emit('change', newValue, props.value)
    }
  }
)

// 注册到RadioGroup
onMounted(() => {
  if (radioGroupProvide) {
    radioGroupProvide.registerRadio({
      value: props.value,
      checked: isChecked.value
    })
  }
})

// 从RadioGroup注销
onUnmounted(() => {
  if (radioGroupProvide) {
    radioGroupProvide.unregisterRadio({
      value: props.value
    })
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 单选框容器
.md-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  &--disabled {
    cursor: not-allowed;
  }
}

// 单选框
.md-radio__input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid $md-color-border;
  border-radius: 50%;
  background-color: #fff;
  transition: all $md-transition;
  margin-right: $md-spacing-xs;
  position: relative;
  
  // 选中状态
  &--checked {
    border-color: $md-color-primary;
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
.md-radio__icon {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $md-color-primary;
  transition: all $md-transition;
}

// 标签
.md-radio__label {
  font-size: $md-size-medium;
  color: $md-color-text;
  line-height: 20px;
  
  // 禁用状态
  &--disabled {
    color: $md-color-text-grey;
  }
}
</style>
