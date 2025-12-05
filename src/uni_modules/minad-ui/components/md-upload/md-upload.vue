<template>
  <view class="md-upload" :class="uploadClasses">
    <!-- 上传区域 -->
    <view 
      v-if="!disabled && !readonly && status !== 'success'"
      class="md-upload__area"
      :class="{
        'md-upload__area--drag': dragActive,
        'md-upload__area--disabled': disabled
      }"
      @click="handleClick"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <!-- 上传按钮 -->
      <slot name="trigger">
        <view class="md-upload__trigger">
          <md-icon name="upload" size="24" color="#909399" />
          <view class="md-upload__text">{{ uploadText }}</view>
          <view v-if="accept" class="md-upload__hint">{{ accept }}</view>
        </view>
      </slot>
      
      <!-- 文件输入框 -->
      <input
        ref="fileInput"
        type="file"
        :multiple="multiple"
        :accept="accept"
        :disabled="disabled || readonly"
        @change="handleFileChange"
        class="md-upload__input"
      />
    </view>
    
    <!-- 上传进度 -->
    <view v-if="showProgress" class="md-upload__progress">
      <view class="md-upload__progress-bar">
        <view 
          class="md-upload__progress-inner"
          :style="{ width: `${progress}%` }"
        ></view>
      </view>
      <view class="md-upload__progress-text">{{ progress }}%</view>
    </view>
    
    <!-- 上传状态 -->
    <view v-if="status" class="md-upload__status">
      <md-icon 
        :name="status === 'success' ? 'check' : status === 'error' ? 'close' : 'loading'"
        :color="status === 'success' ? '#67c23a' : status === 'error' ? '#f56c6c' : '#409eff'"
        size="20"
      />
    </view>
    
    <!-- 预览列表 -->
    <view v-if="fileList.length > 0" class="md-upload__list">
      <view 
        v-for="(file, index) in fileList" 
        :key="file.uid || index"
        class="md-upload__file"
      >
        <!-- 文件预览 -->
        <view class="md-upload__file-preview" @click="handlePreview(file)">
          <md-icon 
            :name="getIconName(file.type)"
            size="24"
            color="#409eff"
          />
        </view>
        
        <!-- 文件信息 -->
        <view class="md-upload__file-info">
          <view class="md-upload__file-name">{{ file.name }}</view>
          <view class="md-upload__file-size">{{ formatSize(file.size) }}</view>
        </view>
        
        <!-- 操作按钮 -->
        <view v-if="!readonly" class="md-upload__file-actions">
          <view 
            v-if="file.status !== 'success'"
            class="md-upload__file-action md-upload__file-action--cancel"
            @click.stop="handleCancel(file, index)"
          >
            <md-icon name="close" size="16" color="#909399" />
          </view>
          <view 
            v-else
            class="md-upload__file-action md-upload__file-action--delete"
            @click.stop="handleDelete(file, index)"
          >
            <md-icon name="delete" size="16" color="#f56c6c" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import MdIcon from '../md-icon/md-icon.vue'
import type { UploadFile, UploadProps, UploadEmits } from './type'

// 定义组件属性
const props = withDefaults(defineProps<UploadProps>(), {
  modelValue: () => [],
  disabled: false,
  readonly: false,
  multiple: false,
  accept: '',
  maxSize: Infinity,
  maxCount: Infinity,
  action: '',
  method: 'post',
  headers: () => ({}),
  data: () => ({}),
  name: 'file',
  showProgress: true,
  uploadText: '点击上传',
  status: undefined,
  customClass: ''
})

// 定义组件事件
const emit = defineEmits<UploadEmits>()

// 内部状态
const fileInput = ref<HTMLInputElement | null>(null)
const fileList = ref<UploadFile[]>([...props.modelValue])
const dragActive = ref(false)
const progress = ref(0)
const uploadText = computed(() => props.uploadText)

// 计算属性
const uploadClasses = computed(() => {
  return {
    'md-upload--disabled': props.disabled,
    'md-upload--readonly': props.readonly,
    'md-upload--multiple': props.multiple,
    [props.customClass]: !!props.customClass
  }
})

