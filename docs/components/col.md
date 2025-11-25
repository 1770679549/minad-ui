# Col 列容器

### 基本用法

```vue
<template>
  <md-row>
    <md-col span="24">
      <div class="demo-col">span: 24</div>
    </md-col>
  </md-row>
  <md-row>
    <md-col span="12">
      <div class="demo-col">span: 12</div>
    </md-col>
    <md-col span="12">
      <div class="demo-col">span: 12</div>
    </md-col>
  </md-row>
  <md-row>
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

<style scoped>
.demo-col {
  text-align: center;
  padding: 10px 0;
  background-color: #f0f0f0;
  margin: 5px 0;
}
</style>
```

### 列偏移

```vue
<template>
  <md-row>
    <md-col span="8">
      <div class="demo-col">span: 8</div>
    </md-col>
    <md-col span="8" offset="8">
      <div class="demo-col">span: 8, offset: 8</div>
    </md-col>
  </md-row>
  <md-row>
    <md-col span="8" offset="4">
      <div class="demo-col">span: 8, offset: 4</div>
    </md-col>
    <md-col span="8" offset="4">
      <div class="demo-col">span: 8, offset: 4</div>
    </md-col>
  </md-row>
</template>
```

### 列排序

```vue
<template>
  <md-row>
    <md-col span="8" order="3">
      <div class="demo-col">span: 8, order: 3</div>
    </md-col>
    <md-col span="8" order="2">
      <div class="demo-col">span: 8, order: 2</div>
    </md-col>
    <md-col span="8" order="1">
      <div class="demo-col">span: 8, order: 1</div>
    </md-col>
  </md-row>
</template>
```

### 响应式布局

```vue
<template>
  <md-row>
    <md-col xs="24" sm="12" md="8" lg="6">
      <div class="demo-col">响应式列</div>
    </md-col>
    <md-col xs="24" sm="12" md="8" lg="6">
      <div class="demo-col">响应式列</div>
    </md-col>
    <md-col xs="24" sm="12" md="8" lg="6">
      <div class="demo-col">响应式列</div>
    </md-col>
    <md-col xs="24" sm="12" md="8" lg="6">
      <div class="demo-col">响应式列</div>
    </md-col>
  </md-row>
</template>
```

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|--------|------|
| span | number | - | 列的宽度（0-24） |
| offset | number | 0 | 列的偏移量（0-24） |
| order | number | 0 | 列的排序 |
| xs | number/object | - | 超小屏幕（<576px）的列宽或配置对象 |
| sm | number/object | - | 小屏幕（≥576px）的列宽或配置对象 |
| md | number/object | - | 中等屏幕（≥768px）的列宽或配置对象 |
| lg | number/object | - | 大屏幕（≥992px）的列宽或配置对象 |

### 响应式配置对象

当 xs、sm、md、lg 属性为对象时，可以包含以下属性：

| 属性名 | 类型 | 说明 |
|-------|------|------|
| span | number | 列的宽度（0-24） |
| offset | number | 列的偏移量（0-24） |
| order | number | 列的排序 |

### 示例

```vue
<template>
  <md-row>
    <md-col :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 6 }">
      <div class="demo-col">响应式列</div>
    </md-col>
    <md-col :xs="{ span: 12, offset: 0 }" :sm="{ span: 6, offset: 6 }" :md="{ span: 4, offset: 4 }" :lg="{ span: 3, offset: 3 }">
      <div class="demo-col">复杂响应式列</div>
    </md-col>
  </md-row>
</template>
```

### 插槽

| 插槽名 | 说明 |
|-------|------|
| default | 列内容 |
