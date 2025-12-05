# Link

Link component for navigation.

## Basic Usage

```vue
<template>
  <md-link href="https://example.com">Default Link</md-link>
</template>
```

## Link Type

```vue
<template>
  <md-link href="https://example.com" type="primary">Primary Link</md-link>
  <md-link href="https://example.com" type="success">Success Link</md-link>
  <md-link href="https://example.com" type="warning">Warning Link</md-link>
  <md-link href="https://example.com" type="danger">Danger Link</md-link>
</template>
```

## Disabled State

```vue
<template>
  <md-link href="https://example.com" disabled>Disabled Link</md-link>
</template>
```

## Underline

```vue
<template>
  <md-link href="https://example.com" :underline="false">No Underline</md-link>
  <md-link href="https://example.com" underline="hover">Underline on Hover</md-link>
  <md-link href="https://example.com" underline="always">Always Underline</md-link>
</template>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| href | Link URL | string | - | - |
| type | Link type | string | primary / success / warning / danger | primary |
| target | Target window | string | _self / _blank / _parent / _top | _self |
| disabled | Whether the link is disabled | boolean | true / false | false |
| underline | Underline style | string / boolean | true / false / hover / always | hover |

### Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| click | Triggered when the link is clicked | - |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-link-primary-color | Primary link color | #409eff |
| $md-link-success-color | Success link color | #67c23a |
| $md-link-warning-color | Warning link color | #e6a23c |
| $md-link-danger-color | Danger link color | #f56c6c |
| $md-link-disabled-color | Disabled link color | #c0c4cc |
| $md-link-font-size | Link font size | 14px |
| $md-link-line-height | Link line height | 20px |
| $md-link-transition | Link transition effect | color 0.3s |
| $md-link-underline-height | Link underline height | 1px |