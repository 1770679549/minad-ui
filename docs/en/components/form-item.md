# Form Item

Form item component for wrapping form controls, providing labels and validation functionality.

## Basic Usage

```vue
<template>
  <md-form v-model="formData" :rules="rules">
    <md-form-item label="Username" prop="username">
      <md-input v-model="formData.username" placeholder="Please enter username"></md-input>
    </md-form-item>
    <md-form-item label="Password" prop="password">
      <md-input v-model="formData.password" type="password" placeholder="Please enter password"></md-input>
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
    { required: true, message: 'Please enter username', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please enter password', trigger: 'blur' }
  ]
}
</script>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| label | Label text | string | - | - |
| prop | Field name, used for form validation | string | - | - |
| required | Whether the field is required | boolean | true / false | false |
| trigger | Validation trigger method | string / Array<string> | blur / change | blur |

### Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| validate | Validation event | valid: boolean, message: string |

### Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| validate | Validate the current form item | - | Promise<boolean> |
| clearValidate | Clear validation information for current form item | - | void |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-form-item-margin-bottom | Form item bottom margin | 16px |
| $md-form-item-label-width | Label width | 80px |
| $md-form-item-label-color | Label color | #303133 |
| $md-form-item-error-color | Error message color | #f56c6c |