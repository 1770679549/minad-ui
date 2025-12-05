<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 10:20:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 10:30:00
 * @FilePath: \minad-ui\src\components\md-divider\md-divider.vue
 * @Description: Divider组件，支持图片和标签功能
 *
-->
<template>
  <view :class="['md-divider', type, position, { dashed }]">
    <view v-if="position === 'left'" class="md-divider-content">
      <view v-if="image" class="md-divider-image" :style="imageStyle">
        <image :src="image" :alt="imageAlt" mode="aspectFit"></image>
      </view>
      <view v-if="tag" class="md-divider-tag">{{ tag }}</view>
    </view>
    <view class="md-divider-line"></view>
    <view v-if="position === 'center'" class="md-divider-content">
      <view v-if="image" class="md-divider-image" :style="imageStyle">
        <image :src="image" :alt="imageAlt" mode="aspectFit"></image>
      </view>
      <view v-if="tag" class="md-divider-tag">{{ tag }}</view>
    </view>
    <view v-if="position === 'right'" class="md-divider-content">
      <view v-if="image" class="md-divider-image" :style="imageStyle">
        <image :src="image" :alt="imageAlt" mode="aspectFit"></image>
      </view>
      <view v-if="tag" class="md-divider-tag">{{ tag }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { MdDividerProps } from './type'

const props = defineProps<MdDividerProps>()

// 计算图片样式
const imageStyle = computed(() => {
  const size = props.imageSize || 24
  return {
    width: `${size}px`,
    height: `${size}px`
  }
})
</script>

<style lang="scss" scoped>
.md-divider {
  display: flex;
  align-items: center;
  width: 100%;
  height: $md-spacing-lg;
  margin: $md-spacing-md 0;

  &.dashed .md-divider-line {
    border-style: dashed;
  }

  // 类型变体
  &.primary .md-divider-tag {
    color: $md-color-primary;
  }

  &.success .md-divider-tag {
    color: $md-color-success;
  }

  &.warning .md-divider-tag {
    color: $md-color-warning;
  }

  &.danger .md-divider-tag {
    color: $md-color-danger;
  }

  &.info .md-divider-tag {
    color: $md-color-info;
  }

  &.default .md-divider-tag {
    color: $md-color-text;
  }

  // 位置变体
  &.left {
    justify-content: flex-start;

    .md-divider-line {
      flex: 1;
      margin-left: $md-spacing-sm;
    }
  }

  &.center {
    justify-content: space-between;

    .md-divider-line {
      flex: 1;
    }

    .md-divider-content {
      margin: 0 $md-spacing-sm;
    }
  }

  &.right {
    justify-content: flex-end;

    .md-divider-line {
      flex: 1;
      margin-right: $md-spacing-sm;
    }
  }
}

.md-divider-line {
  height: 1px;
  background-color: $md-color-border;
  flex: 1;
}

.md-divider-content {
  display: flex;
  align-items: center;
  gap: $md-spacing-xs;
}

.md-divider-image {
  border-radius: $md-border-radius-sm;
  overflow: hidden;

  image {
    width: 100%;
    height: 100%;
  }
}

.md-divider-tag {
  font-size: $md-size-medium;
  font-weight: 500;

  &.large {
    font-size: $md-size-large;
  }

  &.medium {
    font-size: $md-size-medium;
  }

  &.small {
    font-size: $md-size-small;
  }
}
</style>