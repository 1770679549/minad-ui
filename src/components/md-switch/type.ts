// Props 接口定义
export interface SwitchProps {
  /**
   * 绑定值
   */
  modelValue: boolean | string | number
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否加载中
   */
  loading?: boolean
  /**
   * 开关大小
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 打开时的文字描述
   */
  activeText?: string
  /**
   * 关闭时的文字描述
   */
  inactiveText?: string
  /**
   * 打开时的值
   */
  activeValue?: boolean | string | number
  /**
   * 关闭时的值
   */
  inactiveValue?: boolean | string | number
  /**
   * 打开时的背景色
   */
  activeColor?: string
  /**
   * 关闭时的背景色
   */
  inactiveColor?: string
  /**
   * 是否使用原生input
   */
  native?: boolean
  /**
   * 自定义类名
   */
  customClass?: string
  /**
   * 开关的宽度（像素）
   */
  width?: number
  /**
   * 文字位置：内部或外部
   */
  textPosition?: 'inside' | 'outside'
}

// Emits 接口定义
export interface SwitchEmits {
  /**
   * 绑定值变化时触发
   */
  (e: 'update:modelValue', value: boolean | string | number): void
  /**
   * 点击时触发
   */
  (e: 'click', event: MouseEvent): void
  /**
   * 状态变化时触发
   */
  (e: 'change', value: boolean | string | number): void
}
