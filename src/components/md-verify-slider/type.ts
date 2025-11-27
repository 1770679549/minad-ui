// Props 接口定义
export interface VerifySliderProps {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 滑块宽度（像素）
   */
  width?: number
  /**
   * 滑块高度（像素）
   */
  height?: number
  /**
   * 初始提示文字
   */
  initialText?: string
  /**
   * 滑动中提示文字
   */
  slidingText?: string
  /**
   * 验证成功提示文字
   */
  successText?: string
  /**
   * 验证失败提示文字
   */
  errorText?: string
  /**
   * 滑块背景颜色
   */
  trackColor?: string
  /**
   * 已滑动部分背景颜色
   */
  activeColor?: string
  /**
   * 滑块颜色
   */
  thumbColor?: string
  /**
   * 文字颜色
   */
  textColor?: string
  /**
   * 成功时的颜色
   */
  successColor?: string
  /**
   * 自定义类名
   */
  customClass?: string
}

// Emits 接口定义
export interface VerifySliderEmits {
  /**
   * 验证成功时触发
   */
  (e: 'success'): void
  /**
   * 验证失败时触发
   */
  (e: 'error'): void
  /**
   * 滑块状态变化时触发
   */
  (e: 'change', status: 'idle' | 'sliding' | 'success' | 'error'): void
}
