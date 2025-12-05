// 文件信息接口
export interface UploadFile {
  uid: string
  name: string
  size: number
  type: string
  url?: string
  status?: 'ready' | 'uploading' | 'success' | 'error'
  response?: any
  progress?: number
  raw?: File
}

// 上传组件属性接口
export interface UploadProps {
  // 值（文件列表）
  modelValue?: UploadFile[]
  // 是否禁用
  disabled?: boolean
  // 是否只读
  readonly?: boolean
  // 是否支持多选
  multiple?: boolean
  // 接受的文件类型
  accept?: string
  // 最大文件大小（字节）
  maxSize?: number
  // 最大文件数量
  maxCount?: number
  // 上传地址
  action?: string
  // 请求方法
  method?: 'post' | 'put' | 'patch'
  // 请求头
  headers?: Record<string, string>
  // 请求参数
  data?: Record<string, any>
  // 文件字段名
  name?: string
  // 是否显示进度
  showProgress?: boolean
  // 上传文本
  uploadText?: string
  // 上传状态
  status?: 'ready' | 'uploading' | 'success' | 'error'
  // 自定义类名
  customClass?: string
}

// 上传组件事件接口
export interface UploadEmits {
  // 文件列表变化事件
  (e: 'update:modelValue', value: UploadFile[]): void
  // 文件选中事件
  (e: 'file-selected', file: File | File[]): void
  // 上传前事件
  (e: 'before-upload', file: File): boolean | Promise<boolean>
  // 上传进度事件
  (e: 'progress', progress: number, file: UploadFile): void
  // 上传成功事件
  (e: 'success', response: any, file: UploadFile): void
  // 上传失败事件
  (e: 'error', error: Error, file: UploadFile): void
  // 文件删除事件
  (e: 'remove', file: UploadFile): void
  // 文件预览事件
  (e: 'preview', file: UploadFile): void
}
