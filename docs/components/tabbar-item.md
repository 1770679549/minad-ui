# TabbarItem 标签栏项

TabbarItem 是 Tabbar 组件的子组件，用于创建单个标签项。

## 基础用法

```vue
<template>
  <md-tabbar v-model="activeIndex">
    <md-tabbar-item text="首页" icon="home" />
    <md-tabbar-item text="分类" icon="category" />
    <md-tabbar-item text="购物车" icon="shopping-cart" />
    <md-tabbar-item text="我的" icon="user" />
  </md-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>
```

## 激活状态图标

```vue
<template>
  <md-tabbar v-model="activeIndex">
    <md-tabbar-item text="首页" icon="home" active-icon="home-active" />
    <md-tabbar-item text="分类" icon="category" active-icon="category-active" />
    <md-tabbar-item text="购物车" icon="shopping-cart" active-icon="shopping-cart-active" />
    <md-tabbar-item text="我的" icon="user" active-icon="user-active" />
  </md-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>
```

## 带徽章的标签项

```vue
<template>
  <md-tabbar v-model="activeIndex">
    <md-tabbar-item text="首页" icon="home" />
    <md-tabbar-item text="分类" icon="category" badge="5" />
    <md-tabbar-item text="购物车" icon="shopping-cart" badge="true" />
    <md-tabbar-item text="我的" icon="user" />
  </md-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>
```

## 禁用标签项

```vue
<template>
  <md-tabbar v-model="activeIndex">
    <md-tabbar-item text="首页" icon="home" />
    <md-tabbar-item text="分类" icon="category" disabled="true" />
    <md-tabbar-item text="购物车" icon="shopping-cart" />
    <md-tabbar-item text="我的" icon="user" />
  </md-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 标签文字 | `string` | - |
| icon | 图标名称 | `string` | - |
| active-icon | 激活状态的图标名称 | `string` | - |
| active | 是否激活 | `boolean` | `false` |
| badge | 徽章数量或是否显示红点 | `number \| string \| boolean` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| path | 路由路径 | `string` | - |

## Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击事件 | `item: TabbarItemProps` |

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| --md-tabbar-text-color | 标签文字颜色 | `#606266` |
| --md-tabbar-active-text-color | 激活状态的文字颜色 | `#409eff` |
| --md-color-danger | 徽章颜色 | `#f56c6c` |
