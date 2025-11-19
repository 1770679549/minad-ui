<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-19 22:06:05
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-19 22:38:46
 * @FilePath: \minad-ui\README.md
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->

# MinAd UI

一个轻量级的 Vue 3 移动端 UI 组件库。

## 安装

```bash
npm install minad-ui
```

## 使用

### 全局安装

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import install from 'minad-ui'
import 'minad-ui/style.css'

const app = createApp(App)
app.use(install)
app.mount('#app')
```

### 局部安装

<template>
  <ma-row :gutter="16">
    <ma-col :span="6">列1</ma-col>
    <ma-col :span="6">列2</ma-col>
  </ma-row>
</template>

<script setup>
import { MaRow, MaCol } from 'minad-ui'
import 'minad-ui/style.css'
</script>

组件
目前包含以下组件：

ma-row: 布局行组件
ma-col: 布局列组件
License
MIT
