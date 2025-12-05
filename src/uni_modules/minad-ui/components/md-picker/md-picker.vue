<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 14:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 14:00:00
 * @FilePath: \minad-ui\src\components\md-picker\md-picker.vue
 * @Description: Picker 选择器组件
 *
-->
<template>
  <view class="md-picker-container">
    <!-- 选择器输入框 -->
    <view
      :class="pickerClasses"
      :style="pickerStyles"
      @click="handleClick"
    >
      <text v-if="displayValue" class="md-picker__value">{{ displayValue }}</text>
      <text v-else class="md-picker__placeholder">{{ placeholder }}</text>
      <md-icon name="arrowdown" class="md-picker__icon"></md-icon>
    </view>
    
    <!-- 弹出层 -->
    <view v-if="showPicker" class="md-picker-popup" @click="handlePopupClick">
      <!-- 遮罩层 -->
      <view class="md-picker-popup__overlay"></view>
      
      <!-- 选择器面板 -->
      <view class="md-picker-popup__content">
        <!-- 头部 -->
        <view class="md-picker-popup__header">
          <text class="md-picker-popup__cancel" @click="handleCancel">{{ t('cancel') }}</text>
          <text class="md-picker-popup__title">{{ t('select') }}</text>
          <text class="md-picker-popup__confirm" @click="handleConfirm">{{ t('confirm') }}</text>
        </view>
        
        <!-- 选择器主体 -->
        <view class="md-picker-popup__body">
          <picker
            :value="selectedIndex"
            :range="formattedOptions"
            :range-key="'label'"
            @change="handlePickerChange"
            class="md-picker"
          ></picker>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onMounted } from 'vue'
import { MdIcon } from '../md-icon'
import type { PickerProps, PickerEmits, PickerOption } from './type'

const props = withDefaults(defineProps<PickerProps>(), {
  placeholder: '请选择',
  disabled: false,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<PickerEmits>()

// 当前显示的值
const showPicker = ref(false)
const selectedIndex = ref(0)
const tempValue = ref(props.modelValue)

// 格式化选项，统一转换为对象数组
const formattedOptions = computed(() => {
  return props.options.map(option => {
    if (typeof option === 'string') {
      return {
        value: option,
        label: option,
        disabled: false
      }
    }
    return option
  })
})

// 计算当前显示的文本
const displayValue = computed(() => {
  if (props.modelValue === undefined) return ''
  
  const option = formattedOptions.value.find(opt => opt.value === props.modelValue)
  return option ? option.label : ''
})

// 计算选择器类名
const pickerClasses = computed(() => {
  return [
    'md-picker',
    {
      'md-picker--disabled': props.disabled
    },
    props.customClass
  ]
})

// 计算选择器样式
const pickerStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 监听modelValue变化，更新选中索引
watch(() => props.modelValue, (newValue) => {
  tempValue.value = newValue
  updateSelectedIndex(newValue)
}, { immediate: true })

// 监听选项变化，更新选中索引
watch(() => props.options, () => {
  updateSelectedIndex(props.modelValue)
}, { deep: true })

// 更新选中索引
const updateSelectedIndex = (value?: string | number) => {
  if (value === undefined) {
    selectedIndex.value = 0
    return
  }
  
  const index = formattedOptions.value.findIndex(opt => opt.value === value)
  selectedIndex.value = index >= 0 ? index : 0
}

// 处理选择器点击事件
const handleClick = () => {
  if (props.disabled) return
  
  showPicker.value = true
  emit('open')
}

// 处理弹出层点击事件
const handlePopupClick = (event: MouseEvent) => {
  // 阻止事件冒泡
  event.stopPropagation()
}

// 处理选择器值变化事件
const handlePickerChange = (event: any) => {
  const index = event.detail.value
  selectedIndex.value = index
  const option = formattedOptions.value[index]
  tempValue.value = option.value
}

// 处理确认事件
const handleConfirm = () => {
  const value = tempValue.value
  const option = formattedOptions.value[selectedIndex.value]
  
  emit('update:modelValue', value!)
  emit('confirm', value!, option)
  closePicker()
}

// 处理取消事件
const handleCancel = () => {
  emit('cancel')
  closePicker()
}

// 关闭选择器
const closePicker = () => {
  showPicker.value = false
  emit('close')
}

// 国际化处理
const t = (key: string) => {
  const messages = {
    cancel: '取消',
    select: '选择',
    confirm: '确认'
  }
  return messages[key as keyof typeof messages]
}
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 选择器容器
.md-picker-container {
  position: relative;
}

// 选择器输入框
.md-picker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $md-spacing-md;
  background-color: $md-color-bg;
  border: 1px solid $md-color-border;
  border-radius: $md-border-radius-base;
  transition: $md-transition;
  cursor: pointer;
  
  &:active {
    background-color: $md-color-bg-hover;
  }
  
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:active {
      background-color: $md-color-bg;
    }
  }
}

// 选择器值
.md-picker__value {
  font-size: $md-size-medium;
  color: $md-color-text;
  flex: 1;
}

// 占位符
.md-picker__placeholder {
  font-size: $md-size-medium;
  color: $md-color-text-placeholder;
  flex: 1;
}

// 选择器图标
.md-picker__icon {
  font-size: $md-size-medium;
  color: $md-color-text-placeholder;
  margin-left: $md-spacing-xs;
}

// 弹出层
.md-picker-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

// 遮罩层
.md-picker-popup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

// 弹出层内容
.md-picker-popup__content {
  background-color: $md-color-bg;
  border-radius: $md-border-radius-lg $md-border-radius-lg 0 0;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

// 弹出层头部
.md-picker-popup__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $md-spacing-md;
  border-bottom: 1px solid $md-color-border;
}

// 弹出层按钮
.md-picker-popup__cancel,
.md-picker-popup__confirm {
  font-size: $md-size-medium;
  padding: $md-spacing-xs $md-spacing-sm;
  cursor: pointer;
}

.md-picker-popup__cancel {
  color: $md-color-text-placeholder;
}

.md-picker-popup__confirm {
  color: $md-color-primary;
}

// 弹出层标题
.md-picker-popup__title {
  font-size: $md-size-large;
  font-weight: 500;
  color: $md-color-text;
}

// 弹出层主体
.md-picker-popup__body {
  padding: $md-spacing-md 0;
}

// 原生选择器
.md-picker {
  width: 100%;
  height: 200px;
}
</style>
