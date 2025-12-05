export interface TabbarItemProps {
  /** 标签文字 */
  text: string
  /** 图标名称 */
  icon: string
  /** 激活状态的图标名称 */
  activeIcon?: string
  /** 是否激活 */
  active?: boolean
  /** 徽章数量或是否显示红点 */
  badge?: number | string | boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 路由路径 */
  path?: string
}

export interface TabbarItemEmits {
  /** 点击事件 */
  (e: 'click', item: TabbarItemProps): void
}
