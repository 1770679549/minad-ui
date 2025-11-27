<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 16:31:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 16:57:00
 * @FilePath: \minad-ui\src\components\md-table\md-table.vue
 * @Description: Table 表格组件
 *
-->
<template>
  <view :class="tableClasses" :style="tableStyles">
    <!-- 表头 -->
    <view v-if="showHeader" class="md-table__header">
      <view class="md-table__row">
        <!-- 行号列 -->
        <view 
          v-if="showIndex" 
          class="md-table__th md-table__th--index"
          :style="{ width: indexColumnWidth }"
        >
          {{ indexTitle }}
        </view>
        
        <!-- 数据列 -->
        <view 
          v-for="column in mergedColumns" 
          :key="column.key"
          :class="getColumnClasses(column)"
          :style="getColumnStyles(column)"
        >
          <text class="md-table__th-content">{{ column.title }}</text>
          <text 
            v-if="column.sortable" 
            class="md-table__sort-icon"
            @click="handleSort(column.key)"
          >
            {{ getSortIcon(column.key) }}
          </text>
        </view>
      </view>
    </view>
    
    <!-- 表体 -->
    <view class="md-table__body">
      <!-- 无数据提示 -->
      <view v-if="!data || data.length === 0" class="md-table__empty">
        <text>暂无数据</text>
      </view>
      
      <!-- 数据行 -->
      <view 
        v-else 
        v-for="(row, index) in data" 
        :key="index"
        :class="getRowClasses(index)"
        @click="handleRowClick(row, index)"
      >
        <!-- 行号 -->
        <view 
          v-if="showIndex" 
          class="md-table__td md-table__td--index"
          :style="{ width: indexColumnWidth }"
        >
          {{ index + 1 }}
        </view>
        
        <!-- 数据列 -->
        <view 
          v-for="column in mergedColumns" 
          :key="column.key"
          :class="getColumnClasses(column, 'td')"
          :style="getColumnStyles(column)"
        >
          <template v-if="column.render">
            {{ column.render(row, index) }}
          </template>
          <template v-else>
            <text>{{ row[column.key] }}</text>
          </template>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, provide, watch } from 'vue'
import type { TableProps, TableEmits } from './type'
import type { TableColumn, TableProvide } from '../md-table-column/type'

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  border: false,
  stripe: false,
  showHeader: true,
  showIndex: false,
  indexTitle: '序号',
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<TableEmits>()

// 排序状态
const sortState = ref({
  key: '',
  order: 'asc' as 'asc' | 'desc'
})

// 内部列配置列表，用于存储通过 TableColumn 组件注册的列
const internalColumns = ref<TableColumn[]>([])

// 合并外部 columns 和内部 columns
const mergedColumns = computed(() => {
  // 如果外部提供了 columns，则优先使用外部 columns
  if (props.columns && props.columns.length > 0) {
    return props.columns
  }
  // 否则使用内部注册的 columns
  return internalColumns.value
})

// 注册列
const registerColumn = (column: TableColumn) => {
  // 检查是否已存在相同 key 的列
  const existingIndex = internalColumns.value.findIndex(col => col.key === column.key)
  if (existingIndex !== -1) {
    // 更新已存在的列
    internalColumns.value[existingIndex] = column
  } else {
    // 添加新列
    internalColumns.value.push(column)
  }
}

// 注销列
const unregisterColumn = (key: string) => {
  const index = internalColumns.value.findIndex(col => col.key === key)
  if (index !== -1) {
    internalColumns.value.splice(index, 1)
  }
}

// 向子组件提供注册和注销方法
provide<TableProvide>('tableProvide', {
  registerColumn,
  unregisterColumn
})

// 监听外部 columns 变化
watch(
  () => props.columns,
  () => {
    // 外部 columns 变化时，不需要做特殊处理，mergedColumns 会自动更新
  },
  { deep: true }
)

// 计算表格类名
const tableClasses = computed(() => {
  return [
    'md-table',
    {
      'md-table--border': props.border,
      'md-table--stripe': props.stripe
    },
    props.customClass
  ]
})

