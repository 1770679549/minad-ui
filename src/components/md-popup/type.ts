export interface PopupProps {
  /**
   * 控制弹窗显示/隐藏
   */
  modelValue?: boolean;
  /**
   * 弹窗位置，可选值：top、bottom、left、right、center
   */
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  /**
   * 是否显示遮罩层
   */
  mask?: boolean;
  /**
   * 点击遮罩层是否关闭弹窗
   */
  maskClosable?: boolean;
  /**
   * 遮罩层透明度
   */
  maskOpacity?: number;
  /**
   * 遮罩层背景色
   */
  maskBackgroundColor?: string;
  /**
   * 弹窗宽度，仅在position为left/right/center时生效
   */
  width?: string | number;
  /**
   * 弹窗高度，仅在position为top/bottom/center时生效
   */
  height?: string | number;
  /**
   * 是否显示圆角
   */
  round?: boolean;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}

export interface PopupEmits {
  /**
   * 弹窗显示状态变化时触发
   */
  (e: 'update:modelValue', value: boolean): void;
  /**
   * 弹窗打开时触发
   */
  (e: 'open'): void;
  /**
   * 弹窗关闭时触发
   */
  (e: 'close'): void;
  /**
   * 点击遮罩层时触发
   */
  (e: 'mask-click'): void;
}
