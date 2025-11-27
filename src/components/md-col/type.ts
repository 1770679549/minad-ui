export interface ColProps {
  /** 列宽，0-24之间的整数 */
  span?: number
  /** 左侧偏移量 */
  offset?: number
  /** 左侧推入 */
  push?: number
  /** 右侧拉出 */
  pull?: number
  /** 垂直对齐方式 */
  align?: 'top' | 'middle' | 'bottom'
}