// 计算表格样式
const tableStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 行号列宽度
const indexColumnWidth = computed(() => {
  return '60px'
})

// 获取列类名
const getColumnClasses = (column: TableColumn, type: 'th' | 'td' = 'th') => {
  return [
    `md-table__${type}`,
    {
      [`md-table__${type}--${column.align}`]: column.align
    },
    column.className
  ]
}

// 获取列样式
const getColumnStyles = (column: TableColumn) => {
  const styles: Record<string, any> = {}
  if (column.width) {
    styles.width = typeof column.width === 'number' ? `${column.width}px` : column.width
  }
  return styles
}

// 获取行类名
const getRowClasses = (index: number) => {
  return [
    'md-table__row',
    {
      'md-table__row--even': props.stripe && index % 2 === 1
    }
  ]
}

// 获取排序图标
const getSortIcon = (key: string) => {
  if (sortState.value.key !== key) {
    return '↕'
  }
  return sortState.value.order === 'asc' ? '↑' : '↓'
}

// 处理排序
const handleSort = (key: string) => {
  if (sortState.value.key === key) {
    // 切换排序方向
    sortState.value.order = sortState.value.order === 'asc' ? 'desc' : 'asc'
  } else {
    // 设置新的排序键和默认方向
    sortState.value.key = key
    sortState.value.order = 'asc'
  }
  emit('sort', key, sortState.value.order)
}

// 处理行点击
const handleRowClick = (row: any, index: number) => {
  emit('row-click', row, index)
}
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 表格容器
.md-table {
  width: 100%;
  background-color: #fff;
  border-radius: $md-border-radius-base;
  overflow: hidden;
  
  // 边框样式
  &--border {
    border: 1px solid $md-color-border;
    
    .md-table__header {
      border-bottom: 1px solid $md-color-border;
    }
    
    .md-table__row {
      border-bottom: 1px solid $md-color-border;
      
      &:last-child {
        border-bottom: none;
      }
    }
    
    .md-table__th,
    .md-table__td {
      border-right: 1px solid $md-color-border;
      
      &:last-child {
        border-right: none;
      }
    }
  }
  
  // 斑马纹样式
  &--stripe {
    .md-table__row--even {
      background-color: $md-color-bg-grey;
    }
  }
}

// 表头
.md-table__header {
  background-color: $md-color-bg-grey;
  font-weight: 500;
}

// 表体
.md-table__body {
  overflow: auto;
}

// 行
.md-table__row {
  display: flex;
  align-items: center;
  transition: background-color $md-transition;
  
  &:hover {
    background-color: $md-color-bg-hover;
  }
}

// 表头单元格
.md-table__th {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $md-spacing-sm $md-spacing-md;
  font-size: $md-size-small;
  color: $md-color-text;
  background-color: $md-color-bg-grey;
  border-bottom: 1px solid $md-color-border;
  min-height: 44px;
  box-sizing: border-box;
  
  &--index {
    text-align: center;
    font-weight: 500;
  }
  
  &--left {
    justify-content: flex-start;
  }
  
  &--center {
    justify-content: center;
  }
  
  &--right {
    justify-content: flex-end;
  }
}

// 表头内容
.md-table__th-content {
  flex: 1;
}

// 排序图标
.md-table__sort-icon {
  font-size: $md-size-xs;
  margin-left: $md-spacing-xs;
  color: $md-color-text-grey;
  cursor: pointer;
  transition: color $md-transition;
  
  &:hover {
    color: $md-color-primary;
  }
}

// 表体单元格
.md-table__td {
  display: flex;
  align-items: center;
  padding: $md-spacing-sm $md-spacing-md;
  font-size: $md-size-small;
  color: $md-color-text;
  min-height: 48px;
  box-sizing: border-box;
  word-break: break-all;
  
  &--index {
    text-align: center;
    color: $md-color-text-grey;
  }
  
  &--left {
    justify-content: flex-start;
  }
  
  &--center {
    justify-content: center;
  }
  
  &--right {
    justify-content: flex-end;
  }
}

// 无数据提示
.md-table__empty {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $md-spacing-xl;
  color: $md-color-text-grey;
  font-size: $md-size-small;
}
</style>
