# Cell 单元格

### 介绍

单元格是列表中的单个展示项，通常包含左侧图标、标题、描述信息以及右侧内容（如文本、图标、箭头或开关）。

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
import { MdCell } from 'minad-ui'
```

## 基本用法

### 基础单元格

最简单的单元格，包含标题和右侧文本

```vue
<template>
  <md-cell title="标题" value="内容" />
</template>
```

### 带描述信息的单元格

可以添加描述信息，展示更多内容

```vue
<template>
  <md-cell title="标题" description="这是一段描述信息" value="内容" />
</template>
```

### 带左侧图标的单元格

左侧可以添加图标，增强视觉效果

```vue
<template>
  <md-cell title="标题" value="内容" icon="el-icon-user" />
</template>
```

### 带右侧箭头的单元格

添加箭头表示可以点击跳转

```vue
<template>
  <md-cell title="标题" value="内容" arrow />
</template>
```

### 带开关的单元格

可以在右侧显示开关组件，用于切换状态

```vue
<template>
  <md-cell title="开关" switch :switchChecked="checked" @switch-change="onSwitchChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)

const onSwitchChange = (value: boolean) => {
  checked.value = value
  console.log('开关状态:', value)
}
</script>
```

### 带右侧图标的单元格

右侧可以自定义图标

```vue
<template>
  <md-cell title="标题" value="内容" rightIcon="el-icon-edit" />
</template>
```

### 自定义内容

可以使用插槽自定义单元格的内容

```vue
<template>
  <md-cell>
    <template #title>
      <div class="custom-title">
        <span class="red-dot"></span>
        自定义标题
      </div>
    </template>
    <template #right>
      <div class="custom-right">
        <md-tag type="primary">标签</md-tag>
      </div>
    </template>
  </md-cell>
</template>

<style scoped>
.custom-title {
  display: flex;
  align-items: center;
}

.red-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff4d4f;
  margin-right: 8px;
}

.custom-right {
  display: flex;
  align-items: center;
}
</style>
```

### 禁用状态

禁用单元格，使其不可点击

```vue
<template>
  <md-cell title="禁用" value="内容" disabled />
</template>
```

### 可点击状态

添加点击反馈效果

```vue
<template>
  <md-cell title="可点击" value="内容" clickable @click="onClick" />
</template>

<script setup lang="ts">
const onClick = (event: MouseEvent) => {
  console.log('单元格被点击', event)
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 单元格标题 | `string` | - |
| description | 单元格描述 | `string` | - |
| icon | 左侧图标名称 | `string` | - |
| value | 右侧文本内容 | `string` | - |
| rightIcon | 右侧图标名称 | `string` | - |
| arrow | 是否显示右侧箭头 | `boolean` | `false` |
| switch | 是否显示开关 | `boolean` | `false` |
| switchChecked | 开关是否选中 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| clickable | 是否可点击 | `boolean` | `false` |
| customClass | 自定义类名 | `string` | - |
| customStyle | 自定义样式 | `Record<string, any>` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 单元格点击事件 | `(event: MouseEvent) => void` |
| switch-change | 开关状态变化事件 | `(checked: boolean) => void` |

### Slots

| 名称 | 说明 |
| --- | --- |
| icon | 左侧图标插槽 |
| title | 标题插槽 |
| description | 描述插槽 |
| right | 右侧内容插槽 |

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| $cell-height | 单元格高度 | `60px` |
| $cell-padding | 单元格内边距 | `0 16px` |
| $cell-title-font-size | 标题字体大小 | `16px` |
| $cell-title-color | 标题颜色 | `#303133` |
| $cell-description-font-size | 描述字体大小 | `14px` |
| $cell-description-color | 描述颜色 | `#909399` |
| $cell-value-font-size | 右侧文本字体大小 | `16px` |
| $cell-value-color | 右侧文本颜色 | `#909399` |
| $cell-arrow-color | 箭头颜色 | `#c0c4cc` |
| $cell-border-color | 边框颜色 | `#ebedf0` |
| $cell-active-color | 点击反馈颜色 | `#f5f7fa` |
| $cell-disabled-color | 禁用状态颜色 | `#c0c4cc` |

## FAQ

### Q: 如何自定义单元格的高度？

A: 可以通过 `customStyle` 属性或覆盖 `$cell-height` 样式变量来调整单元格高度。

```vue
<template>
  <md-cell title="自定义高度" value="内容" :customStyle="{ height: '80px' }" />
</template>
```

### Q: 如何在单元格中添加自定义组件？

A: 可以使用插槽来自定义单元格的各个部分，如标题、右侧内容等。

```vue
<template>
  <md-cell>
    <template #title>自定义标题</template>
    <template #right>
      <md-button size="small" type="primary">按钮</md-button>
    </template>
  </md-cell>
</template>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 80+ |

## 注意事项

1. 当同时设置 `value` 和 `right` 插槽时，`right` 插槽会覆盖 `value` 内容
2. 开关组件仅在设置 `switch` 为 `true` 时才会显示
3. 为了保证点击效果，建议在可点击的单元格上添加 `clickable` 属性
4. 禁用状态下，点击事件不会触发，开关也无法操作