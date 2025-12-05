export interface TabsItemProps {
  /** 标签标题 */
  title: string
  /** 标签值，用于标识标签 */
  value?: string | number
  /** 是否激活 */
  active?: boolean
  /** 徽章数量或是否显示红点 */
  badge?: number | string | boolean
  /** 是否禁用 */
  disabled?: boolean
}

export interface TabsItemEmits {
  /** 点击事件 */
  (e: 'click', item: TabsItemProps): void
}
