# Watermark 水印

用于在页面或组件上添加水印效果，支持文本和图片水印

## 快速开始

### 导入组件

```javascript
import { MdWatermark } from 'minad-ui'
```

### 基础用法

```html
<template>
  <md-watermark content="minad-ui">
    <view class="demo-watermark">
      <text>水印组件演示</text>
    </view>
  </md-watermark>
</template>

<style scoped>
.demo-watermark {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}
</style>
```

## 文本水印

可以自定义文本水印的内容、颜色、字体大小和旋转角度

```html
<template>
  <md-watermark
    content="minad-ui 水印"
    color="rgba(0, 0, 0, 0.2)"
    fontSize="16"
    rotate="-20"
  >
    <view class="demo-watermark">
      <text>自定义文本水印</text>
    </view>
  </md-watermark>
</template>
```

## 图片水印

支持使用图片作为水印

```html
<template>
  <md-watermark
    image="/static/logo.png"
    width="100"
    height="40"
    opacity="0.3"
  >
    <view class="demo-watermark">
      <text>图片水印演示</text>
    </view>
  </md-watermark>
</template>
```

## 调整间距

可以调整水印之间的水平和垂直间距

```html
<template>
  <md-watermark
    content="minad-ui"
    gapX="80"
    gapY="60"
  >
    <view class="demo-watermark">
      <text>调整水印间距</text>
    </view>
  </md-watermark>
</template>
```

## 调整透明度

可以调整水印的透明度

```html
<template>
  <md-watermark
    content="minad-ui"
    opacity="0.1"
  >
    <view class="demo-watermark">
      <text>低透明度水印</text>
    </view>
  </md-watermark>
</template>
```

## 自定义字体样式

可以自定义水印的字体样式、粗细和字体

```html
<template>
  <md-watermark
    content="minad-ui"
    fontStyle="italic"
    fontWeight="bold"
    fontFamily="Arial"
  >
    <view class="demo-watermark">
      <text>自定义字体样式</text>
    </view>
  </md-watermark>
</template>
```

## 隐藏水印

可以通过 `show` 属性控制水印的显示和隐藏

```html
<template>
  <md-watermark
    content="minad-ui"
    :show="false"
  >
    <view class="demo-watermark">
      <text>水印已隐藏</text>
    </view>
  </md-watermark>
</template>
```

## Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| content | `string` | - | 水印文本内容 |
| image | `string` | - | 水印图片路径 |
| width | `number \| string` | - | 水印宽度 |
| height | `number \| string` | - | 水印高度 |
| gapX | `number` | 20 | 水印水平间距 |
| gapY | `number` | 20 | 水印垂直间距 |
| rotate | `number` | -15 | 水印旋转角度 |
| opacity | `number` | 0.15 | 水印透明度 |
| fontSize | `number \| string` | 14 | 水印字体大小 |
| color | `string` | `rgba(0, 0, 0, 0.15)` | 水印字体颜色 |
| fontStyle | `'normal' \| 'italic'` | `normal` | 水印字体样式 |
| fontWeight | `'normal' \| 'bold' \| 'bolder' \| 'lighter' \| number` | `normal` | 水印字体粗细 |
| fontFamily | `string` | `sans-serif` | 水印字体 |
| show | `boolean` | `true` | 是否显示水印 |
| customStyle | `Record<string, any>` | - | 自定义样式 |
| customClass | `string` | - | 自定义类名 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| load | 水印加载完成时触发 | - |

## Slots

| 插槽名 | 说明 |
|--------|------|
| default | 水印覆盖的内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| $md-watermark-opacity | `0.15` | 水印默认透明度 |
| $md-watermark-rotate | `-15deg` | 水印默认旋转角度 |
| $md-watermark-font-size | `14px` | 水印默认字体大小 |
| $md-watermark-color | `rgba(0, 0, 0, 0.15)` | 水印默认字体颜色 |