// 获取文件图标名称
const getIconName = (fileType: string): string => {
  if (fileType.startsWith('image/')) return 'image'
  if (fileType.startsWith('video/')) return 'video-camera'
  if (fileType.startsWith('audio/')) return 'sound'
  if (fileType === 'application/pdf') return 'document'
  if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'document'
  if (fileType === 'application/vnd.ms-excel' || fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') return 'document'
  if (fileType === 'application/vnd.ms-powerpoint' || fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') return 'document'
  if (fileType.startsWith('text/')) return 'document'
  return 'document'
}

// 格式化文件大小
const formatSize = (size: number): string => {
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
  if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(1)} MB`
  return `${(size / (1024 * 1024 * 1024)).toFixed(1)} GB`
}

// 生成唯一ID
const generateUid = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// 处理点击事件
const handleClick = () => {
  if (props.disabled || props.readonly) return
  fileInput.value?.click()
}

// 处理文件选择
const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = input.files
  if (!files || files.length === 0) return
  
  // 处理选中的文件
  handleFiles(files)
  
  // 清空输入框，以便下次选择同一文件时能触发change事件
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// 处理文件
const handleFiles = (files: FileList) => {
  const selectedFiles: File[] = []
  const newFileList: UploadFile[] = [...fileList.value]
  
  // 检查文件数量
  if (newFileList.length >= props.maxCount) {
    console.warn(`已达到最大文件数量限制: ${props.maxCount}`)
    return
  }
  
  // 遍历文件
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    
    // 检查文件大小
    if (file.size > props.maxSize) {
      console.warn(`文件大小超过限制: ${formatSize(props.maxSize)}`)
      continue
    }
    
    // 检查文件数量
    if (newFileList.length >= props.maxCount) {
      console.warn(`已达到最大文件数量限制: ${props.maxCount}`)
      break
    }
    
    selectedFiles.push(file)
    
    // 创建上传文件对象
    const uploadFile: UploadFile = {
      uid: generateUid(),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'ready',
      raw: file
    }
    
    newFileList.push(uploadFile)
  }
  
  // 更新文件列表
  if (newFileList.length !== fileList.value.length) {
    fileList.value = newFileList
    emit('update:modelValue', newFileList)
    emit('file-selected', selectedFiles)
    
    // 自动上传
    if (props.action) {
      selectedFiles.forEach((file, index) => {
        uploadFile(newFileList[newFileList.length - selectedFiles.length + index], file)
      })
    }
  }
}

// 上传文件
const uploadFile = async (uploadFile: UploadFile, rawFile: File) => {
  // 触发上传前事件
  const beforeUploadResult = emit('before-upload', rawFile)
  if (beforeUploadResult === false) return
  if (beforeUploadResult instanceof Promise) {
    const result = await beforeUploadResult
    if (!result) return
  }
  
  // 更新文件状态
  uploadFile.status = 'uploading'
  emit('update:modelValue', [...fileList.value])
  
  try {
    // 创建FormData
    const formData = new FormData()
    formData.append(props.name, rawFile)
    
    // 添加请求参数
    Object.entries(props.data).forEach(([key, value]) => {
      formData.append(key, value)
    })
    
    // 创建XMLHttpRequest
    const xhr = new XMLHttpRequest()
    
    // 监听进度
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100)
        uploadFile.progress = percent
        progress.value = percent
        emit('progress', percent, uploadFile)
        emit('update:modelValue', [...fileList.value])
      }
    })
    
    // 监听完成
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // 上传成功
        const response = JSON.parse(xhr.responseText)
        uploadFile.status = 'success'
        uploadFile.response = response
        uploadFile.url = response.url || ''
        progress.value = 100
        emit('success', response, uploadFile)
      } else {
        // 上传失败
        throw new Error(`Upload failed with status: ${xhr.status}`)
      }
      emit('update:modelValue', [...fileList.value])
    })
    
    // 监听错误
    xhr.addEventListener('error', () => {
      throw new Error('Upload failed')
    })
    
    // 发送请求
    xhr.open(props.method, props.action, true)
    
    // 设置请求头
    Object.entries(props.headers).forEach(([key, value]) => {
      xhr.setRequestHeader(key, value)
    })
    
    xhr.send(formData)
  } catch (error) {
    // 上传失败
    uploadFile.status = 'error'
    emit('error', error as Error, uploadFile)
    emit('update:modelValue', [...fileList.value])
  }
}

// 处理拖拽事件
const handleDragOver = () => {
  dragActive.value = true
}

// 处理拖拽离开
const handleDragLeave = () => {
  dragActive.value = false
}

// 处理拖拽放下
const handleDrop = (event: DragEvent) => {
  dragActive.value = false
  const files = event.dataTransfer?.files
  if (files && files.length > 0) {
    handleFiles(files)
  }
}

// 处理文件删除
const handleDelete = (file: UploadFile, index: number) => {
  const newFileList = fileList.value.filter((_, i) => i !== index)
  fileList.value = newFileList
  emit('update:modelValue', newFileList)
  emit('remove', file)
}

// 处理文件取消
const handleCancel = (file: UploadFile, index: number) => {
  handleDelete(file, index)
}

// 处理文件预览
const handlePreview = (file: UploadFile) => {
  emit('preview', file)
}

// 重置组件
const reset = () => {
  fileList.value = []
  progress.value = 0
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  emit('update:modelValue', [])
}

// 手动上传文件
const upload = () => {
  fileList.value.forEach(file => {
    if (file.status === 'ready' && file.raw && props.action) {
      uploadFile(file, file.raw)
    }
  })
}

// 组件挂载时初始化
onMounted(() => {
  // 监听拖拽事件
  document.addEventListener('dragover', handleDragOver)
  document.addEventListener('dragleave', handleDragLeave)
  document.addEventListener('drop', handleDrop)
})

// 组件卸载时清理
onBeforeUnmount(() => {
  // 移除拖拽事件监听
  document.removeEventListener('dragover', handleDragOver)
  document.removeEventListener('dragleave', handleDragLeave)
  document.removeEventListener('drop', handleDrop)
})

// 暴露方法
defineExpose({
  reset,
  upload,
  fileInput
})
</script>

<style lang="scss" scoped>
@import '../../styles/_index.scss';

.md-upload {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  
  &__area {
    position: relative;
    border: 1px dashed #dcdfe6;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    background-color: #fafafa;
    
    &:hover {
      border-color: #409eff;
      background-color: #ecf5ff;
    }
    
    &--drag {
      border-color: #409eff;
      background-color: #ecf5ff;
    }
    
    &--disabled {
      cursor: not-allowed;
      opacity: 0.6;
      
      &:hover {
        border-color: #dcdfe6;
        background-color: #fafafa;
      }
    }
  }
  
  &__trigger {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  &__text {
    color: #606266;
    font-size: 14px;
  }
  
  &__hint {
    color: #909399;
    font-size: 12px;
  }
  
  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  
  &__progress {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  &__progress-bar {
    flex: 1;
    height: 6px;
    background-color: #ebeef5;
    border-radius: 3px;
    overflow: hidden;
  }
  
  &__progress-inner {
    height: 100%;
    background-color: #409eff;
    transition: width 0.3s;
  }
  
  &__progress-text {
    color: #606266;
    font-size: 12px;
  }
  
  &__status {
    margin-top: 10px;
    text-align: center;
  }
  
  &__list {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  &__file {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    background-color: #fff;
  }
  
  &__file-preview {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f2f5;
    border-radius: 4px;
    cursor: pointer;
  }
  
  &__file-info {
    flex: 1;
    min-width: 0;
  }
  
  &__file-name {
    color: #606266;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  &__file-size {
    color: #909399;
    font-size: 12px;
    margin-top: 4px;
  }
  
  &__file-actions {
    display: flex;
    gap: 10px;
  }
  
  &__file-action {
    cursor: pointer;
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  &--multiple {
    .md-upload__file {
      flex-wrap: wrap;
    }
  }
}
</style>