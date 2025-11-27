export interface CardProps {
  /**
   * 卡片标题
   */
  title?: string
  /**
   * 卡片类型
   */
  type?: 'default' | 'bordered' | 'shadow'
  /**
   * 是否显示卡片头部
   */
  showHeader?: boolean
  /**
   * 是否显示卡片底部
   */
  showFooter?: boolean
  /**
   * 卡片背景色
   */
  backgroundColor?: string
  /**
   * 卡片圆角
   */
  borderRadius?: number | string
  /**
   * 卡片阴影
   */
  shadow?: string
  /**
   * 自定义类名
   */
  customClass?: string
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
}

export interface CardEmits {
  /**
   * 卡片点击事件
   */
  (e: 'click', event: MouseEvent): void
}
