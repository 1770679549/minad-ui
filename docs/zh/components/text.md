# Text 文本

用于展示文本内容，支持多种样式和对齐方式。

## 基本用法

使用 `type` 和 `size` 属性来定义 Text 的样式。

```vue
<template>
  <div class="text-demo">
    <md-text type="primary">主要文本</md-text>
    <md-text type="success">成功文本</md-text>
    <md-text type="warning">警告文本</md-text>
    <md-text type="danger">危险文本</md-text>
    <md-text type="info">信息文本</md-text>
    <md-text type="secondary">次要文本</md-text>
  </div>
  
  <div class="text-demo">
    <md-text size="large">大号文本</md-text>
    <md-text size="medium">中号文本</md-text>
    <md-text size="small">小号文本</md-text>
  </div>
</template>

<style scoped>
.text-demo {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
</style>
```

## 文本样式

通过 `bold`、`italic` 和 `underline` 属性来设置文本的样式。

```vue
<template>
  <div class="text-demo">
    <md-text bold>粗体文本</md-text>
    <md-text italic>斜体文本</md-text>
    <md-text underline>下划线文本</md-text>
    <md-text bold italic underline>组合样式文本</md-text>
  </div>
</template>
```

## 文本对齐

通过 `align` 属性来设置文本的对齐方式。

```vue
<template>
  <div class="text-demo-container">
    <md-text align="left">左对齐文本</md-text>
    <md-text align="center">居中对齐文本</md-text>
    <md-text align="right">右对齐文本</md-text>
  </div>
</template>

<style scoped>
.text-demo-container {
  margin-bottom: 20px;
}
</style>
```

## 行高和字间距

通过 `lineHeight` 和 `letterSpacing` 属性来设置文本的行高和字间距。

```vue
<template>
  <div class="text-demo">
    <md-text lineHeight="2">行高为2的文本</md-text>
    <md-text letterSpacing="2px">字间距为2px的文本</md-text>
    <md-text lineHeight="1.8" letterSpacing="1px">行高和字间距都设置的文本</md-text>
  </div>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 文本类型 | `string` | `primary`/`success`/`warning`/`danger`/`info`/`secondary` | `'secondary'` |
| size | 文本尺寸 | `string` | `large`/`medium`/`small` | `'medium'` |
| bold | 是否粗体 | `boolean` | - | `false` |
| italic | 是否斜体 | `boolean` | - | `false` |
| underline | 是否下划线 | `boolean` | - | `false` |
| align | 文本对齐方式 | `string` | `left`/`center`/`right` | `'left'` |
| lineHeight | 行高 | `string \| number` | - | - |
| letterSpacing | 字间距 | `string \| number` | - | - |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-primary | `#007aff` | 主要文本颜色 |
| $md-color-success | `#4cd964` | 成功文本颜色 |
| $md-color-warning | `#f0ad4e` | 警告文本颜色 |
| $md-color-danger | `#dd524d` | 危险文本颜色 |
| $md-color-info | `#909399` | 信息文本颜色 |
| $md-size-large | `20px` | 大尺寸文本字体大小 |
| $md-size-medium | `16px` | 中尺寸文本字体大小 |
| $md-size-small | `12px` | 小尺寸文本字体大小 |
| $md-transition | `all 0.3s ease` | 过渡动画 |