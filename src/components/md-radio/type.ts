/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 18:00:35
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-28 09:23:31
 * @FilePath: \minad-ui\src\components\md-radio\type.ts
 * @Description:
 *
 */
export interface RadioProps {
  /**
   * 是否选中，支持 v-model
   */
  modelValue?: boolean;
  /**
   * 单选框值
   */
  value?: any;
  /**
   * 单选框标签
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

export interface RadioEmits {
  /**
   * 选中状态变化时触发
   */
  (e: 'update:modelValue', checked: boolean): void;
  /**
   * 选中状态变化时触发
   */
  (e: 'change', checked: boolean, value: any): void;
}

export interface RadioGroupProps {
  /**
   * 选中的值，支持 v-model
   */
  modelValue?: any;
  /**
   * 是否禁用所有单选框
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

export interface RadioGroupEmits {
  /**
   * 选中值变化时触发
   */
  (e: 'update:modelValue', value: any): void;
  /**
   * 选中值变化时触发
   */
  (e: 'change', value: any): void;
}

export interface RadioGroupProvide {
  /**
   * 注册单选框
   */
  registerRadio: (radio: any) => void;
  /**
   * 注销单选框
   */
  unregisterRadio: (radio: any) => void;
  /**
   * 选中值
   */
  modelValue: any;
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 处理单选框变化
   */
  handleRadioChange: (value: any) => void;
}
