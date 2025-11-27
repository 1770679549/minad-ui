<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 19:30:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 19:30:00
 * @FilePath: \minad-ui\src\components\md-swiper\md-swiper.vue
 * @Description: Swiper 轮播组件
 *
-->
<template>
  <view :class="swiperClasses" :style="swiperStyles">
    <!-- 滑块容器 -->
    <view 
      class="md-swiper__wrapper"
      :class="{
        'md-swiper__wrapper--horizontal': props.direction === 'horizontal',
        'md-swiper__wrapper--vertical': props.direction === 'vertical'
      }"
      :style="wrapperStyles"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @touchcancel="handleTouchEnd"
    >
      <!-- 滑块列表 -->
      <view 
        class="md-swiper__list"
        :style="listStyles"
      >
        <slot></slot>
      </view>
    </view>
    
    <!-- 指示器 -->
    <view 
      v-if="props.indicator && itemCount > 1" 
      class="md-swiper__indicator"
      :class="`md-swiper__indicator--${props.indicatorPosition}`"
    >
      <view 
        v-for="index in itemCount" 
        :key="index"
        class="md-swiper__indicator-item"
        :class="{
          'md-swiper__indicator-item--active': index - 1 === activeIndex
        }"
        @click="handleIndicatorClick(index - 1)"
      ></view>
    </view>
    
    <!-- 左右箭头 -->
    <view 
      v-if="props.arrow && itemCount > 1" 
      class="md-swiper__arrow md-swiper__arrow--left"
      @click="handlePrev"
    >
      <text>‹</text>
    </view>
    <view 
      v-if="props.arrow && itemCount > 1" 
      class="md-swiper__arrow md-swiper__arrow--right"
      @click="handleNext"
    >
      <text>›</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, provide, onMounted, onUnmounted, watch } from 'vue'
import type { SwiperProps, SwiperEmits, SwiperProvide } from './type'

const props = withDefaults(defineProps<SwiperProps>(), {
  modelValue: 0,
  autoplay: false,
  interval: 3000,
  loop: false,
  indicator: true,
  indicatorPosition: 'bottom',
  arrow: false,
  width: '',
  height: '',
  direction: 'horizontal',
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<SwiperEmits>()

// 滑块数量
const itemCount = ref(0)
// 当前激活的滑块索引
const activeIndex = ref(props.modelValue)
// 自动播放定时器
let autoplayTimer: number | null = null
// 触摸起始位置
const touchStart = ref({
  x: 0,
  y: 0
})
// 触摸结束位置
const touchEnd = ref({
  x: 0,
  y: 0
})
// 是否正在触摸
const isTouching = ref(false)

// 计算滑块容器样式
const wrapperStyles = computed(() => {
  const styles: Record<string, any> = {
    overflow: 'hidden',
    position: 'relative'
  }
  
  if (props.width) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  
  if (props.height) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  
  return styles
})

// 计算滑块列表样式
const listStyles = computed(() => {
  const styles: Record<string, any> = {
    display: 'flex',
    transition: 'transform 0.3s'
  }
  
  if (props.direction === 'horizontal') {
    styles.flexDirection = 'row'
    styles.transform = `translateX(-${activeIndex.value * 100}%)`
  } else {
    styles.flexDirection = 'column'
    styles.transform = `translateY(-${activeIndex.value * 100}%)`
  }
  
  return styles
})

// 注册滑块
const registerItem = () => {
  itemCount.value++
}

// 注销滑块
const unregisterItem = () => {
  if (itemCount.value > 0) {
    itemCount.value--
  }
}

// 切换到指定索引
const setActiveIndex = (index: number) => {
  if (index < 0 || index >= itemCount.value) return
  
  activeIndex.value = index
  emit('update:modelValue', index)
  emit('change', index)
}

// 处理指示器点击
const handleIndicatorClick = (index: number) => {
  setActiveIndex(index)
  resetAutoplay()
}

// 处理上一页
const handlePrev = () => {
  let index = activeIndex.value - 1
  if (index < 0) {
    index = props.loop ? itemCount.value - 1 : 0
  }
  setActiveIndex(index)
  resetAutoplay()
}

// 处理下一页
const handleNext = () => {
  let index = activeIndex.value + 1
  if (index >= itemCount.value) {
    index = props.loop ? 0 : itemCount.value - 1
  }
  setActiveIndex(index)
  resetAutoplay()
}

// 处理触摸开始
const handleTouchStart = (e: TouchEvent) => {
  isTouching.value = true
  touchStart.value = {
    x: e.touches[0].clientX,
    y: e.touches[0].clientY
  }
  emit('swiper', activeIndex.value)
  // 触摸开始时暂停自动播放
  clearAutoplay()
}

// 处理触摸移动
const handleTouchMove = (e: TouchEvent) => {
  if (!isTouching.value) return
  
  touchEnd.value = {
    x: e.touches[0].clientX,
    y: e.touches[0].clientY
  }
}

// 处理触摸结束
const handleTouchEnd = () => {
  if (!isTouching.value) return
  
  isTouching.value = false
  
  const deltaX = touchEnd.value.x - touchStart.value.x
  const deltaY = touchEnd.value.y - touchStart.value.y
  
  // 判断滑动方向和距离
  if (props.direction === 'horizontal') {
    // 水平滑动
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // 向右滑动，上一页
        handlePrev()
      } else {
        // 向左滑动，下一页
        handleNext()
      }
    }
  } else {
    // 垂直滑动
    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        // 向下滑动，上一页
        handlePrev()
      } else {
        // 向上滑动，下一页
        handleNext()
      }
    }
  }
  
  emit('swiperend', activeIndex.value)
  // 触摸结束后恢复自动播放
  startAutoplay()
}

