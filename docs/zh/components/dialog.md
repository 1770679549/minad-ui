# Dialog 对话框

### 介绍

对话框是一种模态弹窗组件，用于显示重要信息、确认操作或收集用户输入。它通常包含标题、内容区域和操作按钮。

### 引入

在页面中引入组件，详细介绍见[快速上手](#/zh/guide/quickstart)

```javascript
// 全局引入
import { createApp } from 'vue'
import App from './App.vue'
import MinadUI from 'minad-ui'
import 'minad-ui/dist/style.css'

const app = createApp(App)
app.use(MinadUI)
app.mount('#app')
```

```javascript
// 按需引入
import { MdDialog } from 'minad-ui'
```

## 基本用法

### 基础对话框

最简单的对话框，包含标题、内容和确认按钮。

```vue
<template>
  <md-button type="primary" @click="showDialog = true">打开对话框</md-button>
  <md-dialog
    v-model="showDialog"
    title="对话框标题"
    content="这是对话框的内容"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)

const onConfirm = () => {
  console.log('点击了确认按钮')
  showDialog.value = false
}

const onCancel = () => {
  console.log('点击了取消按钮')
  showDialog.value = false
}
</script>
```

### 带取消按钮的对话框

通过 `showCancelButton` 属性显示取消按钮。

```vue
<template>
  <md-button type="primary" @click="showDialog = true">打开对话框</md-button>
  <md-dialog
    v-model="showDialog"
    title="确认操作"
    content="确定要执行此操作吗？"
    showCancelButton
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)

const onConfirm = () => {
  console.log('确认执行操作')
  showDialog.value = false
}

const onCancel = () => {
  console.log('取消执行操作')
  showDialog.value = false
}
</script>
```

### 不同类型的对话框

支持多种预设类型的对话框，通过 `type` 属性设置。

```vue
<template>
  <md-button type="primary" @click="showSuccessDialog = true">成功提示</md-button>
  <md-button type="warning" @click="showWarningDialog = true">警告提示</md-button>
  <md-button type="danger" @click="showErrorDialog = true">错误提示</md-button>
  <md-button type="info" @click="showInfoDialog = true">信息提示</md-button>

  <!-- 成功对话框 -->
  <md-dialog
    v-model="showSuccessDialog"
    title="操作成功"
    content="您的操作已成功完成"
    type="success"
  />

  <!-- 警告对话框 -->
  <md-dialog
    v-model="showWarningDialog"
    title="警告"
    content="此操作可能会导致数据丢失，请谨慎操作"
    type="warning"
    showCancelButton
  />

  <!-- 错误对话框 -->
  <md-dialog
    v-model="showErrorDialog"
    title="操作失败"
    content="您的操作未能完成，请稍后重试"
    type="error"
  />

  <!-- 信息对话框 -->
  <md-dialog
    v-model="showInfoDialog"
    title="提示信息"
    content="这是一条重要的提示信息"
    type="info"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showSuccessDialog = ref(false)
const showWarningDialog = ref(false)
const showErrorDialog = ref(false)
const showInfoDialog = ref(false)
</script>
```

### 自定义按钮文本

通过 `confirmButtonText` 和 `cancelButtonText` 属性自定义按钮文本。

```vue
<template>
  <md-button type="primary" @click="showDialog = true">打开对话框</md-button>
  <md-dialog
    v-model="showDialog"
    title="确认删除"
    content="确定要删除这条记录吗？此操作不可恢复"
    showCancelButton
    confirmButtonText="删除"
    cancelButtonText="取消"
    confirmButtonType="danger"
    @confirm="onDelete"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)

const onDelete = () => {
  console.log('删除记录')
  showDialog.value = false
}
</script>
```

### 禁止点击遮罩层关闭

通过 `closeOnClickOverlay` 属性控制是否允许点击遮罩层关闭对话框。

```vue
<template>
  <md-button type="primary" @click="showDialog = true">打开对话框</md-button>
  <md-dialog
    v-model="showDialog"
    title="重要提示"
    content="请仔细阅读以下内容，点击确认按钮继续"
    closeOnClickOverlay="false"
    @confirm="onConfirm"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)

const onConfirm = () => {
  console.log('用户已阅读并确认')
  showDialog.value = false
}
</script>
```

### 自定义内容

使用插槽自定义对话框的标题和内容。

```vue
<template>
  <md-button type="primary" @click="showDialog = true">打开自定义对话框</md-button>
  <md-dialog v-model="showDialog" @confirm="onConfirm">
    <template #title>
      <div class="custom-title">
        <span class="title-icon">📢</span>
        自定义标题
      </div>
    </template>
    <template #default>
      <div class="custom-content">
        <p>这是自定义的对话框内容</p>
        <p>可以包含任意HTML元素</p>
        <md-input placeholder="请输入信息" v-model="inputValue" />
      </div>
    </template>
  </md-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)
const inputValue = ref('')

const onConfirm = () => {
  console.log('用户输入:', inputValue.value)
  showDialog.value = false
}
</script>

<style scoped>
.custom-title {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.title-icon {
  margin-right: 8px;
  font-size: 20px;
}

.custom-content {
  padding: 20px 0;
}

.custom-content p {
  margin: 10px 0;
}
</style>
```

### 自定义底部按钮

使用 `footer` 插槽完全自定义对话框的底部按钮区域。

```vue
<template>
  <md-button type="primary" @click="showDialog = true">打开对话框</md-button>
  <md-dialog v-model="showDialog" title="自定义按钮">
    <div>这是对话框的内容</div>
    <template #footer>
      <div class="custom-footer">
        <md-button type="info" text="了解更多" @click="onMore" />
        <md-button type="warning" text="稍后再说" @click="onLater" />
        <md-button type="primary" text="立即处理" @click="onHandle" />
      </div>
    </template>
  </md-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)

const onMore = () => {
  console.log('了解更多')
}

const onLater = () => {
  console.log('稍后再说')
  showDialog.value = false
}

const onHandle = () => {
  console.log('立即处理')
  showDialog.value = false
}
</script>

<style scoped>
.custom-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 控制对话框显示/隐藏 | `boolean` | `false` |
| title | 对话框标题 | `string` | - |
| content | 对话框内容 | `string` | - |
| type | 对话框类型 | `'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` |
| showConfirmButton | 是否显示确认按钮 | `boolean` | `true` |
| showCancelButton | 是否显示取消按钮 | `boolean` | `false` |
| confirmButtonText | 确认按钮文本 | `string` | `'确认'` |
| cancelButtonText | 取消按钮文本 | `string` | `'取消'` |
| confirmButtonType | 确认按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` |
| cancelButtonType | 取消按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'info'` |
| closeOnClickOverlay | 点击遮罩层是否关闭 | `boolean` | `true` |
| customClass | 自定义类名 | `string` | - |
| customStyle | 自定义样式 | `Record<string, any>` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 显示/隐藏状态变化时触发 | `value: boolean` |
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| close | 对话框关闭时触发 | - |
| open | 对话框打开时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 对话框内容 |
| title | 对话框标题 |
| footer | 对话框底部按钮区域 |

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| $dialog-border-radius | 对话框圆角 | `8px` |
| $dialog-header-padding | 标题区域内边距 | `20px 20px 12px` |
| $dialog-body-padding | 内容区域内边距 | `20px` |
| $dialog-footer-padding | 底部区域内边距 | `12px 20px` |
| $dialog-title-font-size | 标题字体大小 | `18px` |
| $dialog-title-color | 标题颜色 | `#303133` |
| $dialog-content-font-size | 内容字体大小 | `16px` |
| $dialog-content-color | 内容颜色 | `#606266` |
| $dialog-overlay-bg | 遮罩层背景色 | `rgba(0, 0, 0, 0.5)` |
| $dialog-border-color | 边框颜色 | `#ebeef5` |

## FAQ

### Q: 如何设置对话框的宽度？

A: 可以通过 `customStyle` 属性自定义对话框的宽度。

```vue
<md-dialog
  v-model="showDialog"
  title="自定义宽度"
  content="这是一个宽对话框"
  :customStyle="{ width: '600px' }"
/>
```

### Q: 如何在对话框中使用表单组件？

A: 可以在对话框的内容插槽中放置任意表单组件，如 Input、Select 等。

```vue
<md-dialog v-model="showDialog" title="表单对话框">
  <template #default>
    <div class="form-container">
      <md-input placeholder="请输入姓名" v-model="name" />
      <md-input placeholder="请输入邮箱" v-model="email" style="margin-top: 16px;" />
      <md-select v-model="gender" placeholder="请选择性别" style="margin-top: 16px;">
        <md-option label="男" value="male" />
        <md-option label="女" value="female" />
      </md-select>
    </div>
  </template>
</md-dialog>
```

### Q: 如何实现模态对话框？

A: Dialog 组件默认就是模态的，会阻止用户与页面其他部分交互。

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 80+ |

## 注意事项

1. Dialog 组件会被渲染到 body 标签下，使用 `teleport` 实现
2. 当同时设置 `content` 属性和默认插槽时，默认插槽会覆盖 `content` 内容
3. 使用 `footer` 插槽时，会完全覆盖默认的按钮区域
4. 对话框打开时会触发 `open` 事件，关闭时会触发 `close` 事件
5. 为了避免内存泄漏，对话框关闭时会自动清理相关事件监听器