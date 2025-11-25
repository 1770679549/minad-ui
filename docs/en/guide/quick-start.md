# Quick Start

This guide will help you quickly get started with Minad UI.

## Installation

First, install the Minad UI package:

```bash
npm install minad-ui
```

## Basic Usage

### Import and Register

#### Full Import

```javascript
// main.js
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(MinadUI)
app.mount('#app')
```

#### On-demand Import

```javascript
// main.js
import { createApp } from 'vue'
import { Button, Input } from 'minad-ui'
import 'minad-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.use(Input)
app.mount('#app')
```

### Use Components in Templates

```vue
<!-- App.vue -->
<template>
  <div class="app">
    <h1>Minad UI Quick Start</h1>
    
    <!-- Button Component -->
    <md-button type="primary" @click="handleClick">Primary Button</md-button>
    
    <!-- Input Component -->
    <md-input 
      v-model="inputValue" 
      placeholder="Please enter content"
      @input="handleInput"
    ></md-input>
    
    <!-- Icon Component -->
    <md-icon name="success" size="24"></md-icon>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')

const handleClick = () => {
  alert('Button clicked!')
}

const handleInput = (value) => {
  console.log('Input value:', value)
}
</script>

<style>
.app {
  padding: 20px;
}

md-button, md-input {
  margin-bottom: 20px;
  display: block;
}
</style>
```

## Component Properties and Events

Each component has its own properties and events. For example, the Button component supports the following properties:

```vue
<md-button 
  type="primary"        <!-- Button type: primary, secondary, success, warning, danger -->
  size="medium"         <!-- Button size: small, medium, large -->
  disabled="false"      <!-- Whether the button is disabled -->
  @click="handleClick"  <!-- Click event -->
>
  Click Me
</md-button>
```

The Input component supports properties like `v-model`, `placeholder`, `disabled`, etc., and events like `input`, `change`, `focus`, `blur`.

## Custom Theme

Minad UI supports theme customization. You can override the default Sass variables:

```scss
// custom-theme.scss
$md-color-primary: #409eff;
$md-color-success: #67c23a;
$md-color-warning: #e6a23c;
$md-color-danger: #f56c6c;

@import 'minad-ui/src/styles/index.scss';
```

Then import the custom theme instead of the default style:

```javascript
// main.js
import './custom-theme.scss'
// import 'minad-ui/dist/style.css' // Replace with custom theme
```

## Next Steps

- Check the [Components](../components/button.md) documentation for detailed usage of each component
- Explore the [Installation Guide](installation.md) for more installation options
- Learn about theme customization in the documentation