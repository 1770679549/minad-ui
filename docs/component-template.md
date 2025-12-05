# 组件名称

简要描述组件的功能和用途。

## 引入方式

```vue
<!-- 方式一：全局引入 -->
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/lib/style.css'

const app = createApp()
app.use(MinadUI)

<!-- 方式二：按需引入 -->
import { MdComponent } from 'minad-ui'
import 'minad-ui/lib/components/component/style.css'

app.component('MdComponent', MdComponent)
```

## 基本用法

展示组件的最简使用方式。

```vue
<template>
  <md-component></md-component>
</template>
```

## 高级用法

展示组件的复杂配置和组合使用。

```vue
<template>
  <md-component prop1="value1" prop2="value2" @event="handleEvent">
    自定义内容
  </md-component>
</template>

<script setup>
const handleEvent = () => {
  // 处理事件
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| prop1 | 参数说明 | `type` | `option1`/`option2` | `default` |
| prop2 | 参数说明 | `type` | - | `default` |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| event | 事件说明 | `parameter: type` |

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| method | 方法说明 | `parameter: type` | `returnType` |

### Slots

| 插槽名 | 说明 | 作用域数据 |
| --- | --- | --- |
| default | 默认插槽 | - |
| custom | 自定义插槽 | `{ data: type }` |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-variable | `value` | 变量说明 |

## 示例

### 示例1：示例名称

```vue
<template>
  <md-component></md-component>
</template>
```

### 示例2：示例名称

```vue
<template>
  <md-component></md-component>
</template>
```

## FAQ

### 问题1

回答1

### 问题2

回答2

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 最新版 |
| Firefox | 最新版 |
| Safari | 最新版 |
| Edge | 最新版 |

## 注意事项

- 注意事项1
- 注意事项2
