export interface SwiperProps {
  /**
   * 当前激活的滑块索引，支持 v-model
   */
  modelValue?: number;
  /**
   * 是否自动播放
   */
  autoplay?: boolean;
  /**
   * 自动播放间隔时间（毫秒）
   */
  interval?: number;
  /**
   * 是否循环播放
   */
  loop?: boolean;
  /**
   * 是否显示指示器
   */
  indicator?: boolean;
  /**
   * 指示器位置，可选值：bottom, top, left, right
   */
  indicatorPosition?: 'bottom' | 'top' | 'left' | 'right';
  /**
   * 是否显示箭头
   */
  arrow?: boolean;
  /**
   * 滑块宽度
   */
  width?: string | number;
  /**
   * 滑块高度
   */
  height?: string | number;
  /**
   * 滑动方向，可选值：horizontal, vertical
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}

export interface SwiperEmits {
  /**
   * 滑块切换时触发
   */
  (e: 'update:modelValue', index: number): void;
  /**
   * 滑块切换时触发
   */
  (e: 'change', index: number): void;
  /**
   * 滑动开始时触发
   */
  (e: 'swiper', index: number): void;
  /**
   * 滑动结束时触发
   */
  (e: 'swiperend', index: number): void;
}

export interface SwiperItemProps {
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}

export interface SwiperProvide {
  /**
   * 注册滑块
   */
  registerItem: () => void;
  /**
   * 注销滑块
   */
  unregisterItem: () => void;
  /**
   * 当前激活的滑块索引
   */
  activeIndex: number;
  /**
   * 滑块总数
   */
  itemCount: number;
}