// 开始自动播放
const startAutoplay = () => {
  if (!props.autoplay || itemCount.value <= 1) return
  
  clearAutoplay()
  autoplayTimer = window.setInterval(() => {
    handleNext()
  }, props.interval)
}

// 清除自动播放
const clearAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// 重置自动播放
const resetAutoplay = () => {
  clearAutoplay()
  startAutoplay()
}

// 监听modelValue变化
watch(
  () => props.modelValue,
  (newValue) => {
    activeIndex.value = newValue
  }
)

// 监听autoplay变化
watch(
  () => props.autoplay,
  (newValue) => {
    if (newValue) {
      startAutoplay()
    } else {
      clearAutoplay()
    }
  }
)

// 监听interval变化
watch(
  () => props.interval,
  () => {
    resetAutoplay()
  }
)

// 向子组件提供方法
provide<SwiperProvide>('swiperProvide', {
  registerItem,
  unregisterItem,
  activeIndex: activeIndex.value,
  itemCount: itemCount.value
})

// 监听activeIndex变化，更新provide
watch(
  activeIndex,
  (newValue) => {
    provide<SwiperProvide>('swiperProvide', {
      registerItem,
      unregisterItem,
      activeIndex: newValue,
      itemCount: itemCount.value
    })
  }
)

// 监听itemCount变化，更新provide
watch(
  itemCount,
  (newValue) => {
    provide<SwiperProvide>('swiperProvide', {
      registerItem,
      unregisterItem,
      activeIndex: activeIndex.value,
      itemCount: newValue
    })
  }
)

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  clearAutoplay()
})

// 计算类名
const swiperClasses = computed(() => {
  return [
    'md-swiper',
    {
      'md-swiper--horizontal': props.direction === 'horizontal',
      'md-swiper--vertical': props.direction === 'vertical'
    },
    props.customClass
  ]
})

// 计算样式
const swiperStyles = computed(() => {
  return {
    ...props.customStyle
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 轮播容器
.md-swiper {
  position: relative;
  overflow: hidden;
}

// 水平方向
.md-swiper--horizontal {
  .md-swiper__list {
    flex-direction: row;
  }
}

// 垂直方向
.md-swiper--vertical {
  .md-swiper__list {
    flex-direction: column;
  }
}

// 滑块容器
.md-swiper__wrapper {
  overflow: hidden;
  position: relative;
}

// 滑块列表
.md-swiper__list {
  display: flex;
  transition: transform 0.3s;
}

// 指示器
.md-swiper__indicator {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 10;
}

// 指示器位置
.md-swiper__indicator--top {
  top: 10px;
  left: 0;
  right: 0;
}

.md-swiper__indicator--bottom {
  bottom: 10px;
  left: 0;
  right: 0;
}

.md-swiper__indicator--left {
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  flex-direction: column;
}

.md-swiper__indicator--right {
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  flex-direction: column;
}

// 指示器项
.md-swiper__indicator-item {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all $md-transition;
  cursor: pointer;
  
  &--active {
    width: 18px;
    background-color: #fff;
    border-radius: 3px;
  }
}

// 箭头
.md-swiper__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
  transition: all $md-transition;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

// 箭头位置
.md-swiper__arrow--left {
  left: 10px;
}

.md-swiper__arrow--right {
  right: 10px;
}
</style>