export type DialogType = 'success' | 'warning' | 'error' | 'info' | 'default'

export interface DialogProps {
  /**
   * 控制对话框显示/隐藏
   */
  modelValue?: boolean
  /**
   * 对话框标题
   */
  title?: string
  /**
   * 对话框内容
   */
  content?: string
  /**
   * 对话框类型
   */
  type?: DialogType
  /**
   * 是否显示确认按钮
   */
  showConfirmButton?: boolean
  /**
   * 是否显示取消按钮
   */
  showCancelButton?: boolean
  /**
   * 确认按钮文本
   */
  confirmButtonText?: string
  /**
   * 取消按钮文本
   */
  cancelButtonText?: string
  /**
   * 确认按钮类型
   */
  confirmButtonType?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /**
   * 取消按钮类型
   */
  cancelButtonType?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /**
   * 点击遮罩层是否关闭
   */
  closeOnClickOverlay?: boolean
  /**
   * 自定义类名
   */
  customClass?: string
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
}

export interface DialogEmits {
  /**
   * 显示/隐藏状态变化时触发
   */
  (e: 'update:modelValue', value: boolean): void
  /**
   * 点击确认按钮时触发
   */
  (e: 'confirm'): void
  /**
   * 点击取消按钮时触发
   */
  (e: 'cancel'): void
  /**
   * 对话框关闭时触发
   */
  (e: 'close'): void
  /**
   * 对话框打开时触发
   */
  (e: 'open'): void
}
