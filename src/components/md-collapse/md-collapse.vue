<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 17:30:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 17:30:00
 * @FilePath: \minad-ui\src\components\md-collapse\md-collapse.vue
 * @Description: Collapse 折叠面板组件
 *
-->
<template>
  <view :class="collapseClasses" :style="collapseStyles">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, provide, watch } from 'vue'
import type { CollapseProps, CollapseEmits, CollapseProvide } from './type'

const props = withDefaults(defineProps<CollapseProps>(), {
  modelValue: () => [],
  accordion: false,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<CollapseEmits>()

// 所有注册的面板名称
const itemNames = ref<string[]>([])

// 计算当前激活的面板
const activeNames = computed<string | string[]>(() => {
  return props.modelValue || (props.accordion ? '' : [])
})

// 注册面板
const registerItem = (name: string) => {
  if (!itemNames.value.includes(name)) {
    itemNames.value.push(name)
  }
}

// 注销面板
const unregisterItem = (name: string) => {
  const index = itemNames.value.indexOf(name)
  if (index !== -1) {
    itemNames.value.splice(index, 1)
  }
}

// 切换面板状态
const toggleItem = (name: string) => {
  let newValue: string | string[]
  
  if (props.accordion) {
    // 手风琴模式
    newValue = activeNames.value === name ? '' : name
  } else {
    // 非手风琴模式
    const activeArray = Array.isArray(activeNames.value) ? activeNames.value : [activeNames.value]
    if (activeArray.includes(name)) {
      // 移除当前面板
      newValue = activeArray.filter(item => item !== name)
    } else {
      // 添加当前面板
      newValue = [...activeArray, name]
    }
  }
  
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 向子组件提供方法
provide<CollapseProvide>('collapseProvide', {
  registerItem,
  unregisterItem,
  toggleItem,
  activeNames,
  accordion: props.accordion
})

// 监听外部modelValue变化
watch(
  () => props.modelValue,
  (newValue) => {
    // 外部modelValue变化时，不需要特殊处理，activeNames会自动更新
  },
  { deep: true }
)

// 计算类名
const collapseClasses = computed(() => {
  return [
    'md-collapse',
    props.customClass
  ]
})

// 计算样式
const collapseStyles = computed(() => {
  return {
    ...props.customStyle
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 折叠面板容器
.md-collapse {
  width: 100%;
  background-color: #fff;
  border-radius: $md-border-radius-base;
  overflow: hidden;
}
</style>