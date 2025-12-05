# Md UI

A Vue 3 Mobile UI Component Library

## Features

- 📱 Mobile-first design, adaptable to various mobile devices
- 💪 Built with Vue 3 Composition API
- 🎨 Modern design style with theme customization support
- 🚀 High performance, lightweight, no external dependencies
- 📦 Rich component library to meet various business needs
- 🔧 Simple and easy-to-use API with comprehensive documentation

## Quick Start

### Installation

Install with npm:

```bash
npm install minad-ui
```

Install with yarn:

```bash
yarn add minad-ui
```

Install with pnpm:

```bash
pnpm add minad-ui
```

### Import Components

#### Full Import

Import in main.js:

```javascript
import { createApp } from 'vue'
import MinadUI from 'minad-ui'
import 'minad-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(MinadUI)
app.mount('#app')
```

#### On-demand Import

Import only the components you need:

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

### Use Components

```vue
<template>
  <md-button type="primary" @click="handleClick">Click Me</md-button>
  <md-input v-model="value" placeholder="Please enter content"></md-input>
  <md-icon name="success"></md-icon>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const handleClick = () => {
  console.log('Button clicked')
}
</script>
```

## Documentation Directory

### Basics
- [Installation Guide](guide/installation.md)
- [Quick Start](guide/quick-start.md)

### Components
- [Button](components/button.md)
- [Icon](components/icon.md)
- [Input](components/input.md)
- [Link](components/link.md)
- [Text](components/text.md)
- [Row](components/row.md)
- [Col](components/col.md)

## Browser Support

- iOS 12+
- Android 6+
- Modern browsers (Chrome, Safari, Firefox, Edge)

## Contributing

Welcome to submit Issues and Pull Requests!

### Development Process

1. Clone the repository
2. Install dependencies: `npm install`
3. Develop components: `npm run dev`
4. Build component library: `npm run build:lib`
5. Build documentation: `npm run docs:build`

## License

MIT