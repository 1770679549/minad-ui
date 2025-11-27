<template>
  <view class="md-empty" :class="emptyClasses">
    <!-- 图标/图片区域 -->
    <slot name="image">
      <view v-if="image" class="md-empty__image">
        <image :src="image" :alt="title" />
      </view>
      <view v-else-if="icon" class="md-empty__icon">
        <md-icon :name="icon" :size="iconSize" />
      </view>
      <view v-else class="md-empty__icon">
        <md-icon name="picture-outline" :size="iconSize" />
      </view>
    </slot>

    <!-- 内容区域 -->
    <view class="md-empty__content">
      <!-- 标题 -->
      <slot name="title">
        <text v-if="title" class="md-empty__title">{{ title }}</text>
      </slot>

      <!-- 描述 -->
      <slot name="description">
        <text v-if="description" class="md-empty__description">{{ description }}</text>
      </slot>

      <!-- 默认插槽 -->
      <slot>
        <!-- 操作按钮 -->
        <slot name="action">
          <md-button v-if="buttonText" type="primary" @click="$emit('buttonClick')">
            {{ buttonText }}
          </md-button>
        </slot>
      </slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isString, isNumber } from '../../utils'
import { MdIcon } from '../md-icon'
import { MdButton } from '../md-button'
import type { EmptyProps, EmptyEmits } from './type'

// Props 定义
const props = withDefaults(defineProps<EmptyProps>(), {
  image: undefined,
  icon: undefined,
  iconSize: 64,
  title: undefined,
  description: undefined,
  buttonText: undefined,
  buttonType: 'primary',
  buttonSize: 'medium',
  showButton: true,
  customClass: ''
})

// Emits 定义
defineEmits<EmptyEmits>()

// 计算属性
const emptyClasses = computed(() => {
  return {
    [props.customClass]: props.customClass
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

.md-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $md-spacing-xl $md-spacing-md;
  text-align: center;

  &__image {
    margin-bottom: $md-spacing-lg;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  &__icon {
    margin-bottom: $md-spacing-lg;
    color: $md-color-text-placeholder;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $md-spacing-sm;

    &__title {
      font-size: $md-size-large;
      color: $md-color-text;
      font-weight: 500;
    }

    &__description {
      font-size: $md-size-medium;
      color: $md-color-text-placeholder;
      line-height: 1.5;
      max-width: 400px;
    }
  }

  &__title {
    font-size: $md-size-large;
    color: $md-color-text;
    font-weight: 500;
  }

  &__description {
    font-size: $md-size-medium;
    color: $md-color-text-placeholder;
    line-height: 1.5;
    max-width: 400px;
  }
}
</style>