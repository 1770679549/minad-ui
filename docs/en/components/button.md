# Button

Buttons are used for triggering actions, supporting multiple types, sizes and states.

## Installation

### Global Installation

```vue
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/lib/style.css'

const app = createApp()
app.use(MinadUI)
```

### On-demand Installation

```vue
import { MdButton } from 'minad-ui'
import 'minad-ui/lib/components/button/style.css'

app.component('MdButton', MdButton)
```

## Basic Usage

```vue
<template>
  <md-button type="primary">Primary Button</md-button>
  <md-button type="secondary">Secondary Button</md-button>
  <md-button type="success">Success Button</md-button>
  <md-button type="warning">Warning Button</md-button>
  <md-button type="danger">Danger Button</md-button>
</template>
```

## Disabled State

```vue
<template>
  <md-button type="primary" disabled>Disabled Button</md-button>
</template>
```

## Button Size

```vue
<template>
  <md-button type="primary" size="small">Small Button</md-button>
  <md-button type="primary" size="medium">Medium Button</md-button>
  <md-button type="primary" size="large">Large Button</md-button>
</template>
```

## Ghost Button

Use the `plain` attribute to create ghost buttons, the background of ghost buttons is transparent, and the text color is inherited from the parent element.

```vue
<template>
  <div class="button-demo">
    <md-button type="primary" plain>Primary Ghost Button</md-button>
    <md-button type="success" plain>Success Ghost Button</md-button>
    <md-button type="warning" plain>Warning Ghost Button</md-button>
    <md-button type="danger" plain>Danger Ghost Button</md-button>
    <md-button type="info" plain>Info Ghost Button</md-button>
  </div>
</template>
```

## Circle Button

Use the `circle` attribute to create circle buttons, usually used for icon buttons.

```vue
<template>
  <div class="button-demo">
    <md-button type="primary" circle>➕</md-button>
    <md-button type="success" circle>➖</md-button>
    <md-button type="warning" circle>✏️</md-button>
    <md-button type="danger" circle>🗑️</md-button>
    <md-button type="info" circle>ℹ️</md-button>
  </div>
</template>
```

## Icon Button

Nest icon components in buttons to create icon buttons.

```vue
<template>
  <div class="button-demo">
    <md-button type="primary">
      <md-icon name="search"></md-icon>
      Search
    </md-button>
    <md-button type="success">
      <md-icon name="plus"></md-icon>
      Add
    </md-button>
    <md-button type="warning">
      <md-icon name="edit"></md-icon>
      Edit
    </md-button>
    <md-button type="danger">
      <md-icon name="delete"></md-icon>
      Delete
    </md-button>
  </div>
</template>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| type | Button type | string | primary / success / warning / danger / info | primary |
| size | Button size | string | small / medium / large | medium |
| disabled | Whether the button is disabled | boolean | - | false |
| loading | Whether the button shows loading status | boolean | - | false |
| plain | Whether it is a ghost button | boolean | - | false |
| round | Whether it is a round button | boolean | - | false |
| circle | Whether it is a circle button | boolean | - | false |

### Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| click | Triggered when the button is clicked | - |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-color-primary | Primary button color | #007aff |
| $md-color-success | Success button color | #4cd964 |
| $md-color-warning | Warning button color | #f0ad4e |
| $md-color-danger | Danger button color | #dd524d |
| $md-color-info | Info button color | #909399 |
| $md-size-large | Large button font size | 20px |
| $md-size-medium | Medium button font size | 16px |
| $md-size-small | Small button font size | 12px |
| $md-transition | Transition animation | all 0.3s ease |
| $md-border-radius-base | Base border radius | 4px |
| $md-spacing-xs | Extra small spacing | 4px |
| $md-spacing-sm | Small spacing | 8px |
| $md-spacing-md | Medium spacing | 16px |
| $md-spacing-lg | Large spacing | 24px |
| $md-spacing-xl | Extra large spacing | 32px |

## FAQ

### Q: How to disable a button?

A: Use the `disabled` attribute to disable a button, disabled buttons cannot be clicked.

```vue
<md-button type="primary" disabled>Disabled Button</md-button>
```

### Q: How to display loading status?

A: Use the `loading` attribute to display loading status, loading buttons cannot be clicked.

```vue
<md-button type="primary" loading>Loading...</md-button>
```

### Q: How to customize button styles?

A: You can modify button styles by overriding CSS variables or using custom classes.

```vue
<template>
  <md-button class="custom-button">Custom Button</md-button>
</template>

<style scoped>
.custom-button {
  --md-color-primary: #ff6b6b;
  border-radius: 8px;
}
</style>
```

## Browser Compatibility

| Browser | Version |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## Notes

1. Buttons in `disabled` or `loading` state will not trigger click events.
2. Circle buttons `circle` are suitable for buttons containing a single icon or text, too much content may cause display anomalies.
3. It is recommended to choose the appropriate button type according to the actual scenario, use `primary` type for main operations, and other types for secondary operations.