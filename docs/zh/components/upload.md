# Upload 上传

文件上传组件，支持多选、拖拽上传、进度显示等功能。

## 基础用法

```html
<template>
  <md-upload
    action="/api/upload"
    @success="onSuccess"
    @error="onError"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
  console.log('上传成功:', response, file)
}

const onError = (error: Error, file: UploadFile) => {
  showToast('上传失败，请重试')
  console.error('上传失败:', error, file)
}
</script>
```

## 多选上传

通过 `multiple` 属性开启多选上传功能。

```html
<template>
  <md-upload
    action="/api/upload"
    multiple
    :max-count="3"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}
</script>
```

## 拖拽上传

组件默认支持拖拽上传功能。

```html
<template>
  <md-upload
    action="/api/upload"
    upload-text="拖拽文件到此处或点击上传"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}
</script>
```

## 自定义上传按钮

通过 `trigger` 插槽自定义上传按钮。

```html
<template>
  <md-upload
    action="/api/upload"
    @success="onSuccess"
  >
    <template #trigger>
      <md-button type="primary">选择文件</md-button>
    </template>
  </md-upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}
</script>
```

## 文件类型限制

通过 `accept` 属性限制可上传的文件类型。

```html
<template>
  <md-upload
    action="/api/upload"
    accept=".jpg,.png,.gif"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}
</script>
```

## 文件大小限制

通过 `maxSize` 属性限制文件大小。

```html
<template>
  <md-upload
    action="/api/upload"
    :max-size="1024 * 1024 * 2" <!-- 2MB -->
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}
</script>
```

## 手动上传

通过 `ref` 调用组件的 `upload` 方法手动上传文件。

```html
<template>
  <view class="demo">
    <md-upload
      ref="uploadRef"
      :action="''"
      @file-selected="onFileSelected"
    />
    <md-button type="primary" @click="handleUpload">开始上传</md-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'
import type { MdUpload, UploadFile } from 'uniapp-minad-ui'

const uploadRef = ref<InstanceType<typeof MdUpload>>()
const selectedFiles = ref<UploadFile[]>([])

const onFileSelected = (file: File | File[]) => {
  console.log('文件已选择:', file)
}

const handleUpload = () => {
  // 设置上传地址
  uploadRef.value!.action = '/api/upload'
  // 手动上传
  uploadRef.value?.upload()
}
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
```

## 自定义文件列表

通过 `modelValue` 双向绑定文件列表，实现自定义文件列表展示。

```html
<template>
  <md-upload
    v-model="fileList"
    action="/api/upload"
    @success="onSuccess"
    @remove="onRemove"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'
import type { UploadFile } from 'uniapp-minad-ui'

const fileList = ref<UploadFile[]>([
  {
    uid: '1',
    name: 'file1.jpg',
    size: 1024000,
    type: 'image/jpeg',
    url: 'https://example.com/file1.jpg',
    status: 'success'
  },
  {
    uid: '2',
    name: 'file2.png',
    size: 2048000,
    type: 'image/png',
    url: 'https://example.com/file2.png',
    status: 'success'
  }
])

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}

const onRemove = (file: UploadFile) => {
  console.log('文件已删除:', file)
}
</script>
```

## 上传前验证

通过 `before-upload` 事件在上传前进行验证，返回 `false` 或 Promise 可以阻止上传。

```html
<template>
  <md-upload
    action="/api/upload"
    @before-upload="beforeUpload"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const beforeUpload = (file: File) => {
  // 验证文件大小
  if (file.size > 1024 * 1024 * 2) {
    showToast('文件大小不能超过 2MB')
    return false
  }
  
  // 验证文件类型
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    showToast('只支持 JPG、PNG、GIF 格式的图片')
    return false
  }
  
  return true
}

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}
</script>
```

## 上传进度

通过 `progress` 事件获取上传进度。

```html
<template>
  <md-upload
    action="/api/upload"
    @progress="onProgress"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onProgress = (progress: number, file: UploadFile) => {
  console.log('上传进度:', progress, file)
}

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}
</script>
```

## 文件预览

通过 `preview` 事件处理文件预览功能。

```html
<template>
  <md-upload
    action="/api/upload"
    @preview="onPreview"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onPreview = (file: UploadFile) => {
  console.log('预览文件:', file)
  // 实现文件预览逻辑
  if (file.type.startsWith('image/')) {
    // 图片预览
    uni.previewImage({
      urls: [file.url!]
    })
  } else {
    showToast('不支持该文件类型预览')
  }
}

const onSuccess = (response: any, file: UploadFile) => {
  showToast('上传成功！')
}
</script>
```

## 禁用状态

通过 `disabled` 属性禁用上传组件。

```html
<template>
  <md-upload
    action="/api/upload"
    disabled
  />
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定的文件列表 | `UploadFile[]` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| multiple | 是否支持多选 | `boolean` | `false` |
| accept | 接受的文件类型 | `string` | `''` |
| maxSize | 最大文件大小（字节） | `number` | `Infinity` |
| maxCount | 最大文件数量 | `number` | `Infinity` |
| action | 上传地址 | `string` | `''` |
| method | 请求方法 | `'post' \| 'put' \| 'patch'` | `'post'` |
| headers | 请求头 | `Record<string, string>` | `{}` |
| data | 请求参数 | `Record<string, any>` | `{}` |
| name | 文件字段名 | `string` | `'file'` |
| showProgress | 是否显示进度 | `boolean` | `true` |
| uploadText | 上传文本 | `string` | `'点击上传'` |
| status | 上传状态 | `'ready' \| 'uploading' \| 'success' \| 'error'` | `undefined` |
| customClass | 自定义类名 | `string` | `''` |

## Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| update:modelValue | 文件列表变化事件 | `value: UploadFile[]` |
| file-selected | 文件选中事件 | `file: File \| File[]` |
| before-upload | 上传前事件 | `file: File` |
| progress | 上传进度事件 | `progress: number, file: UploadFile` |
| success | 上传成功事件 | `response: any, file: UploadFile` |
| error | 上传失败事件 | `error: Error, file: UploadFile` |
| remove | 文件删除事件 | `file: UploadFile` |
| preview | 文件预览事件 | `file: UploadFile` |

## Slots

| 名称 | 说明 |
| --- | --- |
| trigger | 自定义上传按钮 |

## Methods

| 方法名 | 说明 |
| --- | --- |
| upload | 手动上传文件 |
| reset | 重置组件 |

## 类型定义

```typescript
// 上传文件信息
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

// 上传组件属性
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

// 上传组件事件
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
```

## 注意事项

1. 组件默认支持拖拽上传功能，在不支持拖拽的环境中会自动降级为点击上传。
2. 上传成功后，组件会自动将返回的响应数据添加到文件列表中。
3. 可以通过 `before-upload` 事件对文件进行验证，返回 `false` 或 Promise 可以阻止上传。
4. 在微信小程序等平台，需要使用 `uni.uploadFile` API 替代原生的 XMLHttpRequest 实现上传功能。