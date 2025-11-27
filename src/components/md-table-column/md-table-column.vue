<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 16:31:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 16:31:00
 * @FilePath: \minad-ui\src\components\md-table\md-table-column.vue
 * @Description: TableColumn 表格列组件
 *
-->
<template>
  <!-- TableColumn 是一个抽象组件，不需要渲染实际内容 -->
  <slot></slot>
</template>

<script lang="ts" setup>
import { inject, onMounted, onUnmounted, watch } from 'vue'
import type { TableColumn, TableColumnProps, TableProvide } from './type'

const props = withDefaults(defineProps<TableColumnProps>(), {
  width: undefined,
  sortable: false,
  align: 'left',
  className: ''
})

// 从父组件注入注册和注销方法
const tableProvide = inject<TableProvide>('tableProvide')

// 创建列配置对象
const createColumnConfig = (): TableColumn => {
  return {
    key: props.key,
    title: props.title,
    width: props.width,
    sortable: props.sortable,
    align: props.align,
    className: props.className
  }
}

// 注册列
onMounted(() => {
  if (tableProvide) {
    tableProvide.registerColumn(createColumnConfig())
  }
})

// 注销列
onUnmounted(() => {
  if (tableProvide) {
    tableProvide.unregisterColumn(props.key)
  }
})

// 监听列配置变化
watch(
  () => props,
  (newProps) => {
    if (tableProvide) {
      // 先注销旧列，再注册新列
      tableProvide.unregisterColumn(props.key)
      tableProvide.registerColumn(createColumnConfig())
    }
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
/* TableColumn 是抽象组件，不需要样式 */
</style>