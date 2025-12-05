# Installation Guide

## Prerequisites

- Node.js 16+ or 18+
- Vue 3.2+

## Installation Methods

### npm

```bash
npm install minad-ui
```

### yarn

```bash
yarn add minad-ui
```

### pnpm

```bash
pnpm add minad-ui
```

## Importing the Library

### Full Import

Import all components and styles in your main.js/ts file:

```javascript
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(MinadUI)
app.mount('#app')
```

### On-demand Import

If you only need to use a few components, you can import them on demand to reduce the bundle size:

```javascript
import { createApp } from 'vue'
import { Button, Input, Icon } from 'minad-ui'
import 'minad-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.use(Input)
app.use(Icon)
app.mount('#app')
```

## Usage Example

After installation and import, you can use the components in your Vue templates:

```vue
<template>
  <div>
    <md-button type="primary">Primary Button</md-button>
    <md-input placeholder="Please enter content"></md-input>
    <md-icon name="success"></md-icon>
  </div>
</template>
```

## Next Steps

- Check out the [Quick Start](quick-start.md) guide for more usage examples
- Browse the [Components](../components/button.md) documentation to learn about available components