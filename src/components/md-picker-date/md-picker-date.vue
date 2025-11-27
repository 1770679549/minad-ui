<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 14:40:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 14:40:00
 * @FilePath: \minad-ui\src\components\md-picker-date\md-picker-date.vue
 * @Description: PickerDate 日期选择器组件
 *
-->
<template>
  <view class="md-picker-date-container">
    <!-- 选择器输入框 -->
    <view
      :class="pickerClasses"
      :style="pickerStyles"
      @click="handleClick"
    >
      <text v-if="displayValue" class="md-picker-date__value">{{ displayValue }}</text>
      <text v-else class="md-picker-date__placeholder">{{ placeholder }}</text>
      <md-icon name="arrowdown" class="md-picker-date__icon"></md-icon>
    </view>
    
    <!-- 弹出层 -->
    <view v-if="showPicker" class="md-picker-date-popup" @click="handlePopupClick">
      <!-- 遮罩层 -->
      <view class="md-picker-date-popup__overlay"></view>
      
      <!-- 选择器面板 -->
      <view class="md-picker-date-popup__content">
        <!-- 头部 -->
        <view class="md-picker-date-popup__header">
          <text class="md-picker-date-popup__cancel" @click="handleCancel">{{ t('cancel') }}</text>
          <text class="md-picker-date-popup__title">{{ t('select') }}</text>
          <text class="md-picker-date-popup__confirm" @click="handleConfirm">{{ t('confirm') }}</text>
        </view>
        
        <!-- 选择器主体 -->
        <view class="md-picker-date-popup__body">
          <picker-view
            v-if="mode === 'year' || mode === 'month'"
            :value="pickerValue"
            :indicator-style="indicatorStyle"
            @change="handlePickerViewChange"
            class="md-picker-date"
          >
            <picker-view-column>
              <view v-for="year in years" :key="year" class="picker-item">{{ year }}年</view>
            </picker-view-column>
            <picker-view-column v-if="mode === 'month'">
              <view v-for="month in months" :key="month" class="picker-item">{{ month }}月</view>
            </picker-view-column>
          </picker-view>
          
          <picker
            v-else
            mode="date"
            :value="dateValue"
            :start="minDateString"
            :end="maxDateString"
            :fields="pickerFields"
            @change="handleDateChange"
            class="md-picker-date"
          ></picker>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onMounted } from 'vue'
import { MdIcon } from '../md-icon'
import type { PickerDateProps, PickerDateEmits, PickerDateMode } from './type'

