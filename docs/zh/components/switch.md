# Switch 开关

开关选择器。

## 基础用法

```html
<template>
  <md-switch v-model="checked" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## 文字描述

可以通过 `activeText` 和 `inactiveText` 属性设置开关的文字描述，默认显示在开关外部。

```html
<template>
  <md-switch v-model="checked" active-text="开" inactive-text="关" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## 文字位置

可以通过 `textPosition` 属性设置文字位置，支持 `inside`（内部）和 `outside`（外部）两种模式。

```html
<template>
  <md-switch v-model="checked" active-text="开" inactive-text="关" text-position="inside" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## 自定义值

可以通过 `activeValue` 和 `inactiveValue` 属性自定义开关的值。

```html
<template>
  <md-switch v-model="value" active-value="1" inactive-value="0" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('1')
</script>
```

## 自定义颜色

可以通过 `activeColor` 和 `inactiveColor` 属性自定义开关的颜色。

```html
<template>
  <md-switch v-model="checked" active-color="#13ce66" inactive-color="#ff4949" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## 自定义宽度

可以通过 `width` 属性自定义开关的宽度。

```html
<template>
  <md-switch v-model="checked" width="80" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## 禁用状态

通过 `disabled` 属性禁用开关。

```html
<template>
  <md-switch v-model="checked" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## 加载状态

通过 `loading` 属性设置开关为加载状态。

```html
<template>
  <md-switch v-model="checked" loading />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## 尺寸

通过 `size` 属性设置开关的尺寸，支持 `small`、`medium`、`large` 三种尺寸。

```html
<template>
  <md-switch v-model="checked" size="small" />
  <md-switch v-model="checked" size="medium" />
  <md-switch v-model="checked" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## 事件

```html
<template>
  <md-switch v-model="checked" @change="onChange" @click="onClick" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const checked = ref(true)

const onChange = (value: boolean | string | number) => {
  showToast(`开关状态：${value}`)
}

const onClick = () => {
  showToast('点击了开关')
}
</script>
```

## 原生 input

通过 `native` 属性使用原生 input 元素。

```html
<template>
  <md-switch v-model="checked" native />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | `boolean \| string \| number` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| size | 尺寸，可选值为 `small`、`medium`、`large` | `string` | `medium` |
| activeText | 打开时的文字描述 | `string` | `''` |
| inactiveText | 关闭时的文字描述 | `string` | `''` |
| activeValue | 打开时的值 | `boolean \| string \| number` | `true` |
| inactiveValue | 关闭时的值 | `boolean \| string \| number` | `false` |
| activeColor | 打开时的背景色 | `string` | `#007aff` |
| inactiveColor | 关闭时的背景色 | `string` | `#e0e0e0` |
| native | 是否使用原生 input | `boolean` | `false` |
| customClass | 自定义类名 | `string` | `''` |
| width | 开关的宽度（像素） | `number` | `undefined` |
| textPosition | 文字位置，可选值为 `inside`、`outside` | `string` | `outside` |

## Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `value: boolean \| string \| number` |
| click | 点击时触发 | `event: MouseEvent` |
| change | 状态变化时触发 | `value: boolean \| string \| number` |

## Slots

| 名称 | 说明 |
| --- | --- |
| icon | 自定义图标 |

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| --md-switch-height-small | 小尺寸开关高度 | `16px` |
| --md-switch-width-small | 小尺寸开关宽度 | `30px` |
| --md-switch-thumb-size-small | 小尺寸滑块大小 | `12px` |
| --md-switch-height-medium | 中尺寸开关高度 | `20px` |
| --md-switch-width-medium | 中尺寸开关宽度 | `38px` |
| --md-switch-thumb-size-medium | 中尺寸滑块大小 | `16px` |
| --md-switch-height-large | 大尺寸开关高度 | `24px` |
| --md-switch-width-large | 大尺寸开关宽度 | `46px` |
| --md-switch-thumb-size-large | 大尺寸滑块大小 | `20px` |
| --md-switch-active-color | 打开时的颜色 | `#007aff` |
| --md-switch-inactive-color | 关闭时的颜色 | `#e0e0e0` |
| --md-switch-thumb-color | 滑块颜色 | `#ffffff` |
| --md-switch-thumb-shadow | 滑块阴影 | `0 2px 4px rgba(0, 0, 0, 0.15)` |
| --md-switch-text-color | 文字颜色 | `#333333` |
| --md-switch-text-color-active | 激活状态文字颜色 | `#ffffff` |