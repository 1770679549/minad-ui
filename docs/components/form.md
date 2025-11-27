# Form

表单组件，用于收集和验证用户输入。

## 基本用法

```vue
<template>
  <md-form v-model="formData" :rules="rules" @submit="handleSubmit">
    <md-form-item label="用户名" prop="username">
      <md-input v-model="formData.username" placeholder="请输入用户名"></md-input>
    </md-form-item>
    <md-form-item label="密码" prop="password">
      <md-input v-model="formData.password" type="password" placeholder="请输入密码"></md-input>
    </md-form-item>
    <md-button type="primary" @click="handleSubmit">提交</md-button>
  </md-form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { required: true, message: '密码长度不能少于6位', trigger: 'blur' }
  ]
}

const handleSubmit = () => {
  console.log('表单数据:', formData.value)
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue | 表单数据对象 | Record<string, any> | - | - |
| rules | 表单验证规则 | FormRules | - | - |

### FormRules

```typescript
interface FormRules {
  [key: string]: Array<{
    required?: boolean
    message: string
    trigger?: 'blur' | 'change'
  }>
}
```

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| submit | 表单提交事件 | values: Record<string, any> |
| validate | 表单验证事件 | prop: string, valid: boolean, message: string |

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| validate | 验证表单或单个字段 | prop?: string | Promise<boolean> |
| clearValidate | 清除表单或单个字段的验证信息 | prop?: string | void |

## 样式变量

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| $md-form-background-color | 表单背景颜色 | #ffffff |
| $md-form-padding | 表单内边距 | 0px |