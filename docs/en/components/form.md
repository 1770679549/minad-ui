# Form

Form component for collecting and validating user input.

## Basic Usage

```vue
<template>
  <md-form v-model="formData" :rules="rules" @submit="handleSubmit">
    <md-form-item label="Username" prop="username">
      <md-input v-model="formData.username" placeholder="Please enter username"></md-input>
    </md-form-item>
    <md-form-item label="Password" prop="password">
      <md-input v-model="formData.password" type="password" placeholder="Please enter password"></md-input>
    </md-form-item>
    <md-button type="primary" @click="handleSubmit">Submit</md-button>
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
    { required: true, message: 'Please enter username', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please enter password', trigger: 'blur' },
    { required: true, message: 'Password length cannot be less than 6 characters', trigger: 'blur' }
  ]
}

const handleSubmit = () => {
  console.log('Form data:', formData.value)
}
</script>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| modelValue | Form data object | Record<string, any> | - | - |
| rules | Form validation rules | FormRules | - | - |

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

| Event Name | Description | Parameters |
| --- | --- | --- |
| submit | Form submit event | values: Record<string, any> |
| validate | Form validation event | prop: string, valid: boolean, message: string |

### Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| validate | Validate the form or a single field | prop?: string | Promise<boolean> |
| clearValidate | Clear form validation information | prop?: string | void |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-form-background-color | Form background color | #ffffff |
| $md-form-padding | Form padding | 0px |