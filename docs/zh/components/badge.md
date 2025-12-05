# Badge 徽章

### 介绍

Badge 徽章组件用于在图标或文字右上角显示通知数字或状态标记，通常用于提示用户有新消息、未读通知等场景。

### 引入方式

#### 全局引入

```typescript
import { createSSRApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/lib/styles/minad-ui.css'

const app = createSSRApp(App)
app.use(MinadUI)
app.mount('#app')
```

#### 按需引入

```html
<template>
  <md-badge :value="5">
    <md-icon name="bell"></md-icon>
  </md-badge>
</template>

<script setup lang="ts">
import { MdBadge, MdIcon } from 'minad-ui'
import 'minad-ui/lib/styles/badge.css'
import 'minad-ui/lib/styles/icon.css'
</script>
```

## 基本用法

### 数字徽章

在图标或文字右上角显示数字或文本标记。

```html
<template>
  <view class="badge-container">
    <md-badge :value="5">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="100">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="'NEW'">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
  </view>
</template>

<script setup lang="ts">
import { MdBadge, MdIcon } from 'minad-ui'
</script>

<style scoped>
.badge-container {
  display: flex;
  gap: 32px;
  padding: 20px;
}
</style>
```

### 红点标记

通过设置 `dot` 属性，显示一个小红点，不显示具体数字。

```html
<template>
  <view class="badge-container">
    <md-badge dot>
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge dot>
      <view class="custom-element">自定义元素</view>
    </md-badge>
  </view>
</template>

<script setup lang="ts">
import { MdBadge, MdIcon } from 'minad-ui'
</script>

<style scoped>
.badge-container {
  display: flex;
  gap: 32px;
  padding: 20px;
  align-items: center;
}

.custom-element {
  width: 100px;
  height: 32px;
  background-color: #f0f0f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>
```

### 最大值限制

通过设置 `max` 属性，限制显示的最大数字，超过最大值会显示 `{max}+`。

```html
<template>
  <view class="badge-container">
    <md-badge :value="99" :max="99">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="100" :max="99">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="200" :max="199">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
  </view>
</template>

<script setup lang="ts">
import { MdBadge, MdIcon } from 'minad-ui'
</script>

<style scoped>
.badge-container {
  display: flex;
  gap: 32px;
  padding: 20px;
}
</style>
```

### 自定义颜色

通过设置 `type` 属性改变徽章的颜色，也可以通过 `color` 属性自定义颜色。

```html
<template>
  <view class="badge-container">
    <md-badge :value="5" type="primary">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="5" type="success">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="5" type="warning">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="5" type="info">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="5" color="#722ED1">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
  </view>
</template>

<script setup lang="ts">
import { MdBadge, MdIcon } from 'minad-ui'
</script>

<style scoped>
.badge-container {
  display: flex;
  gap: 24px;
  padding: 20px;
}
</style>
```

### 隐藏徽章

通过设置 `hidden` 属性，可以隐藏徽章。

```html
<template>
  <view class="badge-container">
    <md-badge :value="5">
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
    <md-badge :value="5" hidden>
      <md-icon name="bell" size="32"></md-icon>
    </md-badge>
  </view>
</template>

<script setup lang="ts">
import { MdBadge, MdIcon } from 'minad-ui'
</script>

<style scoped>
.badge-container {
  display: flex;
  gap: 32px;
  padding: 20px;
}
</style>
```

## API

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | number \| string | - | 徽章内容 |
| max | number | 99 | 最大值，超过最大值会显示 '{max}+'，仅当 value 为数字时有效 |
| dot | boolean | false | 是否显示为红点 |
| hidden | boolean | false | 是否隐藏徽章 |
| type | string | 'danger' | 徽章类型，可选值：primary、success、warning、danger、info |
| color | string | - | 自定义徽章颜色 |
| customClass | string | - | 自定义类名 |
| customStyle | object | {} | 自定义样式 |

### Methods

| 方法名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| - | - | - | - |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| - | - | - |

### Slots

| 插槽名 | 参数 | 说明 |
|--------|------|------|
| default | - | 徽章包裹的内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| $md-color-primary | #409EFF | 主要颜色 |
| $md-color-success | #67C23A | 成功颜色 |
| $md-color-warning | #E6A23C | 警告颜色 |
| $md-color-danger | #F56C6C | 危险颜色 |
| $md-color-info | #909399 | 信息颜色 |
| $md-border-radius-circle | 50% | 圆形边框半径 |
| $md-size-xs | 12px | 超小尺寸字体大小 |

## FAQ

### Q: 如何在非图标元素上使用徽章？

A: Badge 组件可以包裹任何元素，不仅仅是图标，例如文字、按钮等。

```html
<template>
  <md-badge :value="5">
    <md-button type="primary">按钮</md-button>
  </md-badge>
</template>
```

### Q: 如何自定义徽章的大小和位置？

A: 可以通过 `customStyle` 属性自定义徽章的样式，包括大小、位置等。

```html
<template>
  <md-badge :value="5" :custom-style="{ fontSize: '10px', right: '-8px', top: '-4px' }">
    <md-icon name="bell" size="32"></md-icon>
  </md-badge>
</template>
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | >= 64 |
| Firefox | >= 60 |
| Safari | >= 12 |
| Edge | >= 79 |

## 注意事项

1. 当 `value` 为字符串时，`max` 属性不生效
2. 当 `dot` 为 `true` 时，`value` 和 `max` 属性均不生效
3. 徽章组件会自动根据内容调整大小，但建议内容不要过长，以保证视觉效果
