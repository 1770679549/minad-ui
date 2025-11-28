# Radio 单选框

单选框组件，用于在多个选项中选择一个。

## 基本用法

### 单个单选框

```vue
<template>
  <md-radio v-model="checked" label="单选框" />
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>
```

### 单选框组

```vue
<template>
  <md-radio-group v-model="value">
    <md-radio value="option1" label="选项1" />
    <md-radio value="option2" label="选项2" />
    <md-radio value="option3" label="选项3" />
  </md-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('option1')
</script>
```

## 禁用状态

```vue
<template>
  <md-radio-group v-model="value" disabled>
    <md-radio value="option1" label="禁用选项1" />
    <md-radio value="option2" label="禁用选项2" />
  </md-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('option1')
</script>
```

## 自定义颜色

```vue
<template>
  <md-radio-group v-model="value">
    <md-radio value="option1" label="自定义颜色" color="#ff6b6b" />
    <md-radio value="option2" label="默认颜色" />
  </md-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('option1')
</script>
```

## 显示边框

```vue
<template>
  <md-radio-group v-model="value">
    <md-radio value="option1" label="带边框选项1" border />
    <md-radio value="option2" label="带边框选项2" border />
  </md-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('option1')
</script>
```

## Radio 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | boolean | false | 是否选中，支持 v-model |
| value | any | '' | 单选框值，在 radio-group 中使用 |
| label | string | '' | 单选框标签 |
| disabled | boolean | false | 是否禁用 |
| border | boolean | false | 是否显示边框 |
| color | string | '' | 自定义颜色 |
| customClass | string | '' | 自定义类名 |
| customStyle | Record<string, any> | {} | 自定义样式 |

## Radio 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 选中状态变化时触发 | checked: boolean |
| change | 选中状态变化时触发 | checked: boolean, value: any |

## RadioGroup 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | any | '' | 选中的值，支持 v-model |
| disabled | boolean | false | 是否禁用所有单选框 |
| customClass | string | '' | 自定义类名 |
| customStyle | Record<string, any> | {} | 自定义样式 |

## RadioGroup 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 选中值变化时触发 | value: any |
| change | 选中值变化时触发 | value: any |
