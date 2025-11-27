# MdDivider 分隔线

## 介绍

分隔线组件，用于页面中分隔不同内容区块，支持自定义样式、位置以及添加图片和标签功能。

## 导入

```javascript
import { MdDivider } from '@/components'
```

## 基础用法

### 默认分隔线

```vue
<template>
  <md-divider></md-divider>
</template>
```

### 虚线分隔线

```vue
<template>
  <md-divider dashed></md-divider>
</template>
```

## 带图片的分隔线

```vue
<template>
  <md-divider
    image="https://example.com/image.png"
    image-alt="示例图片"
    image-size="32"
  ></md-divider>
</template>
```

## 带标签的分隔线

```vue
<template>
  <md-divider tag="分隔标签"></md-divider>
</template>
```

## 图片和标签组合

```vue
<template>
  <md-divider
    image="https://example.com/image.png"
    image-alt="示例图片"
    image-size="24"
    tag="组合示例"
  ></md-divider>
</template>
```

## 自定义位置

### 左侧

```vue
<template>
  <md-divider
    position="left"
    tag="左侧标签"
  ></md-divider>
</template>
```

### 居中

```vue
<template>
  <md-divider
    position="center"
    tag="居中标签"
  ></md-divider>
</template>
```

### 右侧

```vue
<template>
  <md-divider
    position="right"
    tag="右侧标签"
  ></md-divider>
</template>
```

## 自定义类型

```vue
<template>
  <md-divider type="primary" tag="主要类型"></md-divider>
  <md-divider type="success" tag="成功类型"></md-divider>
  <md-divider type="warning" tag="警告类型"></md-divider>
  <md-divider type="danger" tag="危险类型"></md-divider>
  <md-divider type="info" tag="信息类型"></md-divider>
  <md-divider type="default" tag="默认类型"></md-divider>
</template>
```

## 自定义标签尺寸

```vue
<template>
  <md-divider tag="大尺寸" tag-size="large"></md-divider>
  <md-divider tag="中尺寸" tag-size="medium"></md-divider>
  <md-divider tag="小尺寸" tag-size="small"></md-divider>
</template>
```

## API

### Props

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `primary` \| `success` \| `warning` \| `danger` \| `info` \| `default` | `default` | 分隔线类型 |
| position | `left` \| `center` \| `right` | `center` | 图片/标签的位置 |
| dashed | boolean | `false` | 是否为虚线 |
| image | string | - | 图片地址 |
| image-alt | string | - | 图片alt属性 |
| tag | string | - | 标签文本 |
| image-size | number | `24` | 图片尺寸（px） |
| tag-size | `large` \| `medium` \| `small` | `medium` | 标签尺寸 |

### 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-border | `#e4e7ed` | 分隔线颜色 |
| $md-spacing-md | `16px` | 上下间距 |
| $md-spacing-sm | `8px` | 内容间距 |
| $md-size-large | `18px` | 大尺寸字体 |
| $md-size-medium | `14px` | 中尺寸字体 |
| $md-size-small | `12px` | 小尺寸字体 |

## 兼容性

支持微信小程序、H5和App平台。