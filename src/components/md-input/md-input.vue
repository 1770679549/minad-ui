<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 10:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 10:30:11
 * @FilePath: \minad-ui\src\components\md-input\md-input.vue
 * @Description: Input 组件实现
 *
-->
<template>
  <view :class="['md-input-wrapper', size, { disabled, readonly }]">
    <!-- 前缀插槽 -->
    <view v-if="$slots.prefix" class="md-input-prefix">
      <slot name="prefix"></slot>
    </view>

    <!-- 输入框 -->
    <input
      ref="inputRef"
      :type="type"
      :class="['md-input']"
      :value="modelValue"
      :placeholder="computedPlaceholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength?.toString()"
      :minlength="minlength?.toString()"
      :step="step?.toString()"
      :min="min?.toString()"
      :max="max?.toString()"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @keydown="handleKeydown"
      @keyup="handleKeyup"
    />

    <!-- 后缀插槽 -->
    <view v-if="$slots.suffix" class="md-input-suffix">
      <slot name="suffix"></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch, inject, computed } from 'vue'
import { useI18n } from '../../i18n/i18n'
import type { InputProps, InputEmits } from './type'

// Props 定义
const props = defineProps<InputProps>()

// Use i18n
const { t } = useI18n()

// Computed placeholder with i18n support
const computedPlaceholder = computed(() => {
  return props.placeholder || t('input.placeholder')
})

// Emits 定义
const emit = defineEmits<InputEmits>()

// 输入框引用
const inputRef = ref<HTMLInputElement | null>(null)

// 处理输入事件
const handleInput = (event: Event) => {
  if (props.disabled || props.readonly) return

  const target = event.target as HTMLInputElement
  let value: string | number = target.value

  // 如果是数字类型，转换为数字
  if (props.type === 'number' && value !== '') {
    value = Number(value)
  }

  emit('update:modelValue', value)
  emit('input', value)
}

// 处理聚焦事件
const handleFocus = (event: FocusEvent) => {
  if (props.disabled) return
  emit('focus', event)
}

// 处理失焦事件
const handleBlur = (event: FocusEvent) => {
  if (props.disabled) return
  emit('blur', event)

  // 触发表单验证
  const mdFormItem = inject<any>('mdFormItem')
  if (mdFormItem?.handleBlur) {
    mdFormItem.handleBlur()
  }
}

// 处理值改变事件
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value: string | number = target.value

  if (props.type === 'number' && value !== '') {
    value = Number(value)
  }

  emit('change', value)

  // 触发表单验证
  const mdFormItem = inject<any>('mdFormItem')
  if (mdFormItem?.handleChange) {
    mdFormItem.handleChange()
  }
}

// 处理键盘按下事件
const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}

// 处理键盘释放事件
const handleKeyup = (event: KeyboardEvent) => {
  emit('keyup', event)
}

// 暴露方法
defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  select: () => inputRef.value?.select()
})
</script>

<style lang="scss" scoped>

// 输入框基础样式
.md-input-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border: 1px solid $md-color-border;
  border-radius: $md-border-radius-base;
  transition: $md-transition;
  background-color: $md-color-bg;

  &:focus-within {
    border-color: $md-color-primary;
    box-shadow: 0 0 0 2px rgba($md-color-primary, 0.2);
  }

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: $md-color-bg-disabled;
  }

  &.readonly {
    background-color: $md-color-bg-disabled;
  }

  // 尺寸变体
  &.large, &.large .md-input { font-size: $md-size-large; }
  &.medium, &.medium .md-input { font-size: $md-size-medium; }
  &.small, &.small .md-input { font-size: $md-size-small; }

  &.large .md-input { padding: $md-spacing-sm $md-spacing-lg; }
  &.medium .md-input { padding: $md-spacing-sm $md-spacing-md; }
  &.small .md-input { padding: $md-spacing-xs $md-spacing-sm; }
}

.md-input {
  flex: 1;
  padding: $md-spacing-sm $md-spacing-md;
  border: none;
  outline: none;
  font-size: inherit;
  line-height: 1.5;
  color: $md-color-text;
  background-color: transparent;

  &::placeholder {
    color: $md-color-text-placeholder;
  }

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
}

// 前缀和后缀样式
.md-input-prefix,
.md-input-suffix {
  padding: 0 $md-spacing-sm;
  color: $md-color-text-placeholder;
  font-size: inherit;
}
</style>
