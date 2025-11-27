# Tabs 标签页

标签页组件，用于在不同内容区域之间切换。

## 基础用法

```vue
<template>
  <md-tabs v-model="activeTab" :tabs="tabs">
    <view v-if="activeTab === 0">首页内容</view>
    <view v-if="activeTab === 1">分类内容</view>
    <view v-if="activeTab === 2">购物车内容</view>
  </md-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsItem } from '@/components/md-tabs'

const activeTab = ref(0)

const tabs: TabsItem[] = [
  { title: '首页' },
  { title: '分类' },
  { title: '购物车' }
]
</script>
```

## 使用子组件

```vue
<template>
  <md-tabs v-model="activeTab">
    <template #nav>
      <md-tabs-item title="首页" :value="'home'" />
      <md-tabs-item title="分类" :value="'category'" />
      <md-tabs-item title="购物车" :value="'cart'" />
    </template>
    <view v-if="activeTab === 'home'">首页内容</view>
    <view v-if="activeTab === 'category'">分类内容</view>
    <view v-if="activeTab === 'cart'">购物车内容</view>
  </md-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('home')
</script>
```

## 卡片样式

```vue
<template>
  <md-tabs v-model="activeTab" :tabs="tabs" type="card">
    <view v-if="activeTab === 0">首页内容</view>
    <view v-if="activeTab === 1">分类内容</view>
    <view v-if="activeTab === 2">购物车内容</view>
  </md-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsItem } from '@/components/md-tabs'

const activeTab = ref(0)

const tabs: TabsItem[] = [
  { title: '首页' },
  { title: '分类' },
  { title: '购物车' }
]
</script>
```

## 带徽章的标签

```vue
<template>
  <md-tabs v-model="activeTab" :tabs="tabs">
    <view v-if="activeTab === 0">首页内容</view>
    <view v-if="activeTab === 1">分类内容</view>
    <view v-if="activeTab === 2">购物车内容</view>
  </md-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsItem } from '@/components/md-tabs'

const activeTab = ref(0)

const tabs: TabsItem[] = [
  { title: '首页' },
  { title: '分类', badge: 5 },
  { title: '购物车', badge: true }
]
</script>
```

## 禁用标签

```vue
<template>
  <md-tabs v-model="activeTab" :tabs="tabs">
    <view v-if="activeTab === 0">首页内容</view>
    <view v-if="activeTab === 1">分类内容</view>
    <view v-if="activeTab === 2">购物车内容</view>
  </md-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsItem } from '@/components/md-tabs'

const activeTab = ref(0)

const tabs: TabsItem[] = [
  { title: '首页' },
  { title: '分类', disabled: true },
  { title: '购物车' }
]
</script>
```

## 标签位置

```vue
<template>
  <md-tabs v-model="activeTab" :tabs="tabs" placement="left">
    <view v-if="activeTab === 0">首页内容</view>
    <view v-if="activeTab === 1">分类内容</view>
    <view v-if="activeTab === 2">购物车内容</view>
  </md-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsItem } from '@/components/md-tabs'

const activeTab = ref(0)

const tabs: TabsItem[] = [
  { title: '首页' },
  { title: '分类' },
  { title: '购物车' }
]
</script>
```

## 自定义指示器

```vue
<template>
  <md-tabs 
    v-model="activeTab" 
    :tabs="tabs"
    :indicatorHeight="4"
    indicatorColor="#f56c6c"
  >
    <view v-if="activeTab === 0">首页内容</view>
    <view v-if="activeTab === 1">分类内容</view>
    <view v-if="activeTab === 2">购物车内容</view>
  </md-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsItem } from '@/components/md-tabs'

const activeTab = ref(0)

const tabs: TabsItem[] = [
  { title: '首页' },
  { title: '分类' },
  { title: '购物车' }
]
</script>
```

## 事件处理

```vue
<template>
  <md-tabs 
    v-model="activeTab" 
    :tabs="tabs"
    @change="handleChange"
    @disabled="handleDisabled"
  >
    <view v-if="activeTab === 0">首页内容</view>
    <view v-if="activeTab === 1">分类内容</view>
    <view v-if="activeTab === 2">购物车内容</view>
  </md-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsItem } from '@/components/md-tabs'

const activeTab = ref(0)

const tabs: TabsItem[] = [
  { title: '首页' },
  { title: '分类', disabled: true },
  { title: '购物车' }
]

const handleChange = (value: string | number, item?: TabsItem) => {
  console.log('切换到标签:', value, item)
}

const handleDisabled = (value: string | number, item?: TabsItem) => {
  console.log('点击了禁用的标签:', value, item)
}
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前激活的标签值 | `string \| number` | `0` |
| tabs | 标签列表 | `TabsItem[]` | `[]` |
| placement | 标签位置 | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| type | 标签类型 | `'line' \| 'card'` | `'line'` |
| bordered | 是否显示边框 | `boolean` | `false` |
| showIndicator | 是否显示指示器 | `boolean` | `true` |
| animated | 是否开启动画 | `boolean` | `true` |
| indicatorHeight | 指示器高度 | `number` | `3` |
| indicatorColor | 指示器颜色 | `string` | `#409eff` |

## Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 标签切换时触发 | `value: string \| number, item?: TabsItem` |
| disabled | 点击禁用标签时触发 | `value: string \| number, item?: TabsItem` |

## 类型定义

### TabsItem

```typescript
interface TabsItem {
  /** 标签标题 */
  title: string
  /** 标签值 */
  value?: string | number
  /** 徽章数量或是否显示红点 */
  badge?: number | string | boolean
  /** 是否禁用 */
  disabled?: boolean
}
```

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| --md-tabs-text-color | 标签文字颜色 | `#606266` |
| --md-tabs-active-text-color | 激活状态的文字颜色 | `#409eff` |
| --md-tabs-border-color | 边框颜色 | `#e5e5e5` |
| --md-tabs-nav-bg-color | 标签导航背景色 | `#ffffff` |
| --md-tabs-content-bg-color | 内容区域背景色 | `#ffffff` |
| --md-color-danger | 徽章颜色 | `#f56c6c` |
