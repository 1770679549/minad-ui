<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 14:58:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 15:11:17
 * @FilePath: \uniapp-vue3-components\packages\core\src\components\md-col\md-col.vue
 * @Description: 栅格布局列组件
 * 
-->
<template>
  <view :class="colClasses" :style="colStyles">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ColProps } from './type'

const props = defineProps<ColProps>()

// 计算列的类名
const colClasses = computed(() => {
  const classes = ['md-col']
  
  // 基础属性
  if (props.span) classes.push(`md-col--span-${props.span}`)
  if (props.offset) classes.push(`md-col--offset-${props.offset}`)
  if (props.push) classes.push(`md-col--push-${props.push}`)
  if (props.pull) classes.push(`md-col--pull-${props.pull}`)
  if (props.align) classes.push(`md-col--align-${props.align}`)
  
  return classes
})

// 计算列的样式
const colStyles = computed(() => {
  return {}
})
</script>

<style scoped>
/* Col component specific styles */
.md-col {
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  min-height: 1px;
  padding-right: 8px;
  padding-left: 8px;
}

/* 基础列宽 */
.md-col--span-1 { width: calc(100% / 24 * 1); }
.md-col--span-2 { width: calc(100% / 24 * 2); }
.md-col--span-3 { width: calc(100% / 24 * 3); }
.md-col--span-4 { width: calc(100% / 24 * 4); }
.md-col--span-5 { width: calc(100% / 24 * 5); }
.md-col--span-6 { width: calc(100% / 24 * 6); }
.md-col--span-7 { width: calc(100% / 24 * 7); }
.md-col--span-8 { width: calc(100% / 24 * 8); }
.md-col--span-9 { width: calc(100% / 24 * 9); }
.md-col--span-10 { width: calc(100% / 24 * 10); }
.md-col--span-11 { width: calc(100% / 24 * 11); }
.md-col--span-12 { width: calc(100% / 24 * 12); }
.md-col--span-13 { width: calc(100% / 24 * 13); }
.md-col--span-14 { width: calc(100% / 24 * 14); }
.md-col--span-15 { width: calc(100% / 24 * 15); }
.md-col--span-16 { width: calc(100% / 24 * 16); }
.md-col--span-17 { width: calc(100% / 24 * 17); }
.md-col--span-18 { width: calc(100% / 24 * 18); }
.md-col--span-19 { width: calc(100% / 24 * 19); }
.md-col--span-20 { width: calc(100% / 24 * 20); }
.md-col--span-21 { width: calc(100% / 24 * 21); }
.md-col--span-22 { width: calc(100% / 24 * 22); }
.md-col--span-23 { width: calc(100% / 24 * 23); }
.md-col--span-24 { width: calc(100% / 24 * 24); }

/* 偏移量 */
.md-col--offset-1 { margin-left: calc(100% / 24 * 1); }
.md-col--offset-2 { margin-left: calc(100% / 24 * 2); }
.md-col--offset-3 { margin-left: calc(100% / 24 * 3); }
.md-col--offset-4 { margin-left: calc(100% / 24 * 4); }
.md-col--offset-5 { margin-left: calc(100% / 24 * 5); }
.md-col--offset-6 { margin-left: calc(100% / 24 * 6); }
.md-col--offset-7 { margin-left: calc(100% / 24 * 7); }
.md-col--offset-8 { margin-left: calc(100% / 24 * 8); }
.md-col--offset-9 { margin-left: calc(100% / 24 * 9); }
.md-col--offset-10 { margin-left: calc(100% / 24 * 10); }
.md-col--offset-11 { margin-left: calc(100% / 24 * 11); }
.md-col--offset-12 { margin-left: calc(100% / 24 * 12); }
.md-col--offset-13 { margin-left: calc(100% / 24 * 13); }
.md-col--offset-14 { margin-left: calc(100% / 24 * 14); }
.md-col--offset-15 { margin-left: calc(100% / 24 * 15); }
.md-col--offset-16 { margin-left: calc(100% / 24 * 16); }
.md-col--offset-17 { margin-left: calc(100% / 24 * 17); }
.md-col--offset-18 { margin-left: calc(100% / 24 * 18); }
.md-col--offset-19 { margin-left: calc(100% / 24 * 19); }
.md-col--offset-20 { margin-left: calc(100% / 24 * 20); }
.md-col--offset-21 { margin-left: calc(100% / 24 * 21); }
.md-col--offset-22 { margin-left: calc(100% / 24 * 22); }
.md-col--offset-23 { margin-left: calc(100% / 24 * 23); }

