# Row & Col 栅格布局

### 介绍

栅格布局是一种灵活的页面布局系统，基于24列网格设计，通过Row（行）和Col（列）组件的组合，可以轻松实现各种响应式布局。

### 引入

在页面中引入组件，详细介绍见[快速上手](#/zh/guide/quickstart)

```javascript
// 全局引入
import { createApp } from 'vue'
import App from './App.vue'
import MinadUI from 'minad-ui'
import 'minad-ui/dist/style.css'

const app = createApp(App)
app.use(MinadUI)
app.mount('#app')
```

```javascript
// 按需引入
import { MdRow, MdCol } from 'minad-ui'
```

## 基本用法

### 基础布局

使用Row和Col组件创建基础的栅格布局，通过`span`属性控制列的宽度。

```vue
<template>
  <md-row>
    <md-col :span="12"><div class="demo-col">col-12</div></md-col>
    <md-col :span="12"><div class="demo-col">col-12</div></md-col>
  </md-row>
  <md-row>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
  </md-row>
  <md-row>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
  </md-row>
</template>

<style scoped>
.demo-col {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #409eff;
  color: white;
  border-radius: 4px;
}

md-row {
  margin-bottom: 16px;
}
</style>
```

### 设置间距

通过`gutter`属性设置列之间的间距。

```vue
<template>
  <md-row :gutter="16">
    <md-col :span="12"><div class="demo-col">col-12</div></md-col>
    <md-col :span="12"><div class="demo-col">col-12</div></md-col>
  </md-row>
  <md-row :gutter="[16, 24]">
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
  </md-row>
</template>

<style scoped>
.demo-col {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #67c23a;
  color: white;
  border-radius: 4px;
}

md-row {
  margin-bottom: 16px;
}
</style>
```

### 水平对齐

通过`justify`属性设置列的水平对齐方式。

```vue
<template>
  <md-row justify="start">
    <md-col :span="6"><div class="demo-col">start</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
  </md-row>
  <md-row justify="center">
    <md-col :span="6"><div class="demo-col">center</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
  </md-row>
  <md-row justify="end">
    <md-col :span="6"><div class="demo-col">end</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
  </md-row>
  <md-row justify="space-between">
    <md-col :span="6"><div class="demo-col">space-between</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
  </md-row>
  <md-row justify="space-around">
    <md-col :span="6"><div class="demo-col">space-around</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
  </md-row>
  <md-row justify="space-evenly">
    <md-col :span="6"><div class="demo-col">space-evenly</div></md-col>
    <md-col :span="6"><div class="demo-col">col-6</div></md-col>
  </md-row>
</template>

<style scoped>
.demo-col {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e6a23c;
  color: white;
  border-radius: 4px;
}

md-row {
  margin-bottom: 16px;
}
</style>
```

### 垂直对齐

通过`align`属性设置列的垂直对齐方式。

```vue
<template>
  <md-row align="top" style="height: 100px; background-color: #f5f7fa;">
    <md-col :span="8"><div class="demo-col">top</div></md-col>
    <md-col :span="8"><div class="demo-col" style="height: 60px; line-height: 60px;">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col" style="height: 80px; line-height: 80px;">col-8</div></md-col>
  </md-row>
  <md-row align="middle" style="height: 100px; background-color: #f5f7fa; margin: 16px 0;">
    <md-col :span="8"><div class="demo-col">middle</div></md-col>
    <md-col :span="8"><div class="demo-col" style="height: 60px; line-height: 60px;">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col" style="height: 80px; line-height: 80px;">col-8</div></md-col>
  </md-row>
  <md-row align="bottom" style="height: 100px; background-color: #f5f7fa;">
    <md-col :span="8"><div class="demo-col">bottom</div></md-col>
    <md-col :span="8"><div class="demo-col" style="height: 60px; line-height: 60px;">col-8</div></md-col>
    <md-col :span="8"><div class="demo-col" style="height: 80px; line-height: 80px;">col-8</div></md-col>
  </md-row>
</template>

<style scoped>
.demo-col {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #f56c6c;
  color: white;
  border-radius: 4px;
}
</style>
```

### 列偏移

通过`offset`属性设置列的左侧偏移量。

```vue
<template>
  <md-row>
    <md-col :span="8"><div class="demo-col">col-8</div></md-col>
    <md-col :span="8" :offset="8"><div class="demo-col">col-8 offset-8</div></md-col>
  </md-row>
  <md-row style="margin-top: 16px;">
    <md-col :span="6" :offset="6"><div class="demo-col">col-6 offset-6</div></md-col>
    <md-col :span="6" :offset="6"><div class="demo-col">col-6 offset-6</div></md-col>
  </md-row>
  <md-row style="margin-top: 16px;">
    <md-col :span="12" :offset="6"><div class="demo-col">col-12 offset-6</div></md-col>
  </md-row>
</template>

<style scoped>
.demo-col {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #909399;
  color: white;
  border-radius: 4px;
}
</style>
```

### 列排序

通过`push`和`pull`属性可以改变列的显示顺序。

```vue
<template>
  <md-row>
    <md-col :span="12" :push="12"><div class="demo-col">col-12 push-12</div></md-col>
    <md-col :span="12" :pull="12"><div class="demo-col">col-12 pull-12</div></md-col>
  </md-row>
  <md-row style="margin-top: 16px;">
    <md-col :span="8" :push="4"><div class="demo-col">col-8 push-4</div></md-col>
    <md-col :span="4" :pull="4"><div class="demo-col">col-4 pull-4</div></md-col>
    <md-col :span="12"><div class="demo-col">col-12</div></md-col>
  </md-row>
</template>

<style scoped>
.demo-col {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #722ed1;
  color: white;
  border-radius: 4px;
}
</style>
```

### 嵌套布局

可以在Col组件内部嵌套Row组件，实现复杂的布局结构。

```vue
<template>
  <md-row :gutter="16">
    <md-col :span="12">
      <div class="demo-col">col-12</div>
      <md-row :gutter="8" style="margin-top: 8px;">
        <md-col :span="6"><div class="demo-col nested">col-6</div></md-col>
        <md-col :span="6"><div class="demo-col nested">col-6</div></md-col>
        <md-col :span="6"><div class="demo-col nested">col-6</div></md-col>
        <md-col :span="6"><div class="demo-col nested">col-6</div></md-col>
      </md-row>
    </md-col>
    <md-col :span="12">
      <md-row :gutter="8">
        <md-col :span="8"><div class="demo-col nested">col-8</div></md-col>
        <md-col :span="8"><div class="demo-col nested">col-8</div></md-col>
        <md-col :span="8"><div class="demo-col nested">col-8</div></md-col>
      </md-row>
      <div class="demo-col" style="margin-top: 8px;">col-12</div>
    </md-col>
  </md-row>
</template>

<style scoped>
.demo-col {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #13c2c2;
  color: white;
  border-radius: 4px;
}

.demo-col.nested {
  height: 40px;
  line-height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列之间的间距 | `number` | - |
| align | 垂直对齐方式 | `'top' \| 'middle' \| 'bottom'` | - |
| justify | 水平排列方式 | `'start' \| 'end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | - |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 列宽，0-24之间的整数 | `number` | - |
| offset | 左侧偏移量 | `number` | - |
| push | 左侧推入 | `number` | - |
| pull | 右侧拉出 | `number` | - |
| align | 垂直对齐方式 | `'top' \| 'middle' \| 'bottom'` | - |

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| $grid-gutter-width | 栅格间距默认值 | `8px` |
| $grid-columns | 栅格总列数 | `24` |

## FAQ

### Q: 栅格系统的总列数是多少？

A: 栅格系统基于24列设计，`span`属性的值应在0-24之间。

### Q: 如何设置响应式布局？

A: 目前组件暂不支持断点配置，您可以结合媒体查询和动态绑定`span`属性来实现响应式布局。

### Q: gutter属性的值是如何应用的？

A: `gutter`属性设置的是列之间的间距，组件会自动将间距的一半作为左右内边距应用到每一列上。

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 80+ |

## 注意事项

1. `span`属性的值必须在0-24之间
2. `offset`、`push`、`pull`属性的值也应在0-24之间
3. 当`span`为0时，列会被隐藏
4. 嵌套布局时，内层Row组件的宽度会受到外层Col组件的限制
5. 使用`gutter`属性时，会自动在Row组件上添加负边距，请注意容器的溢出问题