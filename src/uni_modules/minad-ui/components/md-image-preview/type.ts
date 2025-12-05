export interface ImageItem {
  src: string
  alt?: string
}

export interface ImagePreviewProps {
  // 是否显示预览
  visible: boolean
  
  // 图片数组
  images: ImageItem[]
  
  // 初始显示的图片索引
  initialIndex?: number
  
  // 图片模式
  mode?: 'aspectFit' | 'aspectFill' | 'scaleToFill'
  
  // 是否可缩放
  zoomable?: boolean
}

export interface ImagePreviewEmits {
  // 关闭预览时触发
  close: []
  
  // 图片切换时触发
  change: [index: number]
}
