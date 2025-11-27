export interface NoticeBarProps {
  /**
   * 通知文本内容
   */
  text?: string;
  /**
   * 是否显示关闭按钮
   */
  closable?: boolean;
  /**
   * 是否显示左侧图标
   */
  showIcon?: boolean;
  /**
   * 滚动模式，可选值：scroll、static
   */
  mode?: 'scroll' | 'static';
  /**
   * 滚动速度，单位px/s
   */
  speed?: number;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 文字颜色
   */
  color?: string;
  /**
   * 自定义图标
   */
  icon?: string;
}

export interface NoticeBarEmits {
  /**
   * 点击关闭按钮时触发
   */
  (e: 'close'): void;
  /**
   * 点击通知栏时触发
   */
  (e: 'click'): void;
}
