# Form Item

Form item component

## Basic Usage

```vue
<template>
  <md-form-item label="Username">
    <md-input v-model="username"></md-input>
  </md-form-item>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
</script>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| label | Label text | String | - |
