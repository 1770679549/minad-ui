<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 14:48:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 14:48:00
 * @FilePath: \minad-ui\src\components\md-dialog\md-dialog.vue
 * @Description: Dialog 对话框组件
 *
-->
<template>
  <teleport to="body">
    <view v-if="visible" class="md-dialog-container" @click="handleOverlayClick">
      <!-- 遮罩层 -->
      <view class="md-dialog-overlay"></view>
      
      <!-- 对话框内容 -->
      <view :class="dialogClasses" :style="dialogStyles" @click.stop>
        <!-- 标题 -->
        <view v-if="title || $slots.title" class="md-dialog__header">
          <slot name="title">
            <text class="md-dialog__title">{{ title }}</text>
          </slot>
        </view>
        
        <!-- 内容 -->
        <view class="md-dialog__body">
          <slot>
            <text class="md-dialog__content">{{ content }}</text>
          </slot>
        </view>
        
        <!-- 按钮区域 -->
        <view class="md-dialog__footer" v-if="showConfirmButton || showCancelButton || $slots.footer">
          <slot name="footer">
            <view class="md-dialog__buttons">
              <!-- 取消按钮 -->
              <md-button
                v-if="showCancelButton"
                :type="cancelButtonType"
                :text="cancelButtonText"
                @click="handleCancel"
                class="md-dialog__button"
              ></md-button>
              
              <!-- 确认按钮 -->
              <md-button
                v-if="showConfirmButton"
                :type="confirmButtonType"
                :text="confirmButtonText"
                @click="handleConfirm"
                class="md-dialog__button"
              ></md-button>
            </view>
          </slot>
        </view>
      </view>
    </view>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { MdButton } from '../md-button'
import type { DialogProps, DialogEmits, DialogType } from './type'

const props = withDefaults(defineProps<DialogProps>(), {
  modelValue: false,
  type: 'default',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  confirmButtonType: 'primary',
  cancelButtonType: 'info',
  closeOnClickOverlay: true,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<DialogEmits>()

// 内部可见性状态
const visible = ref(props.modelValue)

// 监听modelValue变化
watch(() => props.modelValue, (newValue) => {
  visible.value = newValue
  if (newValue) {
    emit('open')
  }
}, { immediate: true })

// 监听visible变化
watch(visible, (newValue) => {
  if (!newValue) {
    emit('update:modelValue', false)
    emit('close')
  }
})

// 计算对话框类名
const dialogClasses = computed(() => {
  return [
    'md-dialog',
    `md-dialog--${props.type}`,
    props.customClass
  ]
})

// 计算对话框样式
const dialogStyles = computed(() => {
  return {
    ...props.customStyle
  }
})

// 处理遮罩层点击
const handleOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    closeDialog()
  }
}

// 处理确认按钮点击
const handleConfirm = () => {
  emit('confirm')
  closeDialog()
}

// 处理取消按钮点击
const handleCancel = () => {
  emit('cancel')
  closeDialog()
}

// 关闭对话框
const closeDialog = () => {
  visible.value = false
}


</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

// 对话框容器
.md-dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

// 遮罩层
.md-dialog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease;
}

// 对话框
.md-dialog {
  position: relative;
  background-color: $md-color-bg;
  border-radius: $md-border-radius-lg;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
  animation: slideIn 0.3s ease;
  overflow: hidden;
  
  // 类型变体
  &--success {
    border-left: 4px solid $md-color-success;
  }
  
  &--warning {
    border-left: 4px solid $md-color-warning;
  }
  
  &--error {
    border-left: 4px solid $md-color-danger;
  }
  
  &--info {
    border-left: 4px solid $md-color-info;
  }
  
  &--default {
    border-left: 4px solid $md-color-primary;
  }
}

// 对话框标题
.md-dialog__header {
  padding: $md-spacing-lg $md-spacing-lg $md-spacing-md;
  border-bottom: 1px solid $md-color-border;
}

.md-dialog__title {
  font-size: $md-size-large;
  font-weight: 500;
  color: $md-color-text;
}

// 对话框内容
.md-dialog__body {
  padding: $md-spacing-lg;
  min-height: 60px;
  display: flex;
  align-items: center;
}

.md-dialog__content {
  font-size: $md-size-medium;
  color: $md-color-text;
  line-height: 1.5;
}

// 对话框底部
.md-dialog__footer {
  padding: $md-spacing-md $md-spacing-lg;
  border-top: 1px solid $md-color-border;
  display: flex;
  justify-content: flex-end;
}

// 按钮容器
.md-dialog__buttons {
  display: flex;
  gap: $md-spacing-sm;
}

// 按钮样式
.md-dialog__button {
  flex: 1;
  min-width: 80px;
}

// 动画效果
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
