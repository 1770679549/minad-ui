<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 20:05:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 20:05:00
 * @FilePath: \minad-ui\src\components\md-radio\md-radio-group.vue
 * @Description: RadioGroup 单选框组组件
 *
-->
<template>
  <view :class="groupClasses" :style="groupStyles">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, provide, watch } from 'vue'
import type { RadioGroupProps, RadioGroupEmits, RadioGroupProvide } from './type'

const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: '',
  disabled: false,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<RadioGroupEmits>()

// 注册的单选框列表
const radios = ref<any[]>([])

// 计算类名
const groupClasses = computed(() => {
  return [
    'md-radio-group',
    props.customClass
  ]
})

// 计算样式
const groupStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 注册单选框
const registerRadio = (radio: any) => {
  if (!radios.value.includes(radio)) {
    radios.value.push(radio)
  }
}

// 注销单选框
const unregisterRadio = (radio: any) => {
  const index = radios.value.indexOf(radio)
  if (index !== -1) {
    radios.value.splice(index, 1)
  }
}

// 处理单选框变化
const handleRadioChange = (value: any) => {
  emit('update:modelValue', value)
  emit('change', value)
}

// 向子组件提供方法
provide<RadioGroupProvide>('radioGroupProvide', {
  registerRadio,
  unregisterRadio,
  modelValue: props.modelValue,
  disabled: props.disabled,
  handleRadioChange
})

// 监听modelValue变化，更新provide
watch(
  () => props.modelValue,
  (newValue) => {
    provide<RadioGroupProvide>('radioGroupProvide', {
      registerRadio,
      unregisterRadio,
      modelValue: newValue,
      disabled: props.disabled,
      handleRadioChange
    })
  }
)

// 监听disabled变化，更新provide
watch(
  () => props.disabled,
  (newValue) => {
    provide<RadioGroupProvide>('radioGroupProvide', {
      registerRadio,
      unregisterRadio,
      modelValue: props.modelValue,
      disabled: newValue,
      handleRadioChange
    })
  }
)
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 单选框组
.md-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: $md-spacing-sm;
}
</style>
