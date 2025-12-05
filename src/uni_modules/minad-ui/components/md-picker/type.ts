export interface PickerOption {
  /**
   * 选项值
   */
  value: string | number
  /**
   * 选项文本
   */
  label: string
  /**
   * 是否禁用该选项
   */
  disabled?: boolean
}

export interface PickerProps {
  /**
   * 数据源，可以是字符串数组或对象数组
   */
  options: string[] | PickerOption[]
  /**
   * 当前选中值
   */
  modelValue?: string | number
  /**
   * 占位符
   */
  placeholder?: string
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

export interface PickerEmits {
  /**
   * 选中值改变时触发
   */
  (e: 'update:modelValue', value: string | number): void
  /**
   * 确认选择时触发
   */
  (e: 'confirm', value: string | number, option: PickerOption | string): void
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
