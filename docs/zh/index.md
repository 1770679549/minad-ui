# Md UI

一个基于 Vue 3 的移动端 UI 组件库

## 特性

- 📱 移动端优先设计，适配各种移动设备
- 💪 基于 Vue 3 Composition API 开发
- 🎨 现代化设计风格，支持主题定制
- 🚀 高性能，轻量级，无外部依赖
- 📦 丰富的组件库，满足各种业务需求
- 🔧 简单易用的 API，完善的文档

## 快速上手

### 安装

使用 npm 安装：

```bash
npm install minad-ui
```

使用 yarn 安装：

```bash
yarn add minad-ui
```

使用 pnpm 安装：

```bash
pnpm add minad-ui
```

### 引入组件

#### 完整引入

在 main.js 中完整引入：

```javascript
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(MinadUI)
app.mount('#app')
```

#### 按需引入

只引入需要的组件：

```javascript
import { createApp } from 'vue'
import { Button, Input, Icon } from 'minad-ui'
import 'minad-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.use(Input)
app.use(Icon)
app.mount('#app')
```

### 使用组件

```vue
<template>
  <md-button type="primary" @click="handleClick">点击我</md-button>
  <md-input v-model="value" placeholder="请输入内容"></md-input>
  <md-icon name="success"></md-icon>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const handleClick = () => {
  console.log('按钮被点击了')
}
</script>
```

## 文档目录

### 基础
- [安装指南](guide/installation.md)
- [快速开始](guide/quick-start.md)

### 组件
- [Button 按钮](components/button.md)
- [Icon 图标](components/icon.md)
- [Input 输入框](components/input.md)
- [Link 链接](components/link.md)
- [Text 文本](components/text.md)
- [Row 行](components/row.md)
- [Col 列](components/col.md)

## 浏览器支持

- iOS 12+
- Android 6+
- 现代浏览器（Chrome, Safari, Firefox, Edge）

## 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. 克隆仓库
2. 安装依赖：`npm install`
3. 开发组件：`npm run dev`
4. 构建组件库：`npm run build:lib`
5. 构建文档：`npm run docs:build`

## 许可证

MIT
