# Checkbox

Used for multiple selection in a group of options, supporting single selection, multiple selection and custom styles.

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
import { MdCheckbox, MdCheckboxGroup } from 'minad-ui'
import 'minad-ui/lib/components/checkbox/style.css'

app.component('MdCheckbox', MdCheckbox)
app.component('MdCheckboxGroup', MdCheckboxGroup)
```

## Basic Usage

Use `v-model` to bind the checked state.

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox v-model="checked">Agree to the agreement</md-checkbox>
    <div>Checked status: {{ checked ? 'Checked' : 'Unchecked' }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>
```

## Disabled State

Use the `disabled` property to disable the checkbox.

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox v-model="checked" disabled>Agree to the agreement</md-checkbox>
    <md-checkbox v-model="checked2" disabled>Checked and disabled</md-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const checked2 = ref(true)
</script>
```

## Checkbox with Border

Use the `border` property to add a border to the checkbox.

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox v-model="checked" border>With border</md-checkbox>
    <md-checkbox v-model="checked2" border disabled>Disabled with border</md-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const checked2 = ref(true)
</script>
```

## Custom Color

Use the `color` property to customize the color of the checked state.

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox v-model="checked" color="#ff6b6b">Red</md-checkbox>
    <md-checkbox v-model="checked2" color="#4ecdc4">Cyan</md-checkbox>
    <md-checkbox v-model="checked3" color="#45b7d1">Blue</md-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
</script>
```

## Checkbox Group

Use the `md-checkbox-group` component to create a checkbox group, supporting unified selected state management.

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox-group v-model="checkedValues">
      <md-checkbox value="option1">Option 1</md-checkbox>
      <md-checkbox value="option2">Option 2</md-checkbox>
      <md-checkbox value="option3">Option 3</md-checkbox>
    </md-checkbox-group>
    <div>Selected values: {{ checkedValues.join(', ') }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkedValues = ref([])
</script>
```

## Disabled Checkbox Group

```vue
<template>
  <div class="checkbox-demo">
    <md-checkbox-group v-model="checkedValues" disabled>
      <md-checkbox value="option1">Option 1</md-checkbox>
      <md-checkbox value="option2">Option 2</md-checkbox>
      <md-checkbox value="option3">Option 3</md-checkbox>
    </md-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkedValues = ref(['option1'])
</script>
```

## API

### Checkbox Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| modelValue | Whether it is checked, supports v-model | `boolean` | - | `false` |
| value | The value of the checkbox, used in checkbox groups | `any` | - | - |
| label | The label of the checkbox | `string` | - | - |
| disabled | Whether it is disabled | `boolean` | - | `false` |
| border | Whether to show border | `boolean` | - | `false` |
| color | Custom color | `string` | - | - |
| customClass | Custom class name | `string` | - | - |
| customStyle | Custom style | `object` | - | `{}` |

### Checkbox Emits

| Event Name | Description | Parameters |
| --- | --- | --- |
| update:modelValue | Triggered when the checked state changes | `checked: boolean` |
| change | Triggered when the checked state changes | `checked: boolean, value: any` |

### CheckboxGroup Props

| Parameter | Description | Type | Accepted Values | Default |
| --- | --- | --- | --- | --- |
| modelValue | The selected values, supports v-model | `any[]` | - | `[]` |
| disabled | Whether to disable all checkboxes | `boolean` | - | `false` |
| customClass | Custom class name | `string` | - | - |
| customStyle | Custom style | `object` | - | `{}` |

### CheckboxGroup Emits

| Event Name | Description | Parameters |
| --- | --- | --- |
| update:modelValue | Triggered when the selected values change | `values: any[]` |
| change | Triggered when the selected values change | `values: any[]` |

## Style Variables

| Variable | Default Value | Description |
| --- | --- | --- |
| $md-color-primary | `#007aff` | The color of the checked state |
| $md-color-border | `#dcdfe6` | The border color |
| $md-color-text | `#333333` | The text color |
| $md-color-text-grey | `#909399` | The text color in disabled state |
| $md-color-bg-disabled | `#f5f7fa` | The background color in disabled state |
| $md-size-medium | `16px` | The text size |
| $md-border-radius-base | `4px` | The border radius |
| $md-spacing-xs | `4px` | The spacing |
| $md-transition | `all 0.3s ease` | The transition animation |

## FAQ

### Q: How to customize the size of the checkbox?

A: You can customize the size of the checkbox through the `customStyle` property.

```vue
<md-checkbox 
  v-model="checked" 
  :customStyle="{ width: '24px', height: '24px' }"
>Large checkbox</md-checkbox>
```

### Q: How to get the selected values in a checkbox group?

A: Use `v-model` to bind the `modelValue` property of the checkbox group to get the selected value array.

```vue
<md-checkbox-group v-model="checkedValues">
  <md-checkbox value="option1">Option 1</md-checkbox>
  <md-checkbox value="option2">Option 2</md-checkbox>
</md-checkbox-group>
<div>Selected values: {{ checkedValues }}</div>
```

### Q: How to set default selected values?

A: In a checkbox group, you can set default selected values by initializing the `modelValue` array.

```vue
<script setup>
import { ref } from 'vue'

// Default select option1 and option3
const checkedValues = ref(['option1', 'option3'])
</script>
```

## Browser Compatibility

| Browser | Version |
| --- | --- |
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## Notes

1. When the checkbox is used in `md-checkbox-group`, the `modelValue` property will be ignored, and the selected state is controlled by `md-checkbox-group`.
2. In a checkbox group, each checkbox's `value` property must be unique, otherwise it may cause abnormal selected state.
3. Custom color only takes effect in the checked state.