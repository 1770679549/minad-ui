export interface CollapseProps {
  /**
   * 当前激活的面板，支持 v-model
   */
  modelValue?: string | string[];
  /**
   * 是否开启手风琴模式，开启后只能展开一个面板
   */
  accordion?: boolean;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}

export interface CollapseEmits {
  /**
   * 切换面板时触发
   */
  (e: 'update:modelValue', value: string | string[]): void;
  /**
   * 面板展开/折叠时触发
   */
  (e: 'change', value: string | string[]): void;
}

export interface CollapseProvide {
  /**
   * 注册面板
   */
  registerItem: (name: string) => void;
  /**
   * 注销面板
   */
  unregisterItem: (name: string) => void;
  /**
   * 切换面板状态
   */
  toggleItem: (name: string) => void;
  /**
   * 当前激活的面板
   */
  activeNames: string | string[];
  /**
   * 是否开启手风琴模式
   */
  accordion: boolean;
}