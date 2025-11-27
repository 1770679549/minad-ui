# VerifySlider 滑块验证

滑块验证组件，用于验证用户是否为真实用户。

## 基础用法

```html
<template>
  <md-verify-slider @success="onSuccess" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = () => {
  showToast('验证成功！')
}
</script>
```

## 自定义样式

可以通过 `trackColor`、`activeColor`、`thumbColor` 等属性自定义滑块的样式。

```html
<template>
  <md-verify-slider
    track-color="#e0e0e0"
    active-color="#13ce66"
    thumb-color="#fff"
    text-color="#333"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = () => {
  showToast('验证成功！')
}
</script>
```

## 自定义尺寸

可以通过 `width` 和 `height` 属性自定义滑块的尺寸。

```html
<template>
  <md-verify-slider
    width="320"
    height="48"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = () => {
  showToast('验证成功！')
}
</script>
```

## 自定义提示文字

可以通过 `initialText`、`slidingText`、`successText` 属性自定义提示文字。

```html
<template>
  <md-verify-slider
    initial-text="向右拖动滑块"
    sliding-text="松开完成验证"
    success-text="验证通过"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = () => {
  showToast('验证成功！')
}
</script>
```

## 禁用状态

通过 `disabled` 属性禁用滑块验证。

```html
<template>
  <md-verify-slider disabled />
</template>
```

## 事件处理

```html
<template>
  <md-verify-slider
    @success="onSuccess"
    @error="onError"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = () => {
  showToast('验证成功！')
}

const onError = () => {
  showToast('验证失败，请重试')
}

const onChange = (status: string) => {
  console.log('滑块状态变化:', status)
}
</script>
```

## 重置滑块

通过 `ref` 调用组件的 `reset` 方法重置滑块。

```html
<template>
  <view class="demo">
    <md-verify-slider ref="verifyRef" @success="onSuccess" />
    <md-button type="primary" @click="resetSlider">重置滑块</md-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'
import type { MdVerifySlider } from 'uniapp-minad-ui'

const verifyRef = ref<InstanceType<typeof MdVerifySlider>>()

const onSuccess = () => {
  showToast('验证成功！')
}

const resetSlider = () => {
  verifyRef.value?.reset()
}
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
```

## 自定义图标

可以通过 `icon` 插槽自定义滑块的图标。

```html
<template>
  <md-verify-slider @success="onSuccess">
    <template #icon>
      <md-icon name="arrowright" size="16" color="#007aff" />
    </template>
  </md-verify-slider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'uniapp-minad-ui'

const onSuccess = () => {
  showToast('验证成功！')
}
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | `boolean` | `false` |
| width | 滑块宽度（像素） | `number` | `280` |
| height | 滑块高度（像素） | `number` | `40` |
| initialText | 初始提示文字 | `string` | `'拖动滑块完成验证'` |
| slidingText | 滑动中提示文字 | `string` | `'释放滑块完成验证'` |
| successText | 验证成功提示文字 | `string` | `'验证成功'` |
| errorText | 验证失败提示文字 | `string` | `'验证失败'` |
| trackColor | 滑块背景颜色 | `string` | `'#f0f0f0'` |
| activeColor | 已滑动部分背景颜色 | `string` | `'#007aff'` |
| thumbColor | 滑块颜色 | `string` | `'#fff'` |
| textColor | 文字颜色 | `string` | `'#666'` |
| successColor | 成功时的颜色 | `string` | `'#4cd964'` |
| customClass | 自定义类名 | `string` | `''` |

## Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| success | 验证成功时触发 | - |
| error | 验证失败时触发 | - |
| change | 滑块状态变化时触发 | `status: 'idle' \| 'sliding' \| 'success' \| 'error'` |

## Slots

| 名称 | 说明 |
| --- | --- |
| icon | 自定义滑块图标 |

## 方法

| 方法名 | 说明 |
| --- | --- |
| reset | 重置滑块到初始状态 |

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| --md-verify-slider-height | 滑块高度 | `40px` |
| --md-verify-slider-track-color | 滑块背景颜色 | `#f0f0f0` |
| --md-verify-slider-active-color | 已滑动部分背景颜色 | `#007aff` |
| --md-verify-slider-thumb-color | 滑块颜色 | `#fff` |
| --md-verify-slider-text-color | 文字颜色 | `#666` |
| --md-verify-slider-success-color | 成功时的颜色 | `#4cd964` |