export type SkeletonType = 'text' | 'button' | 'image' | 'input' | 'avatar' | 'paragraph'

export interface SkeletonProps {
  /**
   * 骨架屏类型
   */
  type?: SkeletonType;
  /**
   * 是否显示动画
   */
  animated?: boolean;
  /**
   * 宽度
   */
  width?: string | number;
  /**
   * 高度
   */
  height?: string | number;
  /**
   * 圆角大小
   */
  borderRadius?: string | number;
  /**
   * 行数，仅在 type 为 paragraph 时有效
   */
  rows?: number;
  /**
   * 每行宽度，仅在 type 为 paragraph 时有效，支持数组
   */
  rowWidths?: (string | number)[];
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}