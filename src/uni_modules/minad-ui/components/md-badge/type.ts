export interface BadgeProps {
  /**
   * 徽章内容
   */
  value?: number | string;
  /**
   * 最大值，超过最大值会显示 '{max}+'，仅当 value 为数字时有效
   */
  max?: number;
  /**
   * 是否显示为红点
   */
  dot?: boolean;
  /**
   * 是否隐藏徽章
   */
  hidden?: boolean;
  /**
   * 徽章类型
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
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