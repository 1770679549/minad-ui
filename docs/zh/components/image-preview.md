# MdImagePreview 图片预览组件

## 功能说明

图片预览组件用于放大查看图片，支持多图切换、手势缩放和平移等功能。

## 导入方式

```typescript
import { ref } from 'vue'
import { MdImage, MdImagePreview } from 'minad-ui'
```

## 基础用法

```html
<template>
  <view class="demo-container">
    <md-image
      v-for="(item, index) in imageList"
      :key="index"
      :src="item"
      :width="100"
      :height="100"
      :preview="imageList"
      @preview="handlePreview"
      style="margin: 10px"
    />
    
    <md-image-preview
      v-model:visible="previewVisible"
      :images="previewImages"
      :initial-index="currentIndex"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MdImage, MdImagePreview } from 'minad-ui'

const imageList = ref([
  'https://images.unsplash.com/photo-1616486332758-69606627205b?w=800&q=80',
  'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80',
  'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&q=80'
])

const previewVisible = ref(false)
const previewImages = ref([])
const currentIndex = ref(0)

const handlePreview = (images: string[], index: number) => {
  previewImages.value = images
  currentIndex.value = index
  previewVisible.value = true
}
</script>
```

## 单图预览

```html
<template>
  <view class="demo-container">
    <md-image
      :src="imageUrl"
      :width="200"
      :height="200"
      :preview="true"
      @preview="handlePreview"
    />
    
    <md-image-preview
      v-model:visible="previewVisible"
      :images="previewImages"
      :initial-index="0"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MdImage, MdImagePreview } from 'minad-ui'

const imageUrl = ref('https://images.unsplash.com/photo-1616486332758-69606627205b?w=800&q=80')

const previewVisible = ref(false)
const previewImages = ref([])

const handlePreview = (images: string[], index: number) => {
  previewImages.value = images
  previewVisible.value = true
}
</script>
```

## 禁用缩放

```html
<template>
  <view class="demo-container">
    <md-image
      v-for="(item, index) in imageList"
      :key="index"
      :src="item"
      :width="100"
      :height="100"
      :preview="imageList"
      @preview="handlePreview"
      style="margin: 10px"
    />
    
    <md-image-preview
      v-model:visible="previewVisible"
      :images="previewImages"
      :initial-index="currentIndex"
      :zoomable="false"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MdImage, MdImagePreview } from 'minad-ui'

const imageList = ref([
  'https://images.unsplash.com/photo-1616486332758-69606627205b?w=800&q=80',
  'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80'
])

const previewVisible = ref(false)
const previewImages = ref([])
const currentIndex = ref(0)

const handlePreview = (images: string[], index: number) => {
  previewImages.value = images
  currentIndex.value = index
  previewVisible.value = true
}
</script>
```

## Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | `boolean` | `false` | 控制预览组件的显示和隐藏 |
| images | `string[]` | `[]` | 预览的图片列表 |
| initial-index | `number` | `0` | 初始显示的图片索引 |
| mode | `string` | `aspectFit` | 图片模式，与uniapp的image组件mode一致 |
| zoomable | `boolean` | `true` | 是否支持手势缩放 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭预览时触发 | - |
| change | 切换图片时触发 | `index: number` 切换后的图片索引 |

## Slots

| 名称 | 说明 |
| --- | --- |
| - | 自定义内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-text-inverse | `#ffffff` | 文字颜色（反色） |
| $md-border-radius-base | `4px` | 基础边框半径 |
| $md-border-radius-circle | `50%` | 圆形边框半径 |
| $md-transition | `all 0.3s ease` | 过渡动画 |
| $md-size-medium | `16px` | 中等字体大小 |
