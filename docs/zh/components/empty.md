# Empty 空状态

空状态组件用于在数据为空时显示友好的提示信息，支持自定义图片、图标、文本和操作按钮。

## 引入

### 按需引入

```javascript
import { MdEmpty } from 'minad-ui'
```

## 基础用法

```html
<md-empty />
```

## 高级用法

### 自定义标题和描述

```html
<md-empty
  title="暂无数据"
  description="请点击按钮刷新数据"
/>
```

### 自定义图片

```html
<md-empty
  image="/empty.png"
  title="暂无数据"
  description="请点击按钮刷新数据"
/>
```

### 自定义图标

```html
<md-empty
  icon="search"
  icon-size="80"
  title="没有找到结果"
  description="请尝试其他搜索关键词"
/>
```

### 自定义按钮

```html
<md-empty
  title="暂无数据"
  button-text="刷新"
  @button-click="handleRefresh"
/>
```

### 不同按钮类型

```html
<md-empty
  title="暂无数据"
  button-text="重试"
  button-type="danger"
/>
```

### 不同按钮尺寸

```html
<md-empty
  title="暂无数据"
  button-text="刷新"
  button-size="small"
/>
```

### 隐藏按钮

```html
<md-empty
  title="暂无数据"
  description="请稍后再试"
  show-button="false"
/>
```

### 使用插槽自定义内容

```html
<md-empty>
  <template #image>
    <view class="custom-image">
      <image src="/custom-empty.png" />
    </view>
  </template>
  <template #title>
    <text class="custom-title">自定义标题</text>
  </template>
  <template #description>
    <text class="custom-description">这是一段自定义的描述文字</text>
  </template>
  <template #action>
    <md-button type="primary" size="small">操作1</md-button>
    <md-button type="success" size="small">操作2</md-button>
  </template>
</md-empty>
```

## API

### Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| image | `string` | - | 自定义图片地址 |
| icon | `string` | - | 图标名称 |
| icon-size | `number \| string` | `64` | 图标大小 |
| title | `string` | - | 标题文本 |
| description | `string` | - | 描述文本 |
| button-text | `string` | - | 按钮文本 |
| button-type | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | 按钮类型 |
| button-size | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| show-button | `boolean` | `true` | 是否显示按钮 |
| custom-class | `string` | - | 自定义类名 |

### Events

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| button-click | - | 按钮点击事件 |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| image | 自定义图片区域 |
| title | 自定义标题区域 |
| description | 自定义描述区域 |
| action | 自定义操作按钮区域 |
| default | 自定义内容区域 |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-empty-padding | `$md-spacing-xl $md-spacing-md` | 空状态组件内边距 |
| $md-empty-icon-color | `$md-color-text-placeholder` | 图标颜色 |
| $md-empty-title-font-size | `$md-size-large` | 标题字体大小 |
| $md-empty-description-font-size | `$md-size-medium` | 描述字体大小 |

## FAQ

### Q: 如何完全自定义空状态的样式？
A: 可以使用 `custom-class` 属性添加自定义类名，或者通过插槽完全自定义内容。

### Q: 图片和图标可以同时使用吗？
A: 不可以，图片的优先级高于图标，如果同时设置了图片和图标，只会显示图片。

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## 注意事项

1. 图片尺寸会影响空状态组件的整体高度。
2. 描述文本过长时会自动换行，建议控制文本长度。
3. 按钮类型和尺寸与 Button 组件的类型和尺寸保持一致。