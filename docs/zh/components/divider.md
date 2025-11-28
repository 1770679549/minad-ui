# Divider 分隔线

分隔线组件用于在页面中创建水平分隔线，支持自定义类型、位置和内容。

## 引入

### 按需引入

```javascript
import { MdDivider } from 'minad-ui'
```

## 基础用法

```html
<md-divider />
```

## 高级用法

### 虚线样式

```html
<md-divider dashed />
```

### 不同类型

```html
<md-divider type="primary" />
<md-divider type="success" />
<md-divider type="warning" />
<md-divider type="danger" />
<md-divider type="info" />
<md-divider type="default" />
```

### 带文本标签

```html
<md-divider tag="文本标签" />
<md-divider tag="左侧标签" position="left" />
<md-divider tag="右侧标签" position="right" />
```

### 带图片

```html
<md-divider image="/logo.svg" />
<md-divider image="/logo.svg" position="left" />
<md-divider image="/logo.svg" position="right" />
```

### 图片和标签组合

```html
<md-divider image="/logo.svg" tag="组合示例" />
```

### 自定义图片尺寸

```html
<md-divider image="/logo.svg" image-size="32" />
```

### 自定义标签尺寸

```html
<md-divider tag="大标签" tag-size="large" />
<md-divider tag="中标签" tag-size="medium" />
<md-divider tag="小标签" tag-size="small" />
```

## API

### Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | `'default'` | 分隔线类型 |
| position | `'left' \| 'center' \| 'right'` | `'center'` | 内容位置 |
| dashed | `boolean` | `false` | 是否为虚线 |
| image | `string` | - | 图片地址 |
| imageAlt | `string` | - | 图片alt属性 |
| tag | `string` | - | 标签文本 |
| imageSize | `number` | `24` | 图片尺寸 |
| tagSize | `'large' \| 'medium' \| 'small'` | `'medium'` | 标签尺寸 |

## 样式变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| $md-divider-height | `$md-spacing-lg` | 分隔线高度 |
| $md-divider-margin | `$md-spacing-md 0` | 分隔线外边距 |
| $md-divider-border-color | `$md-color-border` | 分隔线颜色 |
| $md-divider-tag-font-size | `$md-size-medium` | 标签默认字体大小 |

## FAQ

### Q: 如何自定义分隔线的颜色？
A: 可以通过修改CSS变量或自定义样式来改变分隔线颜色。

### Q: 图片和标签可以同时使用吗？
A: 可以，图片和标签会同时显示在分隔线的指定位置。

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## 注意事项

1. 图片尺寸会影响分隔线的整体高度。
2. 标签文本过长可能会导致布局问题，建议控制文本长度。
3. 当同时使用图片和标签时，它们会水平排列在指定位置。