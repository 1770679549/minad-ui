# Button

Buttons are used for triggering actions.

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

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| type | Button type | string | primary / secondary / success / warning / danger | primary |
| size | Button size | string | small / medium / large | medium |
| disabled | Whether the button is disabled | boolean | true / false | false |
| block | Whether the button takes up the full width | boolean | true / false | false |
| loading | Whether the button shows loading status | boolean | true / false | false |
| round | Whether the button is round | boolean | true / false | false |

### Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| click | Triggered when the button is clicked | - |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-button-primary-color | Primary button color | #409eff |
| $md-button-secondary-color | Secondary button color | #606266 |
| $md-button-success-color | Success button color | #67c23a |
| $md-button-warning-color | Warning button color | #e6a23c |
| $md-button-danger-color | Danger button color | #f56c6c |
| $md-button-border-radius | Button border radius | 4px |
| $md-button-min-height | Button minimum height | 40px |
| $md-button-font-size | Button font size | 14px |
| $md-button-padding | Button padding | 0 15px |