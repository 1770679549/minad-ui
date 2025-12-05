export interface IconProps {
  /**
   * 图标名称 (自动添加 md-icon- 前缀)
   */
  name?: string
  /**
   * 图标大小
   */
  size?: number | string
  /**
   * 图标颜色
   */
  color?: string
  /**
   * 旋转角度
   */
  rotate?: number
  /**
   * 是否旋转动画
   */
  spin?: boolean
  /**
   * 是否为加载状态
   */
  loading?: boolean
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
}
