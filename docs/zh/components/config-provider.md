# ConfigProvider 全局配置

### 介绍

ConfigProvider 是一个全局配置组件，用于为所有子组件提供统一的配置，如国际化、主题和组件尺寸等。

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
import { MdConfigProvider } from 'minad-ui'
```

## 基本用法

### 全局配置示例

```vue
<template>
  <md-config-provider
    locale="en"
    theme="dark"
    size="large"
  >
    <app />
  </md-config-provider>
</template>

<script setup lang="ts">
import App from './App.vue'
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 国际化语言 | `'en' \| 'zh-cn'` | `'zh-cn'` |
| theme | 主题模式 | `'light' \| 'dark'` | `'light'` |
| size | 组件尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |

## 配置项说明

### 国际化配置

ConfigProvider 支持中英文两种语言配置，通过 `locale` 属性设置。

```vue
<template>
  <md-config-provider locale="en">
    <md-button type="primary">Button</md-button>
    <md-dialog title="Dialog Title">Content</md-dialog>
  </md-config-provider>
</template>
```

### 主题配置

支持明暗两种主题模式，通过 `theme` 属性设置。

```vue
<template>
  <md-config-provider theme="dark">
    <div style="background-color: #1a1a1a; padding: 20px;">
      <md-button type="primary">深色主题按钮</md-button>
      <md-card title="深色主题卡片">
        这是深色主题下的卡片内容
      </md-card>
    </div>
  </md-config-provider>
</template>
```

### 组件尺寸配置

统一设置所有组件的尺寸，支持 `small`、`medium`、`large` 三种尺寸。

```vue
<template>
  <md-config-provider size="small">
    <md-button type="primary">小尺寸按钮</md-button>
    <md-input placeholder="小尺寸输入框" />
    <md-select v-model="value" placeholder="小尺寸选择器">
      <md-option label="选项1" value="1" />
      <md-option label="选项2" value="2" />
    </md-select>
  </md-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## 嵌套使用

ConfigProvider 支持嵌套使用，内层配置会覆盖外层配置。

```vue
<template>
  <md-config-provider theme="light" size="medium">
    <!-- 外层配置：浅色主题，中等尺寸 -->
    <md-button type="primary">外层按钮</md-button>
    
    <md-config-provider theme="dark" size="small">
      <!-- 内层配置：深色主题，小尺寸 -->
      <md-button type="primary">内层按钮</md-button>
    </md-config-provider>
  </md-config-provider>
</template>
```

## FAQ

### Q: ConfigProvider 支持哪些语言？

A: 目前支持中文（zh-cn）和英文（en）两种语言。

### Q: 如何自定义主题？

A: 目前 ConfigProvider 仅支持切换内置的明暗主题，如需自定义主题，可通过覆盖组件的 CSS 变量实现。

### Q: 所有组件都支持尺寸配置吗？

A: 大部分组件都支持尺寸配置，但仍有部分组件可能不支持，请参考各组件的文档。

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 80+ |

## 注意事项

1. ConfigProvider 应该尽可能放在应用的最外层，以便为所有组件提供配置
2. 当嵌套使用时，内层配置会覆盖外层配置
3. 部分配置项可能不会立即生效，需要组件重新渲染
4. 国际化配置仅影响组件内置的文本，自定义文本需要自行处理