const props = withDefaults(defineProps<PickerDateProps>(), {
  mode: 'date',
  placeholder: '请选择日期',
  format: '',
  disabled: false,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<PickerDateEmits>()

// 当前显示的值
const showPicker = ref(false)
const currentDate = ref<Date>(new Date())
const tempDate = ref<Date>(new Date())

// 计算属性
const mode = computed(() => props.mode)

// 格式化日期为字符串
const formatDate = (date: Date) => {
  if (!props.format) {
    // 根据模式使用默认格式
    switch (mode.value) {
      case 'date':
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
      case 'time':
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
      case 'datetime':
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
      case 'year':
        return `${date.getFullYear()}`
      case 'month':
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      default:
        return date.toISOString()
    }
  }
  
  // 简单的日期格式化实现
  let result = props.format
  result = result.replace('YYYY', String(date.getFullYear()))
  result = result.replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
  result = result.replace('DD', String(date.getDate()).padStart(2, '0'))
  result = result.replace('HH', String(date.getHours()).padStart(2, '0'))
  result = result.replace('mm', String(date.getMinutes()).padStart(2, '0'))
  result = result.replace('ss', String(date.getSeconds()).padStart(2, '0'))
  return result
}

// 解析日期字符串为Date对象
const parseDate = (value?: string | Date): Date => {
  if (!value) return new Date()
  if (value instanceof Date) return value
  return new Date(value)
}

// 计算显示值
const displayValue = computed(() => {
  if (!props.modelValue) return ''
  return formatDate(parseDate(props.modelValue))
})

// 计算选择器类名
const pickerClasses = computed(() => {
  return [
    'md-picker-date',
    {
      'md-picker-date--disabled': props.disabled
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

// 计算最小和最大日期字符串
const minDateString = computed(() => {
  if (!props.minDate) return '1900-01-01'
  return formatDate(parseDate(props.minDate))
})

const maxDateString = computed(() => {
  if (!props.maxDate) return '2100-12-31'
  return formatDate(parseDate(props.maxDate))
})

// 计算选择器字段
const pickerFields = computed(() => {
  switch (mode.value) {
    case 'date':
      return 'year-month-day'
    case 'time':
      return 'hour-minute-second'
    case 'datetime':
      return 'year-month-day hour-minute-second'
    default:
      return 'year-month-day'
  }
})

// 计算日期值
const dateValue = computed(() => {
  return props.modelValue ? parseDate(props.modelValue).getTime() : new Date().getTime()
})

// 年份和月份列表（用于年月选择器）
const years = computed(() => {
  const minYear = parseDate(props.minDate).getFullYear()
  const maxYear = parseDate(props.maxDate).getFullYear()
  const yearList = []
  for (let i = minYear; i <= maxYear; i++) {
    yearList.push(i)
  }
  return yearList
})

const months = computed(() => {
  return Array.from({ length: 12 }, (_, i) => i + 1)
})

// 选择器值（用于年月选择器）
const pickerValue = ref([0, 0])
const indicatorStyle = 'height: 50px;'

// 监听modelValue变化
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    const date = parseDate(newValue)
    currentDate.value = date
    tempDate.value = new Date(date)
    
    // 更新年月选择器的值
    if (mode.value === 'year' || mode.value === 'month') {
      const yearIndex = years.value.indexOf(date.getFullYear())
      const monthIndex = date.getMonth()
      pickerValue.value = [yearIndex, monthIndex]
    }
  }
}, { immediate: true })

// 监听模式变化
watch(() => props.mode, () => {
  // 重置选择器值
  if (mode.value === 'year' || mode.value === 'month') {
    const yearIndex = years.value.indexOf(currentDate.value.getFullYear())
    const monthIndex = currentDate.value.getMonth()
    pickerValue.value = [yearIndex, monthIndex]
  }
})

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

// 处理日期选择器变化事件
const handleDateChange = (event: any) => {
  const date = new Date(event.detail.value)
  tempDate.value = date
}

// 处理年月选择器变化事件
const handlePickerViewChange = (event: any) => {
  const [yearIndex, monthIndex] = event.detail.value
  const year = years.value[yearIndex]
  const month = mode.value === 'month' ? months.value[monthIndex] : 1
  tempDate.value = new Date(year, month - 1, 1)
}

// 处理确认事件
const handleConfirm = () => {
  const value = tempDate.value
  const formattedValue = formatDate(value)
  
  emit('update:modelValue', value)
  emit('confirm', value, formattedValue)
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
.md-picker-date-container {
  position: relative;
}

// 选择器输入框
.md-picker-date {
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
.md-picker-date__value {
  font-size: $md-size-medium;
  color: $md-color-text;
  flex: 1;
}

// 占位符
.md-picker-date__placeholder {
  font-size: $md-size-medium;
  color: $md-color-text-placeholder;
  flex: 1;
}

// 选择器图标
.md-picker-date__icon {
  font-size: $md-size-medium;
  color: $md-color-text-placeholder;
  margin-left: $md-spacing-xs;
}

// 弹出层
.md-picker-date-popup {
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
.md-picker-date-popup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

// 选择器面板
.md-picker-date-popup__content {
  background-color: $md-color-bg;
  border-radius: $md-border-radius-lg $md-border-radius-lg 0 0;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

// 面板头部
.md-picker-date-popup__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $md-spacing-md;
  border-bottom: 1px solid $md-color-border;
}

// 面板按钮
.md-picker-date-popup__cancel,
.md-picker-date-popup__confirm {
  font-size: $md-size-medium;
  padding: $md-spacing-xs $md-spacing-sm;
  cursor: pointer;
}

.md-picker-date-popup__cancel {
  color: $md-color-text-placeholder;
}

.md-picker-date-popup__confirm {
  color: $md-color-primary;
}

// 面板标题
.md-picker-date-popup__title {
  font-size: $md-size-large;
  font-weight: 500;
  color: $md-color-text;
}

// 面板主体
.md-picker-date-popup__body {
  padding: $md-spacing-md 0;
}

// 原生选择器
.md-picker-date {
  width: 100%;
  height: 200px;
}

// 年月选择器项
.picker-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: $md-size-medium;
  color: $md-color-text;
}
</style>
