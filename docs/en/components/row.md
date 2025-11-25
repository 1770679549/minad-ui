# Row

Row component for grid layout.

## Basic Usage

```vue
<template>
  <md-row>
    <md-col span="12">Column 1</md-col>
    <md-col span="12">Column 2</md-col>
  </md-row>
</template>
```

## Flex Layout

```vue
<template>
  <md-row type="flex" justify="space-between">
    <md-col span="8">Column 1</md-col>
    <md-col span="8">Column 2</md-col>
    <md-col span="8">Column 3</md-col>
  </md-row>
</template>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| type | Layout type | string | flex | - |
| justify | Flex justify | string | start / end / center / space-around / space-between | start |
| align | Flex align | string | top / middle / bottom | top |
| gutter | Grid spacing | number | - | 0 |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-gutter | Default grid spacing | 0px |
| $md-flex-grow | Default flex grow value | 0 |
| $md-flex-shrink | Default flex shrink value | 1 |