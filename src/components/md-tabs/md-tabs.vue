<template>
  <view 
    class="md-tabs"
    :class="{
      'md-tabs--top': placement === 'top',
      'md-tabs--bottom': placement === 'bottom',
      'md-tabs--left': placement === 'left',
      'md-tabs--right': placement === 'right',
      'md-tabs--card': type === 'card',
      'md-tabs--bordered': bordered
    }"
  >
    <!-- 标签导航 -->
    <view 
      class="md-tabs__nav"
      :class="{
        'md-tabs__nav--top': placement === 'top',
        'md-tabs__nav--bottom': placement === 'bottom',
        'md-tabs__nav--left': placement === 'left',
        'md-tabs__nav--right': placement === 'right'
      }"
    >
      <view class="md-tabs__nav-wrapper">
        <!-- 使用 tabs 属性方式 -->
        <view v-if="tabs && tabs.length > 0">
          <view 
            v-for="(item, index) in tabs" 
            :key="index"
            class="md-tabs-item"
            :class="{
              'md-tabs-item--active': modelValue === (item.value || index),
              'md-tabs-item--disabled': item.disabled
            }"
            @click="handleItemClick(item.value || index, item)"
          >
            {{ item.title }}
            <view v-if="item.badge" class="md-tabs-item__badge">
              {{ typeof item.badge === 'boolean' ? '' : item.badge }}
            </view>
          </view>
        </view>
        <!-- 使用子组件方式 -->
        <slot v-else name="nav" />
      </view>
      <!-- 激活指示器 -->
      <view 
        v-if="showIndicator" 
        class="md-tabs__indicator"
        :class="{
          'md-tabs__indicator--animated': animated
        }"
        :style="indicatorStyle"
      />
    </view>

    <!-- 内容区域 -->
    <view class="md-tabs__content">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { TabsProps, TabsEmits, TabsItem } from './type'

// 定义属性默认值
const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: 0,
  tabs: () => [],
  placement: 'top',
  type: 'line',
  bordered: false,
  showIndicator: true,
  animated: true,
  indicatorHeight: 3,
  indicatorColor: '#409eff'
})

const emit = defineEmits<TabsEmits>()

// 指示器样式
const indicatorStyle = computed(() => {
  return {
    height: `${props.indicatorHeight}px`,
    backgroundColor: props.indicatorColor
  }
})

// 处理标签点击
const handleItemClick = (value: string | number, item?: TabsItem) => {
  if (item?.disabled) {
    emit('disabled', value, item)
    return
  }
  emit('update:modelValue', value)
  emit('change', value, item)
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.md-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &--card {
    border: 1px solid var(--md-tabs-border-color, #e5e5e5);
    border-radius: 4px;
    overflow: hidden;
  }

  &--bordered {
    border: 1px solid var(--md-tabs-border-color, #e5e5e5);
    border-radius: 4px;
  }

  // 标签导航
  &__nav {
    display: flex;
    align-items: center;
    background-color: var(--md-tabs-nav-bg-color, #ffffff);

    &--top {
      border-bottom: 1px solid var(--md-tabs-border-color, #e5e5e5);
    }

    &--bottom {
      border-top: 1px solid var(--md-tabs-border-color, #e5e5e5);
    }

    &--left {
      flex-direction: column;
      border-right: 1px solid var(--md-tabs-border-color, #e5e5e5);
    }

    &--right {
      flex-direction: column;
      border-left: 1px solid var(--md-tabs-border-color, #e5e5e5);
    }

    &-wrapper {
      display: flex;
      align-items: center;
      position: relative;

      .md-tabs--left &,
      .md-tabs--right & {
        flex-direction: column;
        width: 100%;
      }
    }
  }

  // 激活指示器
  &__indicator {
    position: absolute;
    background-color: var(--md-tabs-active-text-color, #409eff);
    transition: all 0.3s;

    .md-tabs--top &,
    .md-tabs--bottom & {
      height: 3px;
      bottom: 0;
    }

    .md-tabs--left &,
    .md-tabs--right & {
      width: 3px;
      left: 0;
    }

    &--animated {
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  // 内容区域
  &__content {
    flex: 1;
    padding: 16px;
    background-color: var(--md-tabs-content-bg-color, #ffffff);
    overflow: auto;
  }

  // 标签项
  .md-tabs-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    height: 48px;
    font-size: 14px;
    color: var(--md-tabs-text-color, #606266);
    cursor: pointer;
    user-select: none;
    position: relative;
    transition: all 0.3s;

    .md-tabs--left &,
    .md-tabs--right & {
      width: 100%;
      justify-content: flex-start;
    }

    &--active {
      color: var(--md-tabs-active-text-color, #409eff);
      font-weight: 500;

      .md-tabs--card & {
        background-color: var(--md-tabs-active-text-color, #409eff);
        color: #ffffff;
      }
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &__badge {
      position: absolute;
      top: 12px;
      right: 12px;
      min-width: 18px;
      height: 18px;
      border-radius: 9px;
      background-color: var(--md-color-danger, #f56c6c);
      color: #fff;
      font-size: 10px;
      line-height: 18px;
      text-align: center;
      padding: 0 5px;
      white-space: nowrap;
      box-sizing: border-box;

      &:empty {
        padding: 0;
        min-width: 8px;
        height: 8px;
        border-radius: 50%;
      }
    }
  }
}
</style>
