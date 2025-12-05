export interface CheckboxProps {
  /**
   * 是否选中，支持 v-model
   */
  modelValue?: boolean;
  /**
   * 复选框值
   */
  value?: any;
  /**
   * 复选框标签
   */
  label?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否显示边框
   */
  border?: boolean;
  /**
   * 自定义颜色
   */
  color?: string;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}

export interface CheckboxEmits {
  /**
   * 选中状态变化时触发
   */
  (e: 'update:modelValue', checked: boolean): void;
  /**
   * 选中状态变化时触发
   */
  (e: 'change', checked: boolean, value: any): void;
}

export interface CheckboxGroupProps {
  /**
   * 选中的值，支持 v-model
   */
  modelValue?: any[];
  /**
   * 是否禁用所有复选框
   */
  disabled?: boolean;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}

export interface CheckboxGroupEmits {
  /**
   * 选中值变化时触发
   */
  (e: 'update:modelValue', values: any[]): void;
  /**
   * 选中值变化时触发
   */
  (e: 'change', values: any[]): void;
}

export interface CheckboxGroupProvide {
  /**
   * 注册复选框
   */
  registerCheckbox: (checkbox: any) => void;
  /**
   * 注销复选框
   */
  unregisterCheckbox: (checkbox: any) => void;
  /**
   * 选中值
   */
  modelValue: any[];
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 处理复选框变化
   */
  handleCheckboxChange: (value: any, checked: boolean) => void;
}