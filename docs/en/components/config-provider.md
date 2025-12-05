# ConfigProvider

Global configuration component for setting language, theme, and size.

## Introduction

ConfigProvider is a global configuration component used to uniformly manage the language, theme, and size of components. It uses Vue's Provide/Inject mechanism to pass configurations to all child components.

## Basic Usage

### Setting Language

```vue
<template>
  <md-config-provider :locale="locale">
    <!-- Child components will automatically use the set language -->
    <md-button>{{ $t('button.confirm') }}</md-button>
  </md-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const locale = ref('en') // Supports 'zh-cn' and 'en'
</script>
```

### Setting Theme

```vue
<template>
  <md-config-provider :theme="theme">
    <md-card>
      <md-button type="primary">Primary Button</md-button>
    </md-card>
  </md-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('dark') // Supports 'light' and 'dark'
</script>
```

### Setting Component Size

```vue
<template>
  <md-config-provider :size="size">
    <md-button>Button</md-button>
    <md-input placeholder="Input"></md-input>
  </md-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const size = ref('large') // Supports 'small', 'medium', 'large'
</script>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| locale | Language setting | `'zh-cn' \| 'en'` | `'zh-cn'` |
| theme | Theme setting | `'light' \| 'dark'` | `'light'` |
| size | Component size | `'small' \| 'medium' \| 'large'` | `'medium'` |

### Methods

ConfigProvider component does not directly expose methods, but provides configurations through the Provide/Inject mechanism.

## Internationalization

### Supported Languages

- Chinese (zh-cn)
- English (en)

### Custom Translation

```vue
<template>
  <md-config-provider :locale="locale">
    <md-button>{{ $t('custom.button') }}</md-button>
  </md-config-provider>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '@/i18n/i18n'

const locale = ref('en')
const { mergeLocaleMessage } = useI18n()

onMounted(() => {
  // Add custom translation
  mergeLocaleMessage('en', {
    custom: {
      button: 'Custom Button'
    }
  })
})
</script>
```

## Theme

### Custom Theme Variables

ConfigProvider component supports custom themes through CSS variables.

```scss
:root {
  /* Primary color */
  --md-primary-color: #1890ff;
  --md-primary-hover-color: #40a9ff;
  
  /* Text color */
  --md-text-color: #333333;
  --md-text-color-secondary: #666666;
  
  /* Background color */
  --md-background-color: #ffffff;
  --md-background-color-light: #f5f5f5;
}

/* Dark theme */
[data-theme="dark"] {
  --md-primary-color: #40a9ff;
  --md-text-color: #ffffff;
  --md-text-color-secondary: #cccccc;
  --md-background-color: #1f1f1f;
  --md-background-color-light: #2f2f2f;
}
```

## Usage Notes

1. ConfigProvider should be wrapped around the outermost layer of the application so that all components can receive the configuration.
2. ConfigProvider can be nested, and inner configurations will override outer configurations.
3. Language settings will affect all components that support internationalization, including form validation prompts, button text, etc.
4. Theme settings will affect the color, background, and other styles of components.
5. Size settings will affect all components that support size adjustment.

## Example Code

### Complete Application Configuration

```vue
<template>
  <md-config-provider
    :locale="appConfig.locale"
    :theme="appConfig.theme"
    :size="appConfig.size"
  >
    <app-header />
    <main>
      <router-view />
    </main>
    <app-footer />
  </md-config-provider>
</template>

<script setup>
import { reactive } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const appConfig = reactive({
  locale: 'en',
  theme: 'light',
  size: 'medium'
})
</script>
```

### Dynamically Switching Language

```vue
<template>
  <md-config-provider :locale="currentLocale">
    <div>
      <md-button @click="switchLanguage('zh-cn')">中文</md-button>
      <md-button @click="switchLanguage('en')">English</md-button>
      
      <md-form>
        <md-form-item label="username">
          <md-input v-model="username" :placeholder="$t('input.placeholder')"></md-input>
        </md-form-item>
        <md-form-item label="password">
          <md-input v-model="password" type="password" :placeholder="$t('input.password')"></md-input>
        </md-form-item>
        <md-form-item>
          <md-button type="primary" block>{{ $t('button.login') }}</md-button>
        </md-form-item>
      </md-form>
    </div>
  </md-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const currentLocale = ref('en')
const username = ref('')
const password = ref('')

const switchLanguage = (lang) => {
  currentLocale.value = lang
}
</script>
```
