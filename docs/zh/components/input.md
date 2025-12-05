# Input 输入框

### 基本用法

```vue
<template>
  <md-input v-model="value" placeholder="请输入内容"></md-input>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

### 禁用状态

```vue
<template>
  <md-input v-model="value" disabled placeholder="禁用状态"></md-input>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

### 只读状态

```vue
<template>
  <md-input v-model="value" readonly placeholder="只读状态"></md-input>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('只读内容')
</script>
```

### 尺寸

```vue
<template>
  <md-input v-model="value1" size="large" placeholder="大号输入框"></md-input>
  <md-input v-model="value2" size="medium" placeholder="中号输入框"></md-input>
  <md-input v-model="value3" size="small" placeholder="小号输入框"></md-input>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
```

### 前缀和后缀

```vue
<template>
  <md-input v-model="value1" placeholder="带前缀">
    <template #prefix>￥</template>
  </md-input>
  
  <md-input v-model="value2" placeholder="带后缀">
    <template #suffix>.com</template>
  </md-input>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>
```

### 输入类型

```vue
<template>
  <md-input v-model="text" type="text" placeholder="文本类型"></md-input>
  <md-input v-model="password" type="password" placeholder="密码类型"></md-input>
  <md-input v-model="number" type="number" placeholder="数字类型"></md-input>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const password = ref('')
const number = ref('')
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| v-model | 输入框的值 | `string \| number` | - | - |
| type | 输入框类型 | `string` | `text`/`password`/`number`/`email`/`tel` | `'text'` |
| placeholder | 占位符 | `string` | - | - |
| disabled | 是否禁用 | `boolean` | - | `false` |
| readonly | 是否只读 | `boolean` | - | `false` |
| size | 尺寸 | `string` | `large`/`medium`/`small` | `'medium'` |
| maxlength | 最大输入长度 | `number` | - | - |
| minlength | 最小输入长度 | `number` | - | - |
| step | 步长（仅在number类型时生效） | `number` | - | - |
| min | 最小值（仅在number类型时生效） | `number` | - | - |
| max | 最大值（仅在number类型时生效） | `number` | - | - |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| input | 输入时触发 | `event: Event` |
| focus | 聚焦时触发 | `event: FocusEvent` |
| blur | 失焦时触发 | `event: FocusEvent` |
| change | 内容改变时触发 | `event: Event` |
| keydown | 键盘按下时触发 | `event: KeyboardEvent` |
| keyup | 键盘释放时触发 | `event: KeyboardEvent` |

### Methods

| 方法名 | 说明 |
| --- | --- |
| focus | 使输入框获得焦点 |
| blur | 使输入框失去焦点 |
| select | 选中输入框内容 |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-color-primary | `#007aff` | 主要颜色 |
| $md-color-info | `#909399` | 信息颜色 |
| $md-border-radius | `4px` | 边框圆角 |
| $md-transition | `all 0.3s ease` | 过渡动画 |
