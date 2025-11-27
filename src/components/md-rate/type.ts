export interface RateProps {
  /**
   * 当前评分值，支持 v-model
   */
  modelValue?: number;
  /**
   * 最大评分值
   */
  max?: number;
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否允许半星评分
   */
  allowHalf?: boolean;
  /**
   * 自定义颜色
   */
  color?: string;
  /**
   * 未选中时的颜色
   */
  voidColor?: string;
  /**
   * 自定义大小
   */
  size?: number;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}

export interface RateEmits {
  /**
   * 评分变化时触发
   */
  (e: 'update:modelValue', value: number): void;
  /**
   * 评分变化时触发
   */
  (e: 'change', value: number): void;
}