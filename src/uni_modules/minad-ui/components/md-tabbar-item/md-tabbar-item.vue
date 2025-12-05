<template>
  <view 
    class="md-tabbar-item"
    :class="{
      'md-tabbar-item--active': isActive,
      'md-tabbar-item--disabled': disabled
    }"
    @click="handleClick"
  >
    <view class="md-tabbar-item__icon">
      <md-icon :name="isActive && activeIcon ? activeIcon : icon" />
    </view>
    <view class="md-tabbar-item__text">{{ text }}</view>
    <view v-if="badge" class="md-tabbar-item__badge">
      {{ typeof badge === 'boolean' ? '' : badge }}
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MdIcon from '../md-icon/md-icon.vue'
import type { TabbarItemProps, TabbarItemEmits } from './type'

const props = withDefaults(defineProps<TabbarItemProps>(), {
  active: false,
  disabled: false,
  badge: undefined
})

const emit = defineEmits<TabbarItemEmits>()

const isActive = computed(() => props.active)

const handleClick = () => {
  if (props.disabled) return
  emit('click', props)
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.md-tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 6px 0;
  position: relative;
  cursor: pointer;
  user-select: none;

  &--active {
    .md-tabbar-item__text {
      color: var(--md-tabbar-active-text-color, #409eff);
    }

    .md-tabbar-item__icon {
      color: var(--md-tabbar-active-text-color, #409eff);
    }
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &__icon {
    font-size: 20px;
    margin-bottom: 2px;
    color: var(--md-tabbar-text-color, #606266);
  }

  &__text {
    font-size: 12px;
    color: var(--md-tabbar-text-color, #606266);
  }

  &__badge {
    position: absolute;
    top: 4px;
    right: 50%;
    transform: translateX(50%);
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
</style>
