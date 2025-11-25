# Link 链接

文本超链接。

## 基本用法

使用 `type`、`size` 和 `href` 属性来定义 Link 的样式和链接地址。

```vue
<template>
  <div class="link-demo">
    <md-link type="primary" href="#">主要链接</md-link>
    <md-link type="success" href="#">成功链接</md-link>
    <md-link type="warning" href="#">警告链接</md-link>
    <md-link type="danger" href="#">危险链接</md-link>
    <md-link type="info" href="#">信息链接</md-link>
  </div>
  
  <div class="link-demo">
    <md-link size="large" href="#">大号链接</md-link>
    <md-link size="medium" href="#">中号链接</md-link>
    <md-link size="small" href="#">小号链接</md-link>
  </div>
</template>

<style scoped>
.link-demo {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}
</style>
```

## 禁用状态

通过 `disabled` 属性来禁用链接。

```vue
<template>
  <div class="link-demo">
    <md-link type="primary" disabled href="#">禁用链接</md-link>
    <md-link type="success" disabled href="#">禁用链接</md-link>
  </div>
</template>
```

## 下划线

通过 `underline` 属性来设置链接是否显示下划线。

```vue
<template>
  <div class="link-demo">
    <md-link type="primary" href="#">默认链接（无下划线）</md-link>
    <md-link type="primary" underline href="#">带下划线的链接</md-link>
  </div>
</template>
```

## 外部链接

通过 `external` 属性来设置链接是否在新窗口打开。

```vue
<template>
  <div class="link-demo">
    <md-link type="primary" external href="#">外部链接</md-link>
  </div>
</template>
```

## 点击事件

使用 `@click` 事件来处理链接的点击。

```vue
<template>
  <md-link type="primary" @click="handleClick">点击链接</md-link>
</template>

<script setup>
const handleClick = () => {
  alert('链接被点击了！')
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 链接类型 | `string` | `primary`/`success`/`warning`/`danger`/`info` | `primary` |
| size | 链接尺寸 | `string` | `large`/`medium`/`small` | `medium` |
| href | 链接地址 | `string` | - | `''` |
| disabled | 是否禁用 | `boolean` | - | `false` |
| underline | 是否显示下划线 | `boolean` | - | `false` |
| external | 是否在新窗口打开 | `boolean` | - | `false` |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击事件 | `event: MouseEvent` |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-primary | `#007aff` | 主要链接颜色 |
| $md-color-success | `#4cd964` | 成功链接颜色 |
| $md-color-warning | `#f0ad4e` | 警告链接颜色 |
| $md-color-danger | `#dd524d` | 危险链接颜色 |
| $md-color-info | `#909399` | 信息链接颜色 |
| $md-size-large | `20px` | 大尺寸链接字体大小 |
| $md-size-medium | `16px` | 中尺寸链接字体大小 |
| $md-size-small | `12px` | 小尺寸链接字体大小 |
| $md-transition | `all 0.3s ease` | 过渡动画 |