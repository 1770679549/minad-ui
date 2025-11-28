# Row 行容器

### 基本用法

```vue
<template>
  <md-row>
    <md-col span="12">
      <div class="demo-col">span: 12</div>
    </md-col>
    <md-col span="12">
      <div class="demo-col">span: 12</div>
    </md-col>
  </md-row>
</template>

<style scoped>
.demo-col {
  text-align: center;
  padding: 10px 0;
  background-color: #f0f0f0;
  margin: 5px 0;
}
</style>
```

### 列间距

```vue
<template>
  <md-row gutter="10">
    <md-col span="8">
      <div class="demo-col">span: 8</div>
    </md-col>
    <md-col span="8">
      <div class="demo-col">span: 8</div>
    </md-col>
    <md-col span="8">
      <div class="demo-col">span: 8</div>
    </md-col>
  </md-row>
</template>
```

### 对齐方式

```vue
<template>
  <!-- 顶部对齐 -->
  <md-row type="flex" justify="start">
    <md-col span="6">
      <div class="demo-col demo-col-tall">span: 6</div>
    </md-col>
    <md-col span="6">
      <div class="demo-col">span: 6</div>
    </md-col>
  </md-row>
  
  <!-- 居中对齐 -->
  <md-row type="flex" justify="center">
    <md-col span="6">
      <div class="demo-col demo-col-tall">span: 6</div>
    </md-col>
    <md-col span="6">
      <div class="demo-col">span: 6</div>
    </md-col>
  </md-row>
  
  <!-- 底部对齐 -->
  <md-row type="flex" justify="end">
    <md-col span="6">
      <div class="demo-col demo-col-tall">span: 6</div>
    </md-col>
    <md-col span="6">
      <div class="demo-col">span: 6</div>
    </md-col>
  </md-row>
</template>

<style scoped>
.demo-col-tall {
  height: 80px;
  line-height: 80px;
}
</style>
```

### 垂直对齐

```vue
<template>
  <!-- 顶部对齐 -->
  <md-row type="flex" align="top">
    <md-col span="6">
      <div class="demo-col demo-col-tall">span: 6</div>
    </md-col>
    <md-col span="6">
      <div class="demo-col">span: 6</div>
    </md-col>
  </md-row>
  
  <!-- 居中对齐 -->
  <md-row type="flex" align="middle">
    <md-col span="6">
      <div class="demo-col demo-col-tall">span: 6</div>
    </md-col>
    <md-col span="6">
      <div class="demo-col">span: 6</div>
    </md-col>
  </md-row>
  
  <!-- 底部对齐 -->
  <md-row type="flex" align="bottom">
    <md-col span="6">
      <div class="demo-col demo-col-tall">span: 6</div>
    </md-col>
    <md-col span="6">
      <div class="demo-col">span: 6</div>
    </md-col>
  </md-row>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| gutter | 列间距（单位：px） | `number` | - | `0` |
| type | 布局模式 | `string` | `flex` | - |
| justify | flex 布局下的水平排列方式 | `string` | `start`/`end`/`center`/`space-around`/`space-between` | `'start'` |
| align | flex 布局下的垂直排列方式 | `string` | `top`/`middle`/`bottom` | `'top'` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 行内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-gutter | `0` | 栅格间距 |
| $md-flex-grow | `1` | 弹性增长因子 |
| $md-flex-shrink | `1` | 弹性收缩因子 |
