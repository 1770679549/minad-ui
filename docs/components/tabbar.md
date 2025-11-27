# Tabbar 标签栏

标签栏组件，用于页面底部导航，支持自定义标签、图标、徽章和样式。

## 基础用法

```vue
<template>
  <md-tabbar v-model="activeIndex" :tabs="tabs" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabbarItem } from '@/components/md-tabbar'

const activeIndex = ref(0)

const tabs: TabbarItem[] = [
  { text: '首页', icon: 'home' },
  { text: '分类', icon: 'category' },
  { text: '购物车', icon: 'shopping-cart' },
  { text: '我的', icon: 'user' }
]
</script>
```

## 自定义激活样式

```vue
<template>
  <md-tabbar 
    v-model="activeIndex" 
    :tabs="tabs"
    activeTextColor="#409eff"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabbarItem } from '@/components/md-tabbar'

const activeIndex = ref(0)

const tabs: TabbarItem[] = [
  { text: '首页', icon: 'home' },
  { text: '分类', icon: 'category' },
  { text: '购物车', icon: 'shopping-cart' },
  { text: '我的', icon: 'user' }
]
</script>
```

## 带徽章的标签

```vue
<template>
  <md-tabbar v-model="activeIndex" :tabs="tabs" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabbarItem } from '@/components/md-tabbar'

const activeIndex = ref(0)

const tabs: TabbarItem[] = [
  { text: '首页', icon: 'home' },
  { text: '分类', icon: 'category', badge: 5 },
  { text: '购物车', icon: 'shopping-cart', badge: true },
  { text: '我的', icon: 'user' }
]
</script>
```

## 禁用标签

```vue
<template>
  <md-tabbar v-model="activeIndex" :tabs="tabs" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabbarItem } from '@/components/md-tabbar'

const activeIndex = ref(0)

const tabs: TabbarItem[] = [
  { text: '首页', icon: 'home' },
  { text: '分类', icon: 'category', disabled: true },
  { text: '购物车', icon: 'shopping-cart' },
  { text: '我的', icon: 'user' }
]
</script>
```

## 自定义图标

```vue
<template>
  <md-tabbar v-model="activeIndex" :tabs="tabs" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabbarItem } from '@/components/md-tabbar'

const activeIndex = ref(0)

const tabs: TabbarItem[] = [
  { text: '首页', icon: 'home', activeIcon: 'home-active' },
  { text: '分类', icon: 'category', activeIcon: 'category-active' },
  { text: '购物车', icon: 'shopping-cart', activeIcon: 'shopping-cart-active' },
  { text: '我的', icon: 'user', activeIcon: 'user-active' }
]
</script>
```

## 自定义样式

```vue
<template>
  <md-tabbar 
    v-model="activeIndex" 
    :tabs="tabs"
    backgroundColor="#f5f5f5"
    textColor="#606266"
    :height="45"
    :bordered="false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabbarItem } from '@/components/md-tabbar'

const activeIndex = ref(0)

const tabs: TabbarItem[] = [
  { text: '首页', icon: 'home' },
  { text: '分类', icon: 'category' },
  { text: '购物车', icon: 'shopping-cart' },
  { text: '我的', icon: 'user' }
]
</script>
```

## 非固定定位

```vue
<template>
  <div class="container">
    <div class="content">
      <!-- 页面内容 -->
    </div>
    <md-tabbar 
      v-model="activeIndex" 
      :tabs="tabs"
      :fixed="false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabbarItem } from '@/components/md-tabbar'

const activeIndex = ref(0)

const tabs: TabbarItem[] = [
  { text: '首页', icon: 'home' },
  { text: '分类', icon: 'category' },
  { text: '购物车', icon: 'shopping-cart' },
  { text: '我的', icon: 'user' }
]
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
```

## 事件处理

```vue
<template>
  <md-tabbar 
    v-model="activeIndex" 
    :tabs="tabs"
    @change="handleChange"
    @disabled="handleDisabled"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabbarItem } from '@/components/md-tabbar'

const activeIndex = ref(0)

const tabs: TabbarItem[] = [
  { text: '首页', icon: 'home' },
  { text: '分类', icon: 'category', disabled: true },
  { text: '购物车', icon: 'shopping-cart' },
  { text: '我的', icon: 'user' }
]

const handleChange = (index: number, item: TabbarItem) => {
  console.log('切换到标签:', index, item)
}

const handleDisabled = (index: number, item: TabbarItem) => {
  console.log('点击了禁用的标签:', index, item)
}
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前激活的标签索引 | `number` | - |
| tabs | 标签列表 | `TabbarItem[]` | `[]` |
| fixed | 是否固定在底部 | `boolean` | `true` |
| bordered | 是否显示顶部边框 | `boolean` | `true` |
| backgroundColor | 背景颜色 | `string` | `#ffffff` |
| textColor | 文字颜色 | `string` | `#606266` |
| activeTextColor | 激活状态的文字颜色 | `string` | `#409eff` |
| height | 高度 | `number \| string` | `50` |
| customStyle | 自定义样式 | `CSSProperties` | `{}` |

## Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 标签切换时触发 | `index: number, item: TabbarItem` |
| disabled | 点击禁用的标签时触发 | `index: number, item: TabbarItem` |

## 类型定义

### TabbarItem

```typescript
interface TabbarItem {
  /** 标签文字 */
  text: string
  /** 图标名称 */
  icon: string
  /** 激活状态的图标名称 */
  activeIcon?: string
  /** 徽章数量或是否显示红点 */
  badge?: number | string | boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 路由路径 */
  path?: string
}
```

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| --md-tabbar-bg-color | 标签栏背景色 | `#ffffff` |
| --md-tabbar-text-color | 标签栏文字颜色 | `#606266` |
| --md-tabbar-active-text-color | 标签栏激活文字颜色 | `#409eff` |
| --md-tabbar-border-color | 标签栏边框颜色 | `#e5e5e5` |
| --md-tabbar-height | 标签栏高度 | `50px` |
| --md-tabbar-z-index | 标签栏 z-index 值 | `1000` |
| --md-color-danger | 徽章颜色 | `#f56c6c` |
