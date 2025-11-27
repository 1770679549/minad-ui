export interface EmptyProps {
  /**
   * 自定义图片地址
   */
  image?: string
  /**
   * 图标名称
   */
  icon?: string
  /**
   * 图标大小
   * @default 64
   */
  iconSize?: number | string
  /**
   * 标题文本
   */
  title?: string
  /**
   * 描述文本
   */
  description?: string
  /**
   * 按钮文本
   */
  buttonText?: string
  /**
   * 按钮类型
   * @default 'primary'
   */
  buttonType?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /**
   * 按钮尺寸
   * @default 'medium'
   */
  buttonSize?: 'small' | 'medium' | 'large'
  /**
   * 是否显示按钮
   * @default true
   */
  showButton?: boolean
  /**
   * 自定义类名
   */
  customClass?: string
}

export interface EmptyEmits {
  /**
   * 按钮点击事件
   */
  buttonClick: []
}
