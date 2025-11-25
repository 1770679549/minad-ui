# Text

Text component for displaying text with various styles.

## Basic Usage

```vue
<template>
  <md-text>Default Text</md-text>
</template>
```

## Text Type

```vue
<template>
  <md-text type="primary">Primary Text</md-text>
  <md-text type="success">Success Text</md-text>
  <md-text type="warning">Warning Text</md-text>
  <md-text type="danger">Danger Text</md-text>
</template>
```

## Text Size

```vue
<template>
  <md-text size="small">Small Text</md-text>
  <md-text size="medium">Medium Text</md-text>
  <md-text size="large">Large Text</md-text>
</template>
```

## Bold and Italic

```vue
<template>
  <md-text bold>Bold Text</md-text>
  <md-text italic>Italic Text</md-text>
  <md-text bold italic>Bold Italic Text</md-text>
</template>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| type | Text type | string | primary / success / warning / danger / info | default |
| size | Text size | string | small / medium / large | medium |
| bold | Whether the text is bold | boolean | true / false | false |
| italic | Whether the text is italic | boolean | true / false | false |
| underline | Whether the text is underlined | boolean | true / false | false |
| delete | Whether the text has a delete line | boolean | true / false | false |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-text-primary-color | Primary text color | #409eff |
| $md-text-success-color | Success text color | #67c23a |
| $md-text-warning-color | Warning text color | #e6a23c |
| $md-text-danger-color | Danger text color | #f56c6c |
| $md-text-small-size | Small text size | 12px |
| $md-text-medium-size | Medium text size | 14px |
| $md-text-large-size | Large text size | 16px |
| $md-transition | Text transition effect | all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) |