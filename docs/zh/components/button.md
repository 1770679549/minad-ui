# Button 按钮

常用的操作按钮，支持多种类型、尺寸和状态。

## 引入方式

# Button 组件

这是一个按钮组件的示例。

<DemoContainer>

<template #default>
   <md-button type="primary">主要按钮</md-button>
</template>

<template #code>

```vue
<template>
     <md-button type="primary">主要按钮</md-button>
</template>
```

</template>

</DemoContainer>

### 全局引入

```vue
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/lib/style.css'

const app = createApp()
app.use(MinadUI)
```

### 按需引入

```vue
import { MdButton } from 'minad-ui'
import 'minad-ui/lib/components/button/style.css'

app.component('MdButton', MdButton)
```

## 基本用法

使用 `type`、`size` 属性来定义 Button 的样式。

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

## 幽灵按钮

使用 `plain` 属性创建幽灵按钮，幽灵按钮的背景色为透明，文字颜色继承自父元素。

```vue
<template>
  <div class="button-demo">
    <md-button type="primary" plain>主要幽灵按钮</md-button>
    <md-button type="success" plain>成功幽灵按钮</md-button>
    <md-button type="warning" plain>警告幽灵按钮</md-button>
    <md-button type="danger" plain>危险幽灵按钮</md-button>
    <md-button type="info" plain>信息幽灵按钮</md-button>
  </div>
</template>
```

## 圆角按钮

使用 `round` 属性创建圆角按钮。

```vue
<template>
  <div class="button-demo">
    <md-button type="primary" round>主要圆角按钮</md-button>
    <md-button type="success" round>成功圆角按钮</md-button>
    <md-button type="warning" round>警告圆角按钮</md-button>
    <md-button type="danger" round>危险圆角按钮</md-button>
    <md-button type="info" round>信息圆角按钮</md-button>
  </div>
</template>
```

## 圆形按钮

使用 `circle` 属性创建圆形按钮，通常用于图标按钮。

```vue
<template>
  <div class="button-demo">
    <md-button type="primary" circle>➕</md-button>
    <md-button type="success" circle>➖</md-button>
    <md-button type="warning" circle>✏️</md-button>
    <md-button type="danger" circle>🗑️</md-button>
    <md-button type="info" circle>ℹ️</md-button>
  </div>
</template>
```

## 图标按钮

在按钮中嵌套图标组件，创建图标按钮。

```vue
<template>
  <div class="button-demo">
    <md-button type="primary">
      <md-icon name="search"></md-icon>
      搜索
    </md-button>
    <md-button type="success">
      <md-icon name="plus"></md-icon>
      添加
    </md-button>
    <md-button type="warning">
      <md-icon name="edit"></md-icon>
      编辑
    </md-button>
    <md-button type="danger">
      <md-icon name="delete"></md-icon>
      删除
    </md-button>
  </div>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 按钮类型 | `string` | `primary`/`success`/`warning`/`danger`/`info` | `primary` |
| size | 按钮尺寸 | `string` | `large`/`medium`/`small` | `medium` |
| disabled | 是否禁用 | `boolean` | - | `false` |
| loading | 是否加载中 | `boolean` | - | `false` |
| plain | 是否为幽灵按钮 | `boolean` | - | `false` |
| round | 是否为圆角按钮 | `boolean` | - | `false` |
| circle | 是否为圆形按钮 | `boolean` | - | `false` |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击事件 | `event: MouseEvent` |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-primary | `#007aff` | 主要按钮颜色 |
| $md-color-success | `#4cd964` | 成功按钮颜色 |
| $md-color-warning | `#f0ad4e` | 警告按钮颜色 |
| $md-color-danger | `#dd524d` | 危险按钮颜色 |
| $md-color-info | `#909399` | 信息按钮颜色 |
| $md-size-large | `20px` | 大尺寸按钮字体大小 |
| $md-size-medium | `16px` | 中尺寸按钮字体大小 |
| $md-size-small | `12px` | 小尺寸按钮字体大小 |
| $md-transition | `all 0.3s ease` | 过渡动画 |
| $md-border-radius-base | `4px` | 基础边框圆角 |
| $md-spacing-xs | `4px` | 极小间距 |
| $md-spacing-sm | `8px` | 小间距 |
| $md-spacing-md | `16px` | 中间距 |
| $md-spacing-lg | `24px` | 大间距 |
| $md-spacing-xl | `32px` | 极大间距 |

## FAQ

### Q: 如何禁用按钮？

A: 使用 `disabled` 属性可以禁用按钮，禁用状态下按钮无法点击。

```vue
<md-button type="primary" disabled>禁用按钮</md-button>
```

### Q: 如何显示加载状态？

A: 使用 `loading` 属性可以显示加载状态，加载状态下按钮无法点击。

```vue
<md-button type="primary" loading>加载中</md-button>
```

### Q: 如何自定义按钮样式？

A: 可以通过覆盖 CSS 变量或使用自定义类来修改按钮样式。

```vue
<template>
  <md-button class="custom-button">自定义按钮</md-button>
</template>

<style scoped>
.custom-button {
  --md-color-primary: #ff6b6b;
  border-radius: 8px;
}
</style>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## 注意事项

1. 按钮在 `disabled` 或 `loading` 状态下，点击事件不会触发。
2. 圆形按钮 `circle` 适用于包含单个图标或文字的按钮，内容过多时可能会导致显示异常。
3. 建议根据实际场景选择合适的按钮类型，主操作按钮使用 `primary` 类型，次要操作使用其他类型。