/* 推入 */
.md-col--push-1 { left: calc(100% / 24 * 1); }
.md-col--push-2 { left: calc(100% / 24 * 2); }
.md-col--push-3 { left: calc(100% / 24 * 3); }
.md-col--push-4 { left: calc(100% / 24 * 4); }
.md-col--push-5 { left: calc(100% / 24 * 5); }
.md-col--push-6 { left: calc(100% / 24 * 6); }
.md-col--push-7 { left: calc(100% / 24 * 7); }
.md-col--push-8 { left: calc(100% / 24 * 8); }
.md-col--push-9 { left: calc(100% / 24 * 9); }
.md-col--push-10 { left: calc(100% / 24 * 10); }
.md-col--push-11 { left: calc(100% / 24 * 11); }
.md-col--push-12 { left: calc(100% / 24 * 12); }
.md-col--push-13 { left: calc(100% / 24 * 13); }
.md-col--push-14 { left: calc(100% / 24 * 14); }
.md-col--push-15 { left: calc(100% / 24 * 15); }
.md-col--push-16 { left: calc(100% / 24 * 16); }
.md-col--push-17 { left: calc(100% / 24 * 17); }
.md-col--push-18 { left: calc(100% / 24 * 18); }
.md-col--push-19 { left: calc(100% / 24 * 19); }
.md-col--push-20 { left: calc(100% / 24 * 20); }
.md-col--push-21 { left: calc(100% / 24 * 21); }
.md-col--push-22 { left: calc(100% / 24 * 22); }
.md-col--push-23 { left: calc(100% / 24 * 23); }

/* 拉出 */
.md-col--pull-1 { right: calc(100% / 24 * 1); }
.md-col--pull-2 { right: calc(100% / 24 * 2); }
.md-col--pull-3 { right: calc(100% / 24 * 3); }
.md-col--pull-4 { right: calc(100% / 24 * 4); }
.md-col--pull-5 { right: calc(100% / 24 * 5); }
.md-col--pull-6 { right: calc(100% / 24 * 6); }
.md-col--pull-7 { right: calc(100% / 24 * 7); }
.md-col--pull-8 { right: calc(100% / 24 * 8); }
.md-col--pull-9 { right: calc(100% / 24 * 9); }
.md-col--pull-10 { right: calc(100% / 24 * 10); }
.md-col--pull-11 { right: calc(100% / 24 * 11); }
.md-col--pull-12 { right: calc(100% / 24 * 12); }
.md-col--pull-13 { right: calc(100% / 24 * 13); }
.md-col--pull-14 { right: calc(100% / 24 * 14); }
.md-col--pull-15 { right: calc(100% / 24 * 15); }
.md-col--pull-16 { right: calc(100% / 24 * 16); }
.md-col--pull-17 { right: calc(100% / 24 * 17); }
.md-col--pull-18 { right: calc(100% / 24 * 18); }
.md-col--pull-19 { right: calc(100% / 24 * 19); }
.md-col--pull-20 { right: calc(100% / 24 * 20); }
.md-col--pull-21 { right: calc(100% / 24 * 21); }
.md-col--pull-22 { right: calc(100% / 24 * 22); }
.md-col--pull-23 { right: calc(100% / 24 * 23); }

/* 对齐方式 */
.md-col--align-top { align-self: flex-start; }
.md-col--align-middle { align-self: center; }
.md-col--align-bottom { align-self: flex-end; }
</style>