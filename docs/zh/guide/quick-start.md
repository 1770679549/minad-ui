# Quick Start

## 完整引入

在项目的入口文件中（通常是 main.js 或 main.ts），完整引入 Md UI：

```javascript
// main.js 或 main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 完整引入 Md UI
import MdUI from 'minad-ui'
import 'minad-ui/dist/style.css'

const app = createApp(App)

// 注册 Md UI
app.use(MdUI)

app.mount('#app')
```

## 按需引入

按需引入可以减小打包体积，只引入需要的组件：

```javascript
// main.js 或 main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 按需引入需要的组件
import { MdButton, MdIcon, MdInput } from 'minad-ui'
import 'minad-ui/dist/style.css'

const app = createApp(App)

// 注册组件
app.use(MdButton)
app.use(MdIcon)
app.use(MdInput)

app.mount('#app')
```

## 在组件中使用

```vue
<template>
  <div class="app">
    <md-button type="primary" @click="handleClick">点击我</md-button>
    <md-icon name="check" color="#4cd964" />
    <md-input v-model="inputValue" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')

const handleClick = () => {
  console.log('按钮被点击了')
}
</script>
```

## 自定义主题

Md UI 支持自定义主题，您可以通过覆盖 SCSS 变量来修改主题颜色和样式：

```scss
// 在项目的样式文件中
@import 'minad-ui/src/styles/variables';

// 覆盖主题变量
$md-color-primary: #007aff;
$md-color-success: #4cd964;
$md-color-warning: #f0ad4e;
$md-color-danger: #dd524d;
$md-color-info: #909399;

// 导入组件样式
@import 'minad-ui/src/styles/index';
```

## 浏览器兼容性

- iOS 12+
- Android 6+
- Chrome (最新版本)
- Safari (最新版本)
- Firefox (最新版本)

## 常见问题

### 1. 为什么组件没有样式？

请确保您已经正确导入了样式文件：
```javascript
import 'minad-ui/dist/style.css'
```

### 2. 为什么某些组件在移动端显示异常？

Md UI 是专为移动端设计的，建议在移动端设备或模拟器上测试。如果在桌面端浏览器中测试，请使用响应式设计工具切换到移动端视图。

### 3. 如何修改组件的默认样式？

您可以通过以下方式修改组件样式：
1. 使用组件的 `customStyle` 属性
2. 覆盖 SCSS 变量
3. 使用深度选择器（如 `:deep()`）

## 下一步

- 查看 [组件文档](../components/button.md) 了解各个组件的详细用法