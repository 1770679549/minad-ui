# Form Item

表单项组件，用于包裹表单控件，提供标签、验证等功能。

## 基本用法

```vue
<template>
  <md-form v-model="formData" :rules="rules">
    <md-form-item label="用户名" prop="username">
      <md-input v-model="formData.username" placeholder="请输入用户名"></md-input>
    </md-form-item>
    <md-form-item label="密码" prop="password">
      <md-input v-model="formData.password" type="password" placeholder="请输入密码"></md-input>
    </md-form-item>
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
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 标签文本 | string | - | - |
| prop | 字段名，用于表单验证 | string | - | - |
| required | 是否必填 | boolean | true / false | false |
| trigger | 验证触发方式 | string / Array<string> | blur / change | blur |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| validate | 验证事件 | valid: boolean, message: string |

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| validate | 验证当前表单项 | - | Promise<boolean> |
| clearValidate | 清除当前表单项的验证信息 | - | void |

## 样式变量

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| $md-form-item-margin-bottom | 表单项底部外边距 | 16px |
| $md-form-item-label-width | 标签宽度 | 80px |
| $md-form-item-label-color | 标签颜色 | #303133 |
| $md-form-item-error-color | 错误信息颜色 | #f56c6c |