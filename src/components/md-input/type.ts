export interface InputProps {
  // 输入值
  modelValue: string | number
  // 输入框类型
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url'
  // 尺寸
  size?: 'large' | 'medium' | 'small'
  // 占位符
  placeholder?: string
  // 是否禁用
  disabled?: boolean
  // 是否只读
  readonly?: boolean
  // 最大长度
  maxlength?: number
  // 最小长度
  minlength?: number
  // 数字输入的最小值
  min?: number
  // 数字输入的最大值
  max?: number
  // 数字输入的步长
  step?: number
}

export interface InputEmits {
  // v-model 双向绑定事件
  'update:modelValue': [value: string | number]
  // 输入事件
  input: [value: string | number]
  // 聚焦事件
  focus: [event: FocusEvent]
  // 失焦事件
  blur: [event: FocusEvent]
  // 值改变事件
  change: [value: string | number]
  // 键盘按下事件
  keydown: [event: KeyboardEvent]
  // 键盘释放事件
  keyup: [event: KeyboardEvent]
}
