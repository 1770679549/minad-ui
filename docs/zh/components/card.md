# Card 卡片

### 介绍

Card 卡片组件用于展示结构化信息，常用于内容的分组展示，提供清晰的视觉层次结构。

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
  <md-card title="卡片标题">
    卡片内容
  </md-card>
</template>

<script setup lang="ts">
import { MdCard } from 'minad-ui'
import 'minad-ui/lib/styles/card.css'
</script>
```

## 基本用法

### 基础卡片

包含标题和内容的基础卡片。

```html
<template>
  <md-card title="基础卡片">
    这是卡片的内容，用于展示结构化信息。
  </md-card>
</template>

<script setup lang="ts">
import { MdCard } from 'minad-ui'
</script>
```

### 带边框卡片

通过设置 `type` 属性为 `bordered`，显示带边框的卡片。

```html
<template>
  <md-card title="带边框卡片" type="bordered">
    这是带边框的卡片内容，用于展示结构化信息。
  </md-card>
</template>

<script setup lang="ts">
import { MdCard } from 'minad-ui'
</script>
```

### 带阴影卡片

通过设置 `type` 属性为 `shadow`，显示带阴影的卡片。

```html
<template>
  <md-card title="带阴影卡片" type="shadow">
    这是带阴影的卡片内容，用于展示结构化信息。
  </md-card>
</template>

<script setup lang="ts">
import { MdCard } from 'minad-ui'
</script>
```

### 自定义卡片

通过插槽自定义卡片的头部和底部内容。

```html
<template>
  <md-card type="shadow" :show-footer="true">
    <template #header>
      <view class="custom-header">
        <md-icon name="star" size="20" color="#FFB800"></md-icon>
        <text class="header-title">自定义头部</text>
      </view>
    </template>
    
    这是卡片的内容，用于展示结构化信息。
    
    <template #footer>
      <view class="custom-footer">
        <md-button type="primary" size="small">操作1</md-button>
        <md-button type="default" size="small">操作2</md-button>
      </view>
    </template>
  </md-card>
</template>

<script setup lang="ts">
import { MdCard, MdIcon, MdButton } from 'minad-ui'
</script>

<style scoped>
.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-title {
  font-size: 18px;
  font-weight: 700;
  color: #333;
}

.custom-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}
</style>
```

### 自定义样式

通过 `backgroundColor`、`borderRadius` 和 `shadow` 属性自定义卡片样式。

```html
<template>
  <md-card 
    title="自定义样式卡片"
    :background-color="'#F5F7FA'"
    :border-radius="12"
    :shadow="'0 4px 20px rgba(0, 0, 0, 0.08)'"
  >
    这是自定义样式的卡片内容，使用了自定义的背景色、圆角和阴影。
  </md-card>
</template>

<script setup lang="ts">
import { MdCard } from 'minad-ui'
</script>
```

### 无头部卡片

通过设置 `showHeader` 属性为 `false`，隐藏卡片头部。

```html
<template>
  <md-card show-header="false">
    这是没有头部的卡片内容，仅包含内容区域。
  </md-card>
</template>

<script setup lang="ts">
import { MdCard } from 'minad-ui'
</script>
```

## API

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | - | 卡片标题 |
| type | string | 'default' | 卡片类型，可选值：default、bordered、shadow |
| showHeader | boolean | true | 是否显示卡片头部 |
| showFooter | boolean | false | 是否显示卡片底部 |
| backgroundColor | string | - | 卡片背景色 |
| borderRadius | number \| string | - | 卡片圆角 |
| shadow | string | - | 卡片阴影 |
| customClass | string | - | 自定义类名 |
| customStyle | object | {} | 自定义样式 |

### Methods

| 方法名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| - | - | - | - |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | event | 卡片点击事件 |

### Slots

| 插槽名 | 参数 | 说明 |
|--------|------|------|
| default | - | 卡片内容 |
| header | - | 卡片头部 |
| footer | - | 卡片底部 |

## 样式变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| $md-color-bg | #ffffff | 背景色 |
| $md-color-border | #e4e7ed | 边框颜色 |
| $md-color-text | #303133 | 文本颜色 |
| $md-border-radius-base | 4px | 基础边框半径 |
| $md-spacing-lg | 16px | 大间距 |
| $md-size-large | 16px | 大尺寸字体大小 |
| $md-size-medium | 14px | 中尺寸字体大小 |
| $md-transition | all 0.3s ease | 过渡效果 |

## FAQ

### Q: 如何自定义卡片的头部样式？

A: 可以使用 `header` 插槽自定义卡片头部的内容和样式。

```html
<template>
  <md-card>
    <template #header>
      <view class="custom-header">
        <md-icon name="star"></md-icon>
        <text class="header-title">自定义头部</text>
      </view>
    </template>
    卡片内容
  </md-card>
</template>
```

### Q: 如何在卡片底部添加操作按钮？

A: 可以使用 `footer` 插槽在卡片底部添加操作按钮，并设置 `showFooter` 属性为 `true`。

```html
<template>
  <md-card :show-footer="true">
    卡片内容
    <template #footer>
      <view class="footer-actions">
        <md-button type="primary" size="small">确定</md-button>
        <md-button type="default" size="small">取消</md-button>
      </view>
    </template>
  </md-card>
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

1. 卡片组件的 `title` 属性和 `header` 插槽互斥，如果同时设置，`header` 插槽会覆盖 `title` 属性
2. 使用自定义背景色时，建议同时调整文字颜色以确保可读性
3. 卡片组件支持嵌套使用，可以在卡片内部放置其他卡片或组件
