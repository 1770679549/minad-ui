# Col

Col component for grid layout, used with Row component.

## Basic Usage

```vue
<template>
  <md-row>
    <md-col span="8">Column 1</md-col>
    <md-col span="8">Column 2</md-col>
    <md-col span="8">Column 3</md-col>
  </md-row>
</template>
```

## Responsive Layout

```vue
<template>
  <md-row>
    <md-col :xs="24" :sm="12" :md="8" :lg="6">Responsive Column</md-col>
  </md-row>
</template>
```

## Offset and Order

```vue
<template>
  <md-row>
    <md-col span="8">Column 1</md-col>
    <md-col span="8" offset="8">Column 2 with Offset</md-col>
  </md-row>
  
  <md-row>
    <md-col span="8" order="3">Column 3</md-col>
    <md-col span="8" order="2">Column 2</md-col>
    <md-col span="8" order="1">Column 1</md-col>
  </md-row>
</template>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| span | Number of columns to occupy (1-24) | number | 1-24 | 24 |
| offset | Number of columns to offset (1-24) | number | 0-24 | 0 |
| order | Column order | number | - | 0 |
| xs | Number of columns on extra small screens (<576px) | number / object | 0-24 | - |
| sm | Number of columns on small screens (≥576px) | number / object | 0-24 | - |
| md | Number of columns on medium screens (≥768px) | number / object | 0-24 | - |
| lg | Number of columns on large screens (≥992px) | number / object | 0-24 | - |
| xl | Number of columns on extra large screens (≥1200px) | number / object | 0-24 | - |

### Responsive Configuration Object

```javascript
// For each responsive breakpoint, you can use an object to configure:
{
  span: 12,     // Number of columns to occupy
  offset: 6,    // Number of columns to offset
  order: 1      // Column order
}
```

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-grid-columns | Total number of grid columns | 24 |
| $md-gutter | Default grid spacing | 0px |
| $md-col-flex | Default column flex property | 0 0 auto |