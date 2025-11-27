# ConfigProvider 全局配置

用于提供全局配置，可设置语言、主题、尺寸等。

## 介绍

ConfigProvider 是一个全局配置组件，用于统一管理组件库的语言、主题和尺寸等配置。它采用 Vue 的 Provide/Inject 机制，将配置传递给所有子组件。

## 基础用法

### 设置语言

```vue
<template>
  <md-config-provider :locale="locale">
    <!-- 子组件将自动使用设置的语言 -->
    <md-button>{{ $t('button.confirm') }}</md-button>
  </md-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const locale = ref('zh-cn') // 支持 'zh-cn' 和 'en'
</script>
```

### 设置主题

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

const theme = ref('dark') // 支持 'light' 和 'dark'
</script>
```

### 设置组件尺寸

```vue
<template>
  <md-config-provider :size="size">
    <md-button>Button</md-button>
    <md-input placeholder="Input"></md-input>
  </md-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const size = ref('large') // 支持 'small', 'medium', 'large'
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 语言设置 | `'zh-cn' \| 'en'` | `'zh-cn'` |
| theme | 主题设置 | `'light' \| 'dark'` | `'light'` |
| size | 组件尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |

### 方法

ConfigProvider 组件不直接暴露方法，而是通过 Provide/Inject 机制提供配置。

## 国际化

### 支持的语言

- 中文 (zh-cn)
- 英文 (en)

### 自定义翻译

```vue
<template>
  <md-config-provider :locale="locale">
    <md-button>{{ $t('custom.button') }}</md-button>
  </md-config-provider>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '@/i18n/i18n'

const locale = ref('zh-cn')
const { mergeLocaleMessage } = useI18n()

onMounted(() => {
  // 添加自定义翻译
  mergeLocaleMessage('zh-cn', {
    custom: {
      button: '自定义按钮'
    }
  })
})
</script>
```

## 主题

### 自定义主题变量

ConfigProvider 组件支持通过 CSS 变量自定义主题。

```scss
:root {
  /* 主色调 */
  --md-primary-color: #1890ff;
  --md-primary-hover-color: #40a9ff;
  
  /* 文字颜色 */
  --md-text-color: #333333;
  --md-text-color-secondary: #666666;
  
  /* 背景颜色 */
  --md-background-color: #ffffff;
  --md-background-color-light: #f5f5f5;
}

/* 暗黑主题 */
[data-theme="dark"] {
  --md-primary-color: #40a9ff;
  --md-text-color: #ffffff;
  --md-text-color-secondary: #cccccc;
  --md-background-color: #1f1f1f;
  --md-background-color-light: #2f2f2f;
}
```

## 使用注意事项

1. ConfigProvider 应该包裹在应用的最外层，以便所有组件都能接收到配置。
2. 可以嵌套使用 ConfigProvider，内层配置会覆盖外层配置。
3. 语言设置会影响所有支持国际化的组件，包括表单验证提示、按钮文本等。
4. 主题设置会影响组件的颜色、背景等样式。
5. 尺寸设置会影响所有支持尺寸调整的组件。

## 示例代码

### 完整的应用配置

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
  locale: 'zh-cn',
  theme: 'light',
  size: 'medium'
})
</script>
```

### 动态切换语言

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

const currentLocale = ref('zh-cn')
const username = ref('')
const password = ref('')

const switchLanguage = (lang) => {
  currentLocale.value = lang
}
</script>
```
