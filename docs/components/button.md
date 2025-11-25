# Button 按钮

常用的操作按钮。

## 基本用法

使用 `type`、`size`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。

```vue
<template>
  <div class="button-demo">
    <md-button type="primary">主要按钮</md-button>
    <md-button type="success">成功按钮</md-button>
    <md-button type="warning">警告按钮</md-button>
    <md-button type="danger">危险按钮</md-button>
    <md-button type="info">信息按钮</md-button>
  </div>
  
  <div class="button-demo">
    <md-button size="large">大号按钮</md-button>
    <md-button size="medium">中号按钮</md-button>
    <md-button size="small">小号按钮</md-button>
  </div>
</template>

<style scoped>
.button-demo {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}
</style>
```

## 禁用状态

通过 `disabled` 属性来禁用按钮。

```vue
<template>
  <div class="button-demo">
    <md-button type="primary" disabled>主要按钮</md-button>
    <md-button type="success" disabled>成功按钮</md-button>
    <md-button type="warning" disabled>警告按钮</md-button>
    <md-button type="danger" disabled>危险按钮</md-button>
    <md-button type="info" disabled>信息按钮</md-button>
  </div>
</template>
```

## 加载状态

通过 `loading` 属性来设置按钮的加载状态。

```vue
<template>
  <div class="button-demo">
    <md-button type="primary" loading>加载中</md-button>
    <md-button type="success" loading>加载中</md-button>
  </div>
</template>
```

## 点击事件

使用 `@click` 事件来处理按钮的点击。

```vue
<template>
  <md-button type="primary" @click="handleClick">点击按钮</md-button>
</template>

<script setup>
const handleClick = () => {
  alert('按钮被点击了！')
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` |
| size | 按钮尺寸 | `'large' \| 'medium' \| 'small'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击事件 | `event: MouseEvent` |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| --md-color-primary | `#007aff` | 主要按钮颜色 |
| --md-color-success | `#4cd964` | 成功按钮颜色 |
| --md-color-warning | `#f0ad4e` | 警告按钮颜色 |
| --md-color-danger | `#dd524d` | 危险按钮颜色 |
| --md-color-info | `#909399` | 信息按钮颜色 |
