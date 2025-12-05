<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 19:35:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 19:35:00
 * @FilePath: \minad-ui\src\components\md-swiper-item\md-swiper-item.vue
 * @Description: SwiperItem 轮播项组件
 *
-->
<template>
  <view 
    class="md-swiper-item"
    :class="itemClasses"
    :style="itemStyles"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted } from 'vue'
import type { SwiperItemProps } from '../md-swiper/type'
import type { SwiperProvide } from '../md-swiper/type'

const props = withDefaults(defineProps<SwiperItemProps>(), {
  customClass: '',
  customStyle: () => ({})
})

// 从父组件注入方法
const swiperProvide = inject<SwiperProvide>('swiperProvide')

// 计算类名
const itemClasses = computed(() => {
  return [
    'md-swiper-item',
    props.customClass
  ]
})

// 计算样式
const itemStyles = computed(() => {
  const styles: Record<string, any> = {
    flexShrink: 0,
    width: '100%',
    height: '100%'
  }
  
  // 合并自定义样式
  return {
    ...styles,
    ...props.customStyle
  }
})

// 注册轮播项
onMounted(() => {
  if (swiperProvide) {
    swiperProvide.registerItem()
  }
})

// 注销轮播项
onUnmounted(() => {
  if (swiperProvide) {
    swiperProvide.unregisterItem()
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 轮播项
.md-swiper-item {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>