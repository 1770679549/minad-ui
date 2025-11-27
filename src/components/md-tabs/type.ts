// 定义标签项接口
export interface TabsItem {
  /** 标签标题 */
  title: string
  /** 标签值 */
  value?: string | number
  /** 徽章数量或是否显示红点 */
  badge?: number | string | boolean
  /** 是否禁用 */
  disabled?: boolean
}

// 定义组件属性接口
export interface TabsProps {
  /** 当前激活的标签值 */
  modelValue?: string | number
  /** 标签列表 */
  tabs?: TabsItem[]
  /** 标签位置 */
  placement?: 'top' | 'bottom' | 'left' | 'right'
  /** 标签类型 */
  type?: 'line' | 'card'
  /** 是否显示边框 */
  bordered?: boolean
  /** 是否显示指示器 */
  showIndicator?: boolean
  /** 是否开启动画 */
  animated?: boolean
  /** 指示器高度 */
  indicatorHeight?: number
  /** 自定义指示器颜色 */
  indicatorColor?: string
}

// 定义事件接口
export interface TabsEmits {
  /** 标签切换事件 */
  (e: 'update:modelValue', value: string | number): void
  /** 标签切换事件 */
  (e: 'change', value: string | number, item?: TabsItem): void
  /** 点击禁用标签事件 */
  (e: 'disabled', value: string | number, item?: TabsItem): void
}
