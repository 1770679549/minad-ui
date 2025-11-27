export interface WatermarkProps {
  /**
   * 水印文本内容
   */
  content?: string
  /**
   * 水印图片路径
   */
  image?: string
  /**
   * 水印宽度
   */
  width?: number | string
  /**
   * 水印高度
   */
  height?: number | string
  /**
   * 水印水平间距
   */
  gapX?: number
  /**
   * 水印垂直间距
   */
  gapY?: number
  /**
   * 水印旋转角度
   */
  rotate?: number
  /**
   * 水印透明度
   */
  opacity?: number
  /**
   * 水印字体大小
   */
  fontSize?: number | string
  /**
   * 水印字体颜色
   */
  color?: string
  /**
   * 水印字体样式
   */
  fontStyle?: 'normal' | 'italic'
  /**
   * 水印字体粗细
   */
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number
  /**
   * 水印字体
   */
  fontFamily?: string
  /**
   * 是否显示水印
   */
  show?: boolean
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>
  /**
   * 自定义类名
   */
  customClass?: string
}

export interface WatermarkEmits {
  /**
   * 水印加载完成时触发
   */
  load: []
}
