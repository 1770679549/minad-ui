# MdEmpty 空状态组件

当数据为空时显示的占位组件，用于友好提示用户当前状态。

## 基础用法

```html
<template>
  <md-empty />
</template>

<script setup>
import { MdEmpty } from 'minad-ui'
</script>
```

## 自定义标题

```html
<template>
  <md-empty title="暂无数据" />
</template>

<script setup>
import { MdEmpty } from 'minad-ui'
</script>
```

## 自定义描述

```html
<template>
  <md-empty 
    title="暂无数据"
    description="暂无相关内容，请稍后重试"
  />
</template>

<script setup>
import { MdEmpty } from 'minad-ui'
</script>
```

## 自定义图标

```html
<template>
  <md-empty 
    title="暂无数据"
    icon="info"
  />
</template>

<script setup>
import { MdEmpty } from 'minad-ui'
</script>
```

## 自定义图片

```html
<template>
  <md-empty 
    title="暂无数据"
    image="https://example.com/empty.png"
  />
</template>

<script setup>
import { MdEmpty } from 'minad-ui'
</script>
```

## 添加操作按钮

```html
<template>
  <md-empty 
    title="暂无数据"
    description="暂无相关内容，请点击按钮刷新"
    button-text="刷新"
    @button-click="handleRefresh"
  />
</template>

<script setup>
import { MdEmpty } from 'minad-ui'

const handleRefresh = () => {
  console.log('刷新数据')
}
</script>
```

## 自定义按钮类型

```html
<template>
  <md-empty 
    title="暂无数据"
    button-text="重试"
    button-type="danger"
    @button-click="handleRetry"
  />
</template>

<script setup>
import { MdEmpty } from 'minad-ui'

const handleRetry = () => {
  console.log('重试操作')
}
</script>
```

## 完整自定义内容

```html
<template>
  <md-empty>
    <template #image>
      <md-icon name="search" size="80" />
    </template>
    <template #title>
      <text style="color: #606266;">未找到相关结果</text>
    </template>
    <template #description>
      <text style="color: #909399;">请调整搜索条件后重试</text>
    </template>
    <template #action>
      <md-button type="primary" size="small">调整搜索条件</md-button>
      <md-button type="default" size="small" style="margin-left: 12px;">返回</md-button>
    </template>
  </md-empty>
</template>

<script setup>
import { MdEmpty, MdIcon, MdButton } from 'minad-ui'
</script>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| image | `string` | - | 自定义图片地址 |
| icon | `string` | `'picture-outline'` | 图标名称 |
| icon-size | `number \| string` | `64` | 图标大小 |
| title | `string` | - | 标题文本 |
| description | `string` | - | 描述文本 |
| button-text | `string` | - | 按钮文本 |
| button-type | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | 按钮类型 |
| button-size | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| show-button | `boolean` | `true` | 是否显示按钮 |
| custom-class | `string` | - | 自定义类名 |

## Events

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| buttonClick | - | 按钮点击事件 |

## Slots

| 名称 | 说明 |
| --- | --- |
| image | 自定义图片或图标 |
| title | 自定义标题 |
| description | 自定义描述 |
| action | 自定义操作按钮 |
| default | 默认插槽，用于自定义完整内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-empty-padding | `$md-padding-xxl $md-padding-md` | 组件内边距 |
| $md-empty-image-width | `120px` | 图片宽度 |
| $md-empty-image-height | `120px` | 图片高度 |
| $md-empty-icon-color | `$md-text-color-placeholder` | 图标颜色 |
| $md-empty-title-font-size | `$md-font-size-large` | 标题字体大小 |
| $md-empty-title-color | `$md-text-color-primary` | 标题颜色 |
| $md-empty-description-font-size | `$md-font-size-medium` | 描述字体大小 |
| $md-empty-description-color | `$md-text-color-placeholder` | 描述颜色 |
| $md-empty-description-line-height | `$md-line-height-medium` | 描述行高 |
| $md-empty-content-gap | `$md-padding-sm` | 内容间距 |
