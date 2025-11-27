export interface TagProps {
  /**
   * 标签类型
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /**
   * 标签尺寸
   */
  size?: 'large' | 'medium' | 'small'
  /**
   * 标签颜色
   */
  color?: string
  /**
   * 标签背景色
   */
  bgColor?: string
  /**
   * 是否可关闭
   */
  closable?: boolean
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否为圆角
   */
  round?: boolean
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
  /**
   * 自定义类名
   */
  customClass?: string
}

export interface TagEmits {
  /**
   * 点击标签时触发
   */
  click: [event: any]
  /**
   * 关闭标签时触发
   */
  close: [event: any]
}
