# Navbar 导航栏

导航栏组件，用于页面顶部导航，支持自定义标题、左右操作按钮和样式。

## 基础用法

```vue
<template>
  <md-navbar title="页面标题" />
</template>
```

## 自定义左右按钮

### 文字按钮

```vue
<template>
  <md-navbar 
    title="页面标题" 
    left-text="返回" 
    right-text="保存"
    @left-click="handleLeftClick"
    @right-click="handleRightClick"
  />
</template>

<script setup lang="ts">
const handleLeftClick = () => {
  console.log('左侧按钮点击')
}

const handleRightClick = () => {
  console.log('右侧按钮点击')
}
</script>
```

### 图标按钮

```vue
<template>
  <md-navbar 
    title="页面标题" 
    left-icon="back"
    right-icon="more"
    @left-click="handleLeftClick"
  />
</template>

<script setup lang="ts">
const handleLeftClick = () => {
  console.log('返回按钮点击')
}
</script>
```

## 自定义内容

```vue
<template>
  <md-navbar>
    <template #left>
      <view class="custom-button">
        <md-icon name="back"></md-icon>
        <text>返回</text>
      </view>
    </template>
    
    <template #center>
      <view class="custom-title">
        <md-icon name="home"></md-icon>
        <text>首页</text>
      </view>
    </template>
    
    <template #right>
      <view class="custom-actions">
        <md-icon name="search" class="action-icon"></md-icon>
        <md-icon name="notification" class="action-icon"></md-icon>
      </view>
    </template>
  </md-navbar>
</template>

<style scoped>
.custom-button,
.custom-title,
.custom-actions {
  display: flex;
  align-items: center;
}

.custom-button text,
.custom-title text {
  margin-left: 4px;
}

.action-icon {
  margin-left: 16px;
  font-size: 20px;
}
</style>
```

## 固定在顶部

```vue
<template>
  <md-navbar 
    title="固定导航栏" 
    fixed
    backgroundColor="#409eff"
    textColor="#ffffff"
  />
  
  <view class="content">
    <!-- 页面内容 -->
  </view>
</template>

<style scoped>
.content {
  padding: 20px;
}
</style>
```

## 自定义样式

```vue
<template>
  <md-navbar 
    title="自定义样式" 
    :height="50"
    backgroundColor="#67c23a"
    textColor="#ffffff"
    :bordered="false"
  />
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 导航栏标题 | `string` | - |
| left-text | 左侧文字 | `string` | - |
| left-icon | 左侧图标 | `string` | - |
| right-text | 右侧文字 | `string` | - |
| right-icon | 右侧图标 | `string` | - |
| height | 导航栏高度 | `number \| string` | `44` |
| backgroundColor | 背景颜色 | `string` | `#ffffff` |
| textColor | 文字颜色 | `string` | `#000000` |
| fixed | 是否固定在顶部 | `boolean` | `false` |
| bordered | 是否显示下边框 | `boolean` | `true` |
| left-clickable | 左侧区域是否可点击 | `boolean` | `true` |
| right-clickable | 右侧区域是否可点击 | `boolean` | `true` |
| customStyle | 自定义样式 | `CSSProperties` | `{}` |

## Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| left-click | 左侧区域点击时触发 | - |
| right-click | 右侧区域点击时触发 | - |

## Slots

| 名称 | 说明 |
| --- | --- |
| left | 左侧区域自定义内容 |
| center | 中间区域自定义内容，优先级高于 title 属性 |
| right | 右侧区域自定义内容 |

## 样式变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| --md-navbar-bg-color | 导航栏背景色 | `#ffffff` |
| --md-navbar-text-color | 导航栏文字颜色 | `#000000` |
| --md-navbar-height | 导航栏高度 | `44px` |
| --md-navbar-border-color | 导航栏边框颜色 | `#e5e5e5` |
| --md-navbar-font-size | 导航栏文字大小 | `14px` |
| --md-navbar-title-font-size | 导航栏标题文字大小 | `18px` |
| --md-navbar-z-index | 导航栏 z-index 值 | `1000` |
