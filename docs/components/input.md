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

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|--------|------|
| v-model | string/number | - | 输入框的值 |
| type | string | text | 输入框类型，可选值：text, password, number, email, tel |
| placeholder | string | - | 占位符 |
| disabled | boolean | false | 是否禁用 |
| readonly | boolean | false | 是否只读 |
| size | string | medium | 尺寸，可选值：large, medium, small |
| maxlength | number | - | 最大输入长度 |
| minlength | number | - | 最小输入长度 |
| step | number | - | 步长（仅在number类型时生效） |
| min | number | - | 最小值（仅在number类型时生效） |
| max | number | - | 最大值（仅在number类型时生效） |

### 事件

| 事件名 | 说明 | 参数 |
|-------|------|------|
| input | 输入时触发 | event: Event |
| focus | 聚焦时触发 | event: FocusEvent |
| blur | 失焦时触发 | event: FocusEvent |
| change | 内容改变时触发 | event: Event |
| keydown | 键盘按下时触发 | event: KeyboardEvent |
| keyup | 键盘释放时触发 | event: KeyboardEvent |

### 方法

| 方法名 | 说明 |
|-------|------|
| focus | 使输入框获得焦点 |
| blur | 使输入框失去焦点 |
| select | 选中输入框内容 |
