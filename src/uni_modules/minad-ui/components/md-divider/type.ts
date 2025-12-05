export interface MdDividerProps {
  /**
   * 分隔线类型
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  /**
   * 分隔线位置
   */
  position?: 'left' | 'center' | 'right'
  /**
   * 是否为虚线
   */
  dashed?: boolean
  /**
   * 图片地址
   */
  image?: string
  /**
   * 图片alt属性
   */
  imageAlt?: string
  /**
   * 标签文本
   */
  tag?: string
  /**
   * 图片尺寸
   */
  imageSize?: number
  /**
   * 标签尺寸
   */
  tagSize?: 'large' | 'medium' | 'small'
}
