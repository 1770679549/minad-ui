<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 16:07:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 16:07:00
 * @FilePath: \minad-ui\src\components\md-notice-bar\md-notice-bar.vue
 * @Description: NoticeBar 通知栏组件
 *
-->
<template>
  <view 
    class="md-notice-bar" 
    :style="noticeBarStyles" 
    @click="handleClick"
  >
    <!-- 左侧图标 -->
    <md-icon 
      v-if="showIcon || icon" 
      :name="icon || 'info'" 
      class="md-notice-bar__icon"
    ></md-icon>
    
    <!-- 文本内容区域 -->
    <view class="md-notice-bar__content">
      <view 
        v-if="mode === 'scroll'" 
        class="md-notice-bar__scroll-wrapper"
      >
        <view 
          ref="scrollRef" 
          class="md-notice-bar__scroll-content"
        >
          <text class="md-notice-bar__text">{{ text }}</text>
          <text 
            v-if="needClone" 
            class="md-notice-bar__text md-notice-bar__text--clone"
          >{{ text }}</text>
        </view>
      </view>
      <text 
        v-else 
        class="md-notice-bar__text md-notice-bar__text--static"
      >{{ text }}</text>
    </view>
    
    <!-- 右侧关闭按钮 -->
    <md-icon 
      v-if="closable" 
      name="close" 
      class="md-notice-bar__close" 
      @click.stop="handleClose"
    ></md-icon>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { MdIcon } from '../md-icon'
import type { NoticeBarProps, NoticeBarEmits } from './type'

const props = withDefaults(defineProps<NoticeBarProps>(), {
  text: '',
  closable: false,
  showIcon: true,
  mode: 'scroll',
  speed: 50,
  backgroundColor: '#fff7e6',
  color: '#fa9805',
  icon: ''
})

const emit = defineEmits<NoticeBarEmits>()

// 滚动相关
const scrollRef = ref<HTMLElement | null>(null)
let animationFrame: number | null = null
let startTime = 0
let scrollDistance = 0
let contentWidth = 0
let containerWidth = 0
const needClone = ref(false)

// 计算样式
const noticeBarStyles = computed(() => {
  return {
    backgroundColor: props.backgroundColor,
    color: props.color
  }
})

// 处理点击事件
const handleClick = () => {
  emit('click')
}

// 处理关闭事件
const handleClose = () => {
  emit('close')
}

// 开始滚动动画
const startScroll = () => {
  if (!scrollRef.value || props.mode !== 'scroll' || !needClone.value) return
  
  const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = (elapsed / 1000) * props.speed
    
    scrollDistance = progress % (contentWidth + containerWidth)
    scrollRef.value!.style.transform = `translateX(-${scrollDistance}px)`
    
    animationFrame = requestAnimationFrame(animate)
  }
  
  animationFrame = requestAnimationFrame(animate)
}

// 停止滚动动画
const stopScroll = () => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
    animationFrame = null
    startTime = 0
  }
}

// 测量宽度并判断是否需要滚动
const measureWidth = () => {
  if (!scrollRef.value || props.mode !== 'scroll') return
  
  const contentEl = scrollRef.value
  const containerEl = contentEl.parentElement
  
  if (!containerEl) return
  
  contentWidth = contentEl.offsetWidth
  containerWidth = containerEl.offsetWidth
  
  needClone.value = contentWidth > containerWidth
  
  // 如果需要滚动，重新开始动画
  if (needClone.value) {
    stopScroll()
    startScroll()
  }
}

// 监听文本变化，重新测量宽度
watch(() => props.text, () => {
  // 延迟测量，确保DOM已更新
  setTimeout(() => {
    measureWidth()
  }, 0)
})

// 监听模式变化，重新测量宽度
watch(() => props.mode, () => {
  setTimeout(() => {
    measureWidth()
  }, 0)
})

// 组件挂载时初始化
onMounted(() => {
  setTimeout(() => {
    measureWidth()
  }, 0)
})

// 组件卸载时清理
onUnmounted(() => {
  stopScroll()
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 通知栏容器
.md-notice-bar {
  display: flex;
  align-items: center;
  padding: $md-spacing-xs $md-spacing-sm;
  background-color: #fff7e6;
  color: #fa9805;
  font-size: $md-size-small;
  line-height: 1.5;
  overflow: hidden;
  position: relative;
}

// 左侧图标
.md-notice-bar__icon {
  font-size: $md-size-medium;
  margin-right: $md-spacing-xs;
  flex-shrink: 0;
}

// 内容区域
.md-notice-bar__content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

// 滚动容器
.md-notice-bar__scroll-wrapper {
  overflow: hidden;
  white-space: nowrap;
}

// 滚动内容
.md-notice-bar__scroll-content {
  display: inline-flex;
  align-items: center;
  transition: transform 0s linear;
}

// 静态文本
.md-notice-bar__text--static {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// 滚动文本
.md-notice-bar__text {
  display: inline-block;
  white-space: nowrap;
}

// 克隆文本（用于无缝滚动）
.md-notice-bar__text--clone {
  margin-left: $md-spacing-md;
}

// 关闭按钮
.md-notice-bar__close {
  font-size: $md-size-medium;
  margin-left: $md-spacing-xs;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity $md-transition;
  
  &:hover {
    opacity: 1;
  }
}
</style>
