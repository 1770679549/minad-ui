# Form

表单组件

## 基本用法

```vue
<template>
  <md-form v-model="formData">
    <md-form-item label="用户名" prop="username">
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 表单数据 | Object | - |
