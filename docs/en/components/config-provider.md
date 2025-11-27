# ConfigProvider Global Configuration

ConfigProvider is a global configuration component that provides global configuration options for MinAd UI.

## Basic Usage

```vue
<template>
  <md-config-provider :locale="locale" size="small">
    <md-input />
    <md-button type="primary">Button</md-button>
  </md-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MdConfigProvider, MdInput, MdButton } from 'minad-ui'

const locale = ref('en')
</script>
```

## API

### Props

| Parameter | Description | Type | Default |
|-----------|-------------|------|---------|
| locale | Global language setting | string | 'zh-cn' |
| size | Global component size | 'small' \| 'medium' \| 'large' | 'medium' |
| theme | Global theme setting | Record<string, any> | {} |

### Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| update:locale | Triggered when language changes | newLocale: string |
| update:size | Triggered when size changes | newSize: string |
| update:theme | Triggered when theme changes | newTheme: Record<string, any> |

## Configuration Items

### locale

Configure the global language, supported values:
- 'zh-cn' - Chinese
- 'en' - English

### size

Configure the global component size, supported values:
- 'small' - Small size
- 'medium' - Medium size
- 'large' - Large size

### theme

Configure the global theme, you can customize the color, font and other styles of components:

```vue
<template>
  <md-config-provider :theme="theme">
    <md-button type="primary">Custom Theme Button</md-button>
  </md-config-provider>
</template>

<script setup lang="ts">
import { MdConfigProvider, MdButton } from 'minad-ui'

const theme = {
  primaryColor: '#409eff',
  successColor: '#67c23a',
  warningColor: '#e6a23c',
  dangerColor: '#f56c6c',
  infoColor: '#909399'
}
</script>
```

## Nested Usage

ConfigProvider supports nested usage, inner configuration will override outer configuration:

```vue
<template>
  <md-config-provider locale="zh-cn">
    <div>
      <md-button type="primary">中文按钮</md-button>
      <md-config-provider locale="en">
        <md-button type="primary">English Button</md-button>
      </md-config-provider>
    </div>
  </md-config-provider>
</template>

<script setup lang="ts">
import { MdConfigProvider, MdButton } from 'minad-ui'
</script>
```

## Use with Internationalization

ConfigProvider is closely integrated with internationalization functionality, making it easy to implement global language switching:

```vue
<template>
  <div>
    <md-button @click="switchLocale('zh-cn')">中文</md-button>
    <md-button @click="switchLocale('en')">English</md-button>
    
    <md-config-provider :locale="currentLocale">
      <md-form>
        <md-form-item label="Username">
          <md-input v-model="username" placeholder="Please enter username" />
        </md-form-item>
        <md-form-item label="Password">
          <md-input v-model="password" type="password" placeholder="Please enter password" />
        </md-form-item>
        <md-button type="primary" @click="submit">Submit</md-button>
      </md-form>
    </md-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MdConfigProvider, MdForm, MdFormItem, MdInput, MdButton } from 'minad-ui'

const currentLocale = ref('zh-cn')
const username = ref('')
const password = ref('')

const switchLocale = (locale: string) => {
  currentLocale.value = locale
}

const submit = () => {
  console.log('Submit', { username: username.value, password: password.value })
}
</script>
```
