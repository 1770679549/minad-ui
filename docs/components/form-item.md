# Form Item

表单项组件

## 基本用法

```vue
<template>
  <md-form-item label="用户名">
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签文本 | String | - |
