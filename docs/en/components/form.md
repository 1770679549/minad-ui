# Form

Form component

## Basic Usage

```vue
<template>
  <md-form v-model="formData">
    <md-form-item label="Username" prop="username">
      <md-input v-model="formData.username"></md-input>
    </md-form-item>
  </md-form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: ''
})
</script>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Form data | Object | - |
