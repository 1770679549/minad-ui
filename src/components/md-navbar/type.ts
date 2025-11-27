import type { CSSProperties } from 'vue'

// 定义组件的 Props 接口
export interface NavbarProps {
  /** 导航栏标题 */
  title?: string
  /** 左侧文字 */
  leftText?: string
  /** 左侧图标 */
  leftIcon?: string
  /** 右侧文字 */
  rightText?: string
  /** 右侧图标 */
  rightIcon?: string
  /** 导航栏高度 */
  height?: number | string
  /** 背景颜色 */
  backgroundColor?: string
  /** 文字颜色 */
  textColor?: string
  /** 是否固定在顶部 */
  fixed?: boolean
  /** 是否显示下边框 */
  bordered?: boolean
  /** 左侧区域是否可点击 */
  leftClickable?: boolean
  /** 右侧区域是否可点击 */
  rightClickable?: boolean
  /** 自定义样式 */
  customStyle?: CSSProperties
}

// 定义组件的 Emits 接口
export interface NavbarEmits {
  /** 左侧区域点击事件 */
  (e: 'left-click'): void
  /** 右侧区域点击事件 */
  (e: 'right-click'): void
}
