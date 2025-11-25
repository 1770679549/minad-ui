# Input

Input component for text input.

## Basic Usage

```vue
<template>
  <md-input v-model="value" placeholder="Please enter content"></md-input>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## Disabled State

```vue
<template>
  <md-input v-model="value" placeholder="Disabled input" disabled></md-input>
</template>
```

## Read-only State

```vue
<template>
  <md-input v-model="value" placeholder="Read-only input" readonly></md-input>
</template>
```

## Input Size

```vue
<template>
  <md-input v-model="value" placeholder="Small size" size="small"></md-input>
  <md-input v-model="value" placeholder="Medium size" size="medium"></md-input>
  <md-input v-model="value" placeholder="Large size" size="large"></md-input>
</template>
```

## Prefix and Suffix

```vue
<template>
  <md-input v-model="value" placeholder="Input with prefix">
    <template #prefix>
      <md-icon name="search"></md-icon>
    </template>
  </md-input>
  
  <md-input v-model="value" placeholder="Input with suffix">
    <template #suffix>
      <md-icon name="close"></md-icon>
    </template>
  </md-input>
</template>
```

## Input Type

```vue
<template>
  <md-input v-model="value" type="password" placeholder="Password input"></md-input>
  <md-input v-model="value" type="number" placeholder="Number input"></md-input>
</template>
```

## API

### Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| v-model | Input value | string / number | - | - |
| type | Input type | string | text / password / number / email / tel | text |
| placeholder | Placeholder text | string | - | - |
| disabled | Whether the input is disabled | boolean | true / false | false |
| readonly | Whether the input is read-only | boolean | true / false | false |
| size | Input size | string | small / medium / large | medium |
| maxlength | Maximum input length | number | - | - |
| minlength | Minimum input length | number | - | - |
| autofocus | Whether to auto-focus | boolean | true / false | false |

### Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| input | Triggered when the input value changes | value: string |
| change | Triggered when the input loses focus and the value has changed | value: string |
| focus | Triggered when the input gains focus | - |
| blur | Triggered when the input loses focus | - |
| clear | Triggered when the clear button is clicked | - |

### Methods

| Method Name | Description | Parameters |
| --- | --- | --- |
| focus | Focus the input | - |
| blur | Blur the input | - |
| clear | Clear the input value | - |

## Style Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| $md-color-primary | Primary color | #409eff |
| $md-input-border-color | Input border color | #dcdfe6 |
| $md-input-background-color | Input background color | #ffffff |
| $md-input-text-color | Input text color | #303133 |