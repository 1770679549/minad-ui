# Checkbox 复选框

用于在一组选项中进行多项选择，支持单选、多选和自定义样式。

## 引入方式

### 全局引入

```vue
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/lib/style.css'

const app = createApp()
app.use(MinadUI)
```

### 按需引入

```vue
import { MdCheckbox, MdCheckboxGroup } from 'minad-ui'
import 'minad-ui/lib/components/checkbox/style.css'

app.component('MdCheckbox', MdCheckbox)
app.component('MdCheckboxGroup', MdCheckboxGroup)
```

## 基本用法

使用 `v-model` 绑定选中状态。

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox v-model="checked">同意协议</md-checkbox>
    <div>选中状态: {{ checked ? '已选中' : '未选中' }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>
```

## 禁用状态

使用 `disabled` 属性禁用复选框。

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox v-model="checked" disabled>同意协议</md-checkbox>
    <md-checkbox v-model="checked2" disabled>已选中禁用</md-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const checked2 = ref(true)
</script>
```

## 带边框的复选框

使用 `border` 属性为复选框添加边框。

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox v-model="checked" border>带边框</md-checkbox>
    <md-checkbox v-model="checked2" border disabled>禁用边框</md-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const checked2 = ref(true)
</script>
```

## 自定义颜色

使用 `color` 属性自定义选中状态的颜色。

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox v-model="checked" color="#ff6b6b">红色</md-checkbox>
    <md-checkbox v-model="checked2" color="#4ecdc4">青色</md-checkbox>
    <md-checkbox v-model="checked3" color="#45b7d1">蓝色</md-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
</script>
```

## 复选框组

使用 `md-checkbox-group` 组件创建复选框组，支持统一的选中状态管理。

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox-group v-model="checkedValues">
      <md-checkbox value="option1">选项1</md-checkbox>
      <md-checkbox value="option2">选项2</md-checkbox>
      <md-checkbox value="option3">选项3</md-checkbox>
    </md-checkbox-group>
    <div>选中值: {{ checkedValues.join(', ') }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkedValues = ref([])
</script>
```

## 禁用的复选框组

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox-group v-model="checkedValues" disabled>
      <md-checkbox value="option1">选项1</md-checkbox>
      <md-checkbox value="option2">选项2</md-checkbox>
      <md-checkbox value="option3">选项3</md-checkbox>
    </md-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkedValues = ref(['option1'])
</script>
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue | 是否选中，支持 v-model | `boolean` | - | `false` |
| value | 复选框的值，在复选框组中使用 | `any` | - | - |
| label | 复选框标签 | `string` | - | - |
| disabled | 是否禁用 | `boolean` | - | `false` |
| border | 是否显示边框 | `boolean` | - | `false` |
| color | 自定义颜色 | `string` | - | - |
| customClass | 自定义类名 | `string` | - | - |
| customStyle | 自定义样式 | `object` | - | `{}` |

### Checkbox Emits

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| update:modelValue | 选中状态变化时触发 | `checked: boolean` |
| change | 选中状态变化时触发 | `checked: boolean, value: any` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue | 选中的值，支持 v-model | `any[]` | - | `[]` |
| disabled | 是否禁用所有复选框 | `boolean` | - | `false` |
| customClass | 自定义类名 | `string` | - | - |
| customStyle | 自定义样式 | `object` | - | `{}` |

### CheckboxGroup Emits

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| update:modelValue | 选中值变化时触发 | `values: any[]` |
| change | 选中值变化时触发 | `values: any[]` |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-primary | `#007aff` | 选中状态的颜色 |
| $md-color-border | `#dcdfe6` | 边框颜色 |
| $md-color-text | `#333333` | 文本颜色 |
| $md-color-text-grey | `#909399` | 禁用状态的文本颜色 |
| $md-color-bg-disabled | `#f5f7fa` | 禁用状态的背景颜色 |
| $md-size-medium | `16px` | 文本大小 |
| $md-border-radius-base | `4px` | 边框圆角 |
| $md-spacing-xs | `4px` | 间距 |
| $md-transition | `all 0.3s ease` | 过渡动画 |

## FAQ

### Q: 如何自定义复选框的大小？

A: 可以通过 `customStyle` 属性自定义复选框的大小。

```vue
<md-checkbox 
  v-model="checked" 
  :customStyle="{ width: '24px', height: '24px' }"
>大尺寸复选框</md-checkbox>
```

### Q: 如何在复选框组中获取选中的值？

A: 使用 `v-model` 绑定复选框组的 `modelValue` 属性，即可获取选中的值数组。

```vue
<md-checkbox-group v-model="checkedValues">
  <md-checkbox value="option1">选项1</md-checkbox>
  <md-checkbox value="option2">选项2</md-checkbox>
</md-checkbox-group>
<div>选中值: {{ checkedValues }}</div>
```

### Q: 如何设置默认选中的值？

A: 在复选框组中，可以通过初始化 `modelValue` 数组来设置默认选中的值。

```vue
<script setup>
import { ref } from 'vue'

// 默认选中 option1 和 option3
const checkedValues = ref(['option1', 'option3'])
</script>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## 注意事项

1. 当复选框在 `md-checkbox-group` 中使用时，`modelValue` 属性将被忽略，选中状态由 `md-checkbox-group` 控制。
2. 在复选框组中，每个复选框的 `value` 属性必须唯一，否则可能导致选中状态异常。
3. 自定义颜色仅在选中状态下生效。