# Icon

Icon component for displaying icons.

## Basic Usage

```vue
<template>
  <md-icon name="success"></md-icon>
  <md-icon name="warning"></md-icon>
  <md-icon name="error"></md-icon>
  <md-icon name="info"></md-icon>
</template>
```

## Icon Size

```vue
<template>
  <md-icon name="success" size="16"></md-icon>
  <md-icon name="success" size="24"></md-icon>
  <md-icon name="success" size="32"></md-icon>
</template>
```

## Icon Color

```vue
<template>
  <md-icon name="success" color="#409eff"></md-icon>
  <md-icon name="success" color="#67c23a"></md-icon>
  <md-icon name="success" color="#e6a23c"></md-icon>
</template>
```

## Icon Rotation

```vue
<template>
  <md-icon name="arrow-right" :rotate="90"></md-icon>
  <md-icon name="arrow-right" :rotate="180"></md-icon>
  <md-icon name="arrow-right" :rotate="270"></md-icon>
</template>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| name | Icon name | string | success / warning / error / info / loading / arrow-left / arrow-right / arrow-up / arrow-down / close / search / plus / minus | success |
| size | Icon size (px) | number / string | - | 20 |
| color | Icon color | string | - | $md-icon-color |
| rotate | Icon rotation angle | number | - | 0 |
| spin | Whether the icon is spinning | boolean | true / false | false |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-icon-size | Default icon size | 20px |
| $md-icon-color | Default icon color | #606266 |
| $md-transition | Icon transition effect | all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) |