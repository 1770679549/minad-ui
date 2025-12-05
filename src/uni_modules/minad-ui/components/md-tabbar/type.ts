import type { CSSProperties } from 'vue'

// 定义 Tab 项接口
export interface TabbarItem {
  /** 标签文字 */
  text: string
  /** 图标名称 */
  icon: string
  /** 激活状态的图标名称 */
  activeIcon?: string
  /** 徽章数量或是否显示红点 */
  badge?: number | string | boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 路由路径 */
  path?: string
}

// 定义组件的 Props 接口
export interface TabbarProps {
  /** 标签列表 */
  tabs: TabbarItem[]
  /** 当前激活的标签索引 */
  modelValue: number
  /** 是否固定在底部 */
  fixed?: boolean
  /** 是否显示顶部边框 */
  bordered?: boolean
  /** 背景颜色 */
  backgroundColor?: string
  /** 文字颜色 */
  textColor?: string
  /** 激活状态的文字颜色 */
  activeTextColor?: string
  /** 高度 */
  height?: number | string
  /** 自定义样式 */
  customStyle?: CSSProperties
}

// 定义组件的 Emits 接口
export interface TabbarEmits {
  /** 标签切换时触发 */
  (e: 'update:modelValue', value: number): void
  /** 点击标签时触发 */
  (e: 'change', index: number, item?: TabbarItem): void
  /** 点击禁用的标签时触发 */
  (e: 'disabled', index: number, item?: TabbarItem): void
}
