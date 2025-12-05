export interface CellProps {
  /**
   * 单元格标题
   */
  title?: string
  /**
   * 单元格描述
   */
  description?: string
  /**
   * 左侧图标名称
   */
  icon?: string
  /**
   * 右侧文本内容
   */
  value?: string
  /**
   * 右侧图标名称
   */
  rightIcon?: string
  /**
   * 是否显示右侧箭头
   */
  arrow?: boolean
  /**
   * 是否显示开关
   */
  switch?: boolean
  /**
   * 开关是否选中
   */
  switchChecked?: boolean
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否可点击
   */
  clickable?: boolean
  /**
   * 自定义类名
   */
  customClass?: string
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
}

export interface CellEmits {
  /**
   * 单元格点击事件
   */
  (e: 'click', event: MouseEvent): void
  /**
   * 开关状态变化事件
   */
  (e: 'switch-change', checked: boolean): void
}
