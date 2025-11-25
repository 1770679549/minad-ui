# Icon 图标

用于展示各种图标，支持自定义大小、颜色、旋转等效果。

## 基本用法

通过 `name` 属性指定图标名称。

```vue
<template>
  <md-icon name="check"></md-icon>
  <md-icon name="close"></md-icon>
  <md-icon name="search"></md-icon>
  <md-icon name="star"></md-icon>
</template>
```

## 图标尺寸

通过 `size` 属性设置图标大小，支持 `large`、`medium`、`small` 或数字值。

```vue
<template>
  <md-icon name="check" size="large"></md-icon>
  <md-icon name="check" size="medium"></md-icon>
  <md-icon name="check" size="small"></md-icon>
  <md-icon name="check" size="40"></md-icon>
</template>
```

## 图标颜色

通过 `color` 属性设置图标颜色。

```vue
<template>
  <md-icon name="check" color="#409eff"></md-icon>
  <md-icon name="check" color="#67c23a"></md-icon>
  <md-icon name="check" color="#e6a23c"></md-icon>
  <md-icon name="check" color="#f56c6c"></md-icon>
</template>
```



## 旋转和动画

通过 `rotate` 属性设置旋转角度，通过 `spin` 属性开启旋转动画。

```vue
<template>
  <md-icon name="refresh" rotate="45"></md-icon>
  <md-icon name="refresh" spin></md-icon>
</template>
```

## 加载状态

通过 `loading` 属性开启加载状态，显示旋转动画。

```vue
<template>
  <md-icon name="loading" loading></md-icon>
</template>
```

## 文本图标

如果 `name` 属性不是图标名称，则会将其作为文本图标显示。组件内部会自动为图标名称添加 `md-icon-` 前缀，因此用户只需传入前缀后面的部分即可。

```vue
<template>
  <md-icon name="A" size="large" color="#409eff"></md-icon>
  <md-icon name="B" size="medium" color="#67c23a"></md-icon>
  <md-icon name="C" size="small" color="#e6a23c"></md-icon>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 图标名称或文本 | string | - | - |
| size | 图标尺寸 | string/number | - | `16px` |
| color | 图标颜色 | string | - | `#606266` |
| fontSize | 自定义字体大小 | string/number | - | - |
| rotate | 旋转角度 | number | - | `0` |
| spin | 是否旋转动画 | boolean | - | false |
| loading | 是否加载状态 | boolean | - | false |
| center | 是否居中 | boolean | - | false |
| customStyle | 自定义样式 | object | - | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义图标内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-icon-size | `16px` | 图标默认尺寸 |
| $md-icon-color | `#606266` | 图标默认颜色 |
| $md-transition | `all 0.3s ease` | 图标过渡动画 |
