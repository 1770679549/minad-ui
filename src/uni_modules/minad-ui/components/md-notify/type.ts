export type NotifyType = 'success' | 'warning' | 'error' | 'info' | 'default'
export type NotifyPosition = 'top' | 'bottom' | 'center'

export interface NotifyProps {
  /**
   * 控制通知显示/隐藏
   */
  modelValue?: boolean
  /**
   * 通知类型
   */
  type?: NotifyType
  /**
   * 通知标题
   */
  title?: string
  /**
   * 通知内容
   */
  content?: string
  /**
   * 通知位置
   */
  position?: NotifyPosition
  /**
   * 持续时间（毫秒），0表示不自动关闭
   */
  duration?: number
  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean
  /**
   * 是否显示图标
   */
  showIcon?: boolean
  /**
   * 自定义类名
   */
  customClass?: string
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
}

export interface NotifyEmits {
  /**
   * 显示/隐藏状态变化时触发
   */
  (e: 'update:modelValue', value: boolean): void
  /**
   * 通知关闭时触发
   */
  (e: 'close'): void
  /**
   * 点击通知时触发
   */
  (e: 'click'): void
  /**
   * 关闭按钮点击时触发
   */
  (e: 'close-click'): void
}
