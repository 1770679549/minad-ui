# Tag 标签

用于标记和分类的标签组件

## 快速开始

### 导入组件

```javascript
import { MdTag } from 'minad-ui'
```

### 基础用法

```html
<template>
  <md-tag>默认标签</md-tag>
</template>
```

## 类型

支持多种内置类型的标签

```html
<template>
  <md-tag type="primary">主要标签</md-tag>
  <md-tag type="success">成功标签</md-tag>
  <md-tag type="warning">警告标签</md-tag>
  <md-tag type="danger">危险标签</md-tag>
  <md-tag type="info">信息标签</md-tag>
</template>
```

## 尺寸

支持三种不同尺寸的标签

```html
<template>
  <md-tag size="large">大型标签</md-tag>
  <md-tag size="medium">中型标签</md-tag>
  <md-tag size="small">小型标签</md-tag>
</template>
```

## 自定义颜色

可以自定义标签的文本颜色和背景颜色

```html
<template>
  <md-tag color="#FFFFFF" bgColor="#1989fa">蓝色标签</md-tag>
  <md-tag color="#FFFFFF" bgColor="#52c41a">绿色标签</md-tag>
  <md-tag color="#FFFFFF" bgColor="#fa8c16">橙色标签</md-tag>
  <md-tag color="#FFFFFF" bgColor="#f5222d">红色标签</md-tag>
</template>
```

## 可关闭

设置 `closable` 属性可以让标签可关闭

```html
<template>
  <md-tag 
    v-for="(tag, index) in tags" 
    :key="index"
    :closable="true"
    @close="handleClose(index)"
  >
    {{ tag }}
  </md-tag>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref(['标签一', '标签二', '标签三'])

const handleClose = (index) => {
  tags.value.splice(index, 1)
}
</script>
```

## 禁用状态

设置 `disabled` 属性可以禁用标签

```html
<template>
  <md-tag type="primary" :disabled="true">禁用标签</md-tag>
</template>
```

## 圆角

设置 `round` 属性可以创建圆角标签

```html
<template>
  <md-tag type="primary" :round="true">圆角标签</md-tag>
</template>
```

## Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | - | 标签类型 |
| size | `'large' \| 'medium' \| 'small'` | `'medium'` | 标签尺寸 |
| color | `string` | - | 标签文本颜色 |
| bgColor | `string` | - | 标签背景颜色 |
| closable | `boolean` | `false` | 是否可关闭 |
| disabled | `boolean` | `false` | 是否禁用 |
| round | `boolean` | `false` | 是否为圆角 |
| customStyle | `Record<string, any>` | - | 自定义样式 |
| customClass | `string` | - | 自定义类名 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击标签时触发 | event: 事件对象 |
| close | 关闭标签时触发 | event: 事件对象 |

## Slots

| 插槽名 | 说明 |
|--------|------|
| default | 标签内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| $md-tag-padding | `4px 8px` | 标签内边距 |
| $md-tag-font-size | `12px` | 标签字体大小 |
| $md-tag-border-radius | `2px` | 标签圆角 |
| $md-tag-primary-color | `$md-color-primary` | 主要标签颜色 |
| $md-tag-success-color | `$md-color-success` | 成功标签颜色 |
| $md-tag-warning-color | `$md-color-warning` | 警告标签颜色 |
| $md-tag-danger-color | `$md-color-danger` | 危险标签颜色 |
| $md-tag-info-color | `$md-color-info` | 信息标签颜色 |
