<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 18:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 18:00:00
 * @FilePath: \minad-ui\src\components\md-rate\md-rate.vue
 * @Description: Rate 评分组件
 *
-->
<template>
  <view :class="rateClasses" :style="rateStyles">
    <view 
      v-for="index in max" 
      :key="index"
      class="md-rate__item"
      :class="{
        'md-rate__item--disabled': props.disabled || props.readonly
      }"
      :style="{
        fontSize: `${itemSize}px`,
        color: getStarColor(index)
      }"
      @click="handleClick(index)"
      @touchstart="handleTouchStart(index, $event)"
      @touchmove="handleTouchMove(index, $event)"
      @touchend="handleTouchEnd"
    >
      <!-- 星星图标 -->
      <text class="md-rate__star">★</text>
      <!-- 半星遮罩 -->
      <view 
        v-if="props.allowHalf" 
        class="md-rate__half"
        :style="{
          width: getHalfStarWidth(index),
          backgroundColor: props.voidColor || $md-color-text-grey
        }"
      ></view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { RateProps, RateEmits } from './type'

const props = withDefaults(defineProps<RateProps>(), {
  modelValue: 0,
  max: 5,
  readonly: false,
  disabled: false,
  allowHalf: false,
  color: '#f0ad4e',
  voidColor: '#e4e7ed',
  size: 20,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<RateEmits>()

// 是否正在触摸
const isTouching = ref(false)

// 计算星星大小
const itemSize = computed(() => {
  return props.size || 20
})

// 计算当前评分值
const currentValue = computed(() => {
  return Math.max(0, Math.min(props.max, props.modelValue || 0))
})

// 获取星星颜色
const getStarColor = (index: number) => {
  if (index <= Math.floor(currentValue.value)) {
    return props.color
  }
  return props.voidColor
}

// 获取半星遮罩宽度
const getHalfStarWidth = (index: number) => {
  if (index > Math.ceil(currentValue.value)) {
    return '100%'
  }
  if (index === Math.ceil(currentValue.value) && currentValue.value % 1 !== 0) {
    return `${(1 - (currentValue.value % 1)) * 100}%`
  }
  return '0%'
}

// 设置评分值
const setValue = (value: number) => {
  if (props.disabled || props.readonly) return
  
  const newValue = Math.max(0, Math.min(props.max, value))
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 处理点击事件
const handleClick = (index: number) => {
  if (props.disabled || props.readonly) return
  
  if (props.allowHalf) {
    // 半星模式下，点击当前星星的左半部分或右半部分
    setValue(index - 0.5)
  } else {
    // 整星模式下，点击当前星星
    setValue(index)
  }
}

// 处理触摸开始
const handleTouchStart = (index: number, event: TouchEvent) => {
  if (props.disabled || props.readonly) return
  
  isTouching.value = true
  handleTouchMove(index, event)
}

// 处理触摸移动
const handleTouchMove = (index: number, event: TouchEvent) => {
  if (!isTouching.value || props.disabled || props.readonly) return
  
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const touch = event.touches[0]
  
  if (!touch) return
  
  const offsetX = touch.clientX - rect.left
  const percent = offsetX / rect.width
  
  if (props.allowHalf) {
    // 半星模式下，根据触摸位置计算评分
    const value = index - 1 + percent
    setValue(value)
  } else {
    // 整星模式下，根据触摸位置计算评分
    const value = percent >= 0.5 ? index : index - 1
    setValue(value)
  }
}

// 处理触摸结束
const handleTouchEnd = () => {
  isTouching.value = false
}

// 计算类名
const rateClasses = computed(() => {
  return [
    'md-rate',
    {
      'md-rate--disabled': props.disabled || props.readonly
    },
    props.customClass
  ]
})

// 计算样式
const rateStyles = computed(() => {
  return {
    ...props.customStyle
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 评分容器
.md-rate {
  display: flex;
  align-items: center;
}

// 星星项
.md-rate__item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color $md-transition;
  
  &:active {
    transform: scale(1.1);
  }
  
  &--disabled {
    cursor: not-allowed;
    
    &:active {
      transform: none;
    }
  }
}

// 星星图标
.md-rate__star {
  display: inline-block;
  line-height: 1;
}

// 半星遮罩
.md-rate__half {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #e4e7ed;
  transition: width $md-transition;
}
</style>