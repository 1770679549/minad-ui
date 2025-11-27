# ConfigProvider 全局配置

ConfigProvider 是一个全局配置组件，可以为 MinAd UI 提供全局的配置选项。

## 基本用法

```vue
<template>
  <md-config-provider :locale="locale" size="small">
    <md-input />
    <md-button type="primary">按钮</md-button>
  </md-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MdConfigProvider, MdInput, MdButton } from 'minad-ui'

const locale = ref('zh-cn')
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| locale | 全局语言设置 | string | 'zh-cn' |
| size | 全局尺寸设置 | 'small' \| 'medium' \| 'large' | 'medium' |
| theme | 全局主题设置 | Record<string, any> | {} |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| update:locale | 语言变化时触发 | newLocale: string |
| update:size | 尺寸变化时触发 | newSize: string |
| update:theme | 主题变化时触发 | newTheme: Record<string, any> |

## 配置项说明

### locale

配置全局语言，支持的值：
- 'zh-cn' - 中文
- 'en' - 英文

### size

配置全局组件尺寸，支持的值：
- 'small' - 小尺寸
- 'medium' - 中等尺寸
- 'large' - 大尺寸

### theme

配置全局主题，可以自定义组件的颜色、字体等样式：

```vue
<template>
  <md-config-provider :theme="theme">
    <md-button type="primary">自定义主题按钮</md-button>
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

## 嵌套使用

ConfigProvider 支持嵌套使用，内层配置会覆盖外层配置：

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

## 结合国际化使用

ConfigProvider 与国际化功能紧密结合，可以轻松实现全局语言切换：

```vue
<template>
  <div>
    <md-button @click="switchLocale('zh-cn')">中文</md-button>
    <md-button @click="switchLocale('en')">English</md-button>
    
    <md-config-provider :locale="currentLocale">
      <md-form>
        <md-form-item label="用户名">
          <md-input v-model="username" placeholder="请输入用户名" />
        </md-form-item>
        <md-form-item label="密码">
          <md-input v-model="password" type="password" placeholder="请输入密码" />
        </md-form-item>
        <md-button type="primary" @click="submit">提交</md-button>
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
  console.log('提交', { username: username.value, password: password.value })
}
</script>
```
