<template>
  <view 
    class="md-tabs-item"
    :class="{
      'md-tabs-item--active': active
    }"
    @click="handleClick"
  >
    {{ title }}
    <view v-if="badge" class="md-tabs-item__badge">
      {{ typeof badge === 'boolean' ? '' : badge }}
    </view>
  </view>
</template>

<script setup lang="ts">
import type { TabsItemProps, TabsItemEmits } from './type'

const props = withDefaults(defineProps<TabsItemProps>(), {
  active: false,
  disabled: false,
  badge: undefined
})

const emit = defineEmits<TabsItemEmits>()

const handleClick = () => {
  if (props.disabled) return
  emit('click', props)
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.md-tabs-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 40px;
  font-size: 14px;
  color: var(--md-tabs-text-color, #606266);
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: all 0.3s;

  &--active {
    color: var(--md-tabs-active-text-color, #409eff);
    font-weight: 500;
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &__badge {
    position: absolute;
    top: 8px;
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
</style>
