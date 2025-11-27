# MdImage 图片

用于展示图片，支持多种图片模式、懒加载、加载状态和错误状态。

## 导入

```javascript
import { MdImage } from 'minad-ui'
```

## 基础用法

最简单的用法就是直接传入图片地址。

```vue
<template>
  <md-image src="https://example.com/image.jpg" />
</template>
```

## 图片模式

支持多种图片模式，用于控制图片的缩放和裁剪方式。

```vue
<template>
  <view>
    <h3>aspectFit (默认)</h3>
    <md-image src="https://example.com/image.jpg" mode="aspectFit" />
    
    <h3>aspectFill</h3>
    <md-image src="https://example.com/image.jpg" mode="aspectFill" />
    
    <h3>scaleToFill</h3>
    <md-image src="https://example.com/image.jpg" mode="scaleToFill" />
    
    <h3>widthFix</h3>
    <md-image src="https://example.com/image.jpg" mode="widthFix" />
    
    <h3>heightFix</h3>
    <md-image src="https://example.com/image.jpg" mode="heightFix" />
  </view>
</template>
```

## 懒加载

设置 `lazyLoad` 属性可以启用图片懒加载，提高页面加载性能。

```vue
<template>
  <md-image src="https://example.com/image.jpg" lazyLoad />
</template>
```

## 加载和错误状态

默认情况下，组件会显示加载动画和错误图标。你也可以自定义这些状态的内容。

```vue
<template>
  <md-image src="https://example.com/image.jpg">
    <template #loading>
      <view>加载中...</view>
    </template>
    <template #error>
      <view>图片加载失败</view>
    </template>
  </md-image>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | string | - |
| mode | 图片模式 | string | aspectFit |
| lazyLoad | 是否启用懒加载 | boolean | false |
| webp | 是否使用webp格式 | boolean | false |
| showLoading | 是否显示加载状态 | boolean | true |
| showError | 是否显示错误状态 | boolean | true |
| fallback | 加载失败时显示的默认图片 | string | - |

### mode 有效值

| 值 | 说明 |
| --- | --- |
| aspectFit | 保持纵横比，使图片完整显示在容器内 |
| aspectFill | 保持纵横比，裁剪图片以填满容器 |
| scaleToFill | 不保持纵横比，拉伸图片以填满容器 |
| widthFix | 宽度固定，高度自动变化，保持纵横比 |
| heightFix | 高度固定，宽度自动变化，保持纵横比 |
| top | 不缩放图片，只显示图片的顶部区域 |
| bottom | 不缩放图片，只显示图片的底部区域 |
| center | 不缩放图片，只显示图片的中间区域 |
| left | 不缩放图片，只显示图片的左侧区域 |
| right | 不缩放图片，只显示图片的右侧区域 |
| top left | 不缩放图片，只显示图片的左上角区域 |
| top right | 不缩放图片，只显示图片的右上角区域 |
| bottom left | 不缩放图片，只显示图片的左下角区域 |
| bottom right | 不缩放图片，只显示图片的右下角区域 |

## Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| load | 图片加载成功时触发 | - |
| error | 图片加载失败时触发 | - |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 图片上的自定义内容 |
| loading | 加载状态的自定义内容 |
| error | 错误状态的自定义内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-background-grey | #f5f5f5 | 图片容器的背景色 |
| $md-border-radius-sm | 4px | 图片容器的圆角 |
| $md-color-primary | #3498db | 加载动画的颜色 |
| $md-color-danger | #e74c3c | 错误图标的颜色 |
| $md-transition | all 0.3s ease | 过渡动画 |
