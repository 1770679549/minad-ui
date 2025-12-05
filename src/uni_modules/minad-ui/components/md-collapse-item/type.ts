export interface CollapseItemProps {
  /**
   * 面板唯一标识
   */
  name: string;
  /**
   * 面板标题
   */
  title?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 自定义类名
   */
  customClass?: string;
}

export interface CollapseItemEmits {
  /**
   * 面板展开/折叠时触发
   */
  (e: 'expand', name: string): void;
  /**
   * 面板折叠时触发
   */
  (e: 'collapse', name: string): void;
}