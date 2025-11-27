<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 15:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 15:00:00
 * @FilePath: \minad-ui\src\components\md-cell\md-cell.vue
 * @Description: Cell 单元格组件
 *
-->
<template>
  <view 
    :class="cellClasses"
    :style="cellStyles"
    @click="handleClick"
  >
    <!-- 左侧内容 -->
    <view class="md-cell__left">
      <!-- 左侧图标 -->
      <md-icon 
        v-if="icon" 
        :name="icon" 
        class="md-cell__icon"
      ></md-icon>
      
      <!-- 标题和描述 -->
      <view class="md-cell__title-wrapper">
        <text v-if="title" class="md-cell__title">{{ title }}</text>
        <text v-if="description" class="md-cell__description">{{ description }}</text>
      </view>
    </view>
    
    <!-- 右侧内容 -->
    <view class="md-cell__right">
      <!-- 右侧文本 -->
      <text v-if="value" class="md-cell__value">{{ value }}</text>
      
      <!-- 右侧自定义内容 -->
      <slot name="right"></slot>
      
      <!-- 开关 -->
      <md-switch 
        v-if="switch" 
        v-model="switchChecked" 
        @change="handleSwitchChange"
        class="md-cell__switch"
      ></md-switch>
      
      <!-- 右侧图标 -->
      <md-icon 
        v-if="rightIcon" 
        :name="rightIcon" 
        class="md-cell__right-icon"
      ></md-icon>
      
      <!-- 箭头 -->
      <md-icon 
        v-if="arrow" 
        name="arrowright" 
        class="md-cell__arrow"
      ></md-icon>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { MdIcon } from '../md-icon'
import { MdSwitch } from '../md-switch'
import type { CellProps, CellEmits } from './type'

const props = withDefaults(defineProps<CellProps>(), {
  arrow: false,
  switch: false,
  switchChecked: false,
  disabled: false,
  clickable: false,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<CellEmits>()

// 本地开关状态
const switchChecked = ref(props.switchChecked)

// 监听props.switchChecked变化
watch(() => props.switchChecked, (newValue) => {
  switchChecked.value = newValue
})

// 计算单元格类名
const cellClasses = computed(() => {
  return [
    'md-cell',
    {
      'md-cell--disabled': props.disabled,
      'md-cell--clickable': props.clickable || props.arrow || props.switch
    },
    props.customClass
  ]
})

// 计算单元格样式
const cellStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 处理单元格点击事件
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

// 处理开关状态变化
const handleSwitchChange = (value: string | number | boolean) => {
  const checked = Boolean(value)
  emit('switch-change', checked)
}
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 单元格基础样式
.md-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $md-spacing-md;
  background-color: $md-color-bg;
  border-bottom: 1px solid $md-color-border;
  transition: $md-transition;
  
  // 禁用状态
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  // 可点击状态
  &--clickable {
    cursor: pointer;
    
    &:active {
      background-color: $md-color-bg-hover;
    }
  }
}

// 左侧内容
.md-cell__left {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
}

// 左侧图标
.md-cell__icon {
  font-size: $md-size-large;
  color: $md-color-text;
  margin-right: $md-spacing-sm;
}

// 标题和描述容器
.md-cell__title-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

// 标题
.md-cell__title {
  font-size: $md-size-medium;
  color: $md-color-text;
  line-height: 1.5;
}

// 描述
.md-cell__description {
  font-size: $md-size-small;
  color: $md-color-text-placeholder;
  line-height: 1.4;
  margin-top: $md-spacing-xs;
}

// 右侧内容
.md-cell__right {
  display: flex;
  align-items: center;
  gap: $md-spacing-xs;
}

// 右侧文本
.md-cell__value {
  font-size: $md-size-medium;
  color: $md-color-text-placeholder;
  margin-right: $md-spacing-xs;
}

// 开关
.md-cell__switch {
  margin-left: $md-spacing-sm;
}

// 右侧图标
.md-cell__right-icon {
  font-size: $md-size-medium;
  color: $md-color-text-placeholder;
}

// 箭头
.md-cell__arrow {
  font-size: $md-size-medium;
  color: $md-color-text-placeholder;
  margin-left: $md-spacing-xs;
}
</style>
