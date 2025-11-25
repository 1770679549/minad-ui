# Md UI

一个基于 Vue 3 的移动端 UI 组件库

## 特性

- 📱 **移动端优先**：专为移动端设计和优化
- ⚡ **Vue 3 驱动**：利用 Vue 3 的 Composition API 和响应式系统
- 🎨 **自定义主题**：支持自定义主题和样式变量
- 🔧 **TypeScript 支持**：完整的 TypeScript 类型定义
- 📦 **组件丰富**：提供常用的移动端 UI 组件
- 🎯 **易用性高**：简洁的 API 设计，易于上手

## 快速开始

### 安装

```bash
npm install minad-ui
# 或
yarn add minad-ui
# 或
pnpm add minad-ui
```

### 使用

```js
// 完整引入
import { createApp } from 'vue'
import MdUI from 'minad-ui'
import 'minad-ui/dist/index.css'

const app = createApp(App)
app.use(MdUI)
```

```js
// 按需引入
import { createApp } from 'vue'
import { MdButton, MdInput } from 'minad-ui'
import 'minad-ui/dist/components/md-button/index.css'
import 'minad-ui/dist/components/md-input/index.css'

const app = createApp(App)
app.use(MdButton)
app.use(MdInput)
```

## 浏览器支持

- iOS 12+
- Android 6+

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT
