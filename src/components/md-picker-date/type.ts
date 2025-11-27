export type PickerDateMode = 'date' | 'time' | 'datetime' | 'year' | 'month'

export interface PickerDateProps {
  /**
   * 当前选中的日期值
   */
  modelValue?: string | Date
  /**
   * 选择器模式
   */
  mode?: PickerDateMode
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 最小日期
   */
  minDate?: string | Date
  /**
   * 最大日期
   */
  maxDate?: string | Date
  /**
   * 日期格式
   */
  format?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 自定义类名
   */
  customClass?: string
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
}

export interface PickerDateEmits {
  /**
   * 选中值改变时触发
   */
  (e: 'update:modelValue', value: string | Date): void
  /**
   * 确认选择时触发
   */
  (e: 'confirm', value: string | Date, formattedValue: string): void
  /**
   * 取消选择时触发
   */
  (e: 'cancel'): void
  /**
   * 选择器打开时触发
   */
  (e: 'open'): void
  /**
   * 选择器关闭时触发
   */
  (e: 'close'): void
}
