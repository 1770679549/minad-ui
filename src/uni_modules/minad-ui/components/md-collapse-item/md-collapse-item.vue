<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 17:35:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 17:35:00
 * @FilePath: \minad-ui\src\components\md-collapse-item\md-collapse-item.vue
 * @Description: CollapseItem 折叠面板项组件
 *
-->
<template>
  <view :class="itemClasses">
    <!-- 面板标题 -->
    <view 
      class="md-collapse-item__header"
      :class="{
        'md-collapse-item__header--active': isActive,
        'md-collapse-item__header--disabled': props.disabled
      }"
      @click="handleClick"
    >
      <text class="md-collapse-item__title">{{ props.title }}</text>
      <slot name="title"></slot>
      <view class="md-collapse-item__arrow" :class="{ 'md-collapse-item__arrow--active': isActive }">
        <text>▼</text>
      </view>
    </view>
    
    <!-- 面板内容 -->
    <view 
      class="md-collapse-item__content"
      :class="{
        'md-collapse-item__content--active': isActive
      }"
    >
      <view class="md-collapse-item__content-inner">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted, watch } from 'vue'
import type { CollapseItemProps, CollapseItemEmits } from './type'
import type { CollapseProvide } from '../md-collapse/type'

const props = withDefaults(defineProps<CollapseItemProps>(), {
  title: '',
  disabled: false,
  customClass: ''
})

const emit = defineEmits<CollapseItemEmits>()

// 从父组件注入方法
const collapseProvide = inject<CollapseProvide>('collapseProvide')

// 检查当前面板是否激活
const isActive = computed(() => {
  if (!collapseProvide) return false
  
  const activeNames = collapseProvide.activeNames
  if (collapseProvide.accordion) {
    return activeNames === props.name
  } else {
    const activeArray = Array.isArray(activeNames) ? activeNames : [activeNames]
    return activeArray.includes(props.name)
  }
})

// 处理标题点击
const handleClick = () => {
  if (props.disabled || !collapseProvide) return
  collapseProvide.toggleItem(props.name)
}

// 监听激活状态变化
watch(
  isActive,
  (newVal) => {
    if (newVal) {
      emit('expand', props.name)
    } else {
      emit('collapse', props.name)
    }
  }
)

// 注册面板
onMounted(() => {
  if (collapseProvide) {
    collapseProvide.registerItem(props.name)
  }
})

// 注销面板
onUnmounted(() => {
  if (collapseProvide) {
    collapseProvide.unregisterItem(props.name)
  }
})

// 计算类名
const itemClasses = computed(() => {
  return [
    'md-collapse-item',
    props.customClass
  ]
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 面板项
.md-collapse-item {
  border-bottom: 1px solid $md-color-border;
  
  &:last-child {
    border-bottom: none;
  }
}

// 面板标题
.md-collapse-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $md-spacing-md;
  background-color: #fff;
  font-size: $md-size-medium;
  color: $md-color-text;
  transition: all $md-transition;
  cursor: pointer;
  
  &:active {
    background-color: $md-color-bg-hover;
  }
  
  &--active {
    color: $md-color-primary;
  }
  
  &--disabled {
    color: $md-color-text-grey;
    cursor: not-allowed;
    
    &:active {
      background-color: #fff;
    }
  }
}

// 面板标题文本
.md-collapse-item__title {
  flex: 1;
}

// 面板箭头
.md-collapse-item__arrow {
  font-size: $md-size-xs;
  color: $md-color-text-grey;
  transition: transform $md-transition;
  
  &--active {
    transform: rotate(180deg);
    color: $md-color-primary;
  }
}

// 面板内容
.md-collapse-item__content {
  overflow: hidden;
  transition: all $md-transition;
  max-height: 0;
  
  &--active {
    max-height: 1000px; // 一个足够大的值，确保内容能完全展开
  }
}

// 面板内容内部
.md-collapse-item__content-inner {
  padding: $md-spacing-md;
  background-color: #fff;
  font-size: $md-size-small;
  color: $md-color-text;
  line-height: 1.5;
}
</style>