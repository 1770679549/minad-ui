<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 20:05:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 20:05:00
 * @FilePath: \minad-ui\src\components\md-checkbox\md-checkbox-group.vue
 * @Description: CheckboxGroup 复选框组组件
 *
-->
<template>
  <view :class="groupClasses" :style="groupStyles">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, provide, watch } from 'vue'
import type { CheckboxGroupProps, CheckboxGroupEmits, CheckboxGroupProvide } from './type'

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  modelValue: () => [],
  disabled: false,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<CheckboxGroupEmits>()

// 注册的复选框列表
const checkboxes = ref<any[]>([])

// 计算类名
const groupClasses = computed(() => {
  return [
    'md-checkbox-group',
    props.customClass
  ]
})

// 计算样式
const groupStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 注册复选框
const registerCheckbox = (checkbox: any) => {
  if (!checkboxes.value.includes(checkbox)) {
    checkboxes.value.push(checkbox)
  }
}

// 注销复选框
const unregisterCheckbox = (checkbox: any) => {
  const index = checkboxes.value.indexOf(checkbox)
  if (index !== -1) {
    checkboxes.value.splice(index, 1)
  }
}

// 处理复选框变化
const handleCheckboxChange = (value: any, checked: boolean) => {
  let newValue: any[]
  
  if (checked) {
    // 添加选中值
    newValue = [...props.modelValue, value]
  } else {
    // 移除选中值
    newValue = props.modelValue.filter(item => item !== value)
  }
  
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 向子组件提供方法
provide<CheckboxGroupProvide>('checkboxGroupProvide', {
  registerCheckbox,
  unregisterCheckbox,
  modelValue: props.modelValue,
  disabled: props.disabled,
  handleCheckboxChange
})

// 监听modelValue变化，更新provide
watch(
  () => props.modelValue,
  (newValue) => {
    provide<CheckboxGroupProvide>('checkboxGroupProvide', {
      registerCheckbox,
      unregisterCheckbox,
      modelValue: newValue,
      disabled: props.disabled,
      handleCheckboxChange
    })
  }
)

// 监听disabled变化，更新provide
watch(
  () => props.disabled,
  (newValue) => {
    provide<CheckboxGroupProvide>('checkboxGroupProvide', {
      registerCheckbox,
      unregisterCheckbox,
      modelValue: props.modelValue,
      disabled: newValue,
      handleCheckboxChange
    })
  }
)
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 复选框组
.md-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: $md-spacing-sm;
}
</style>