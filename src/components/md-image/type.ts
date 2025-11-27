export interface ImageProps {
  // 图片地址
  src: string
  
  // 图片模式
  mode?: 'aspectFit' | 'aspectFill' | 'scaleToFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
  
  // 是否懒加载
  lazyLoad?: boolean
  
  // 是否使用webp格式
  webp?: boolean
  
  // 是否显示加载状态
  showLoading?: boolean
  
  // 是否显示错误状态
  showError?: boolean
  
  // 默认图片，当加载失败时显示
  fallback?: string
  
  // 是否支持预览
  preview?: boolean | string[]
}

export interface ImageEmits {
  // 图片加载成功时触发
  load: []
  
  // 图片加载失败时触发
  error: []
  
  // 点击图片时触发
  click: [event: any]
  
  // 预览图片时触发
  preview: [images: string[], currentIndex: number]
}
