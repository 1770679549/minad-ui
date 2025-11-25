/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 15:55:18
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 15:55:37
 * @FilePath: \minad-ui\docs\.vitepress\config.ts
 * @Description:
 *
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Md UI',
  description: 'A Vue 3 Mobile UI Component Library',
  base: '/minad-ui/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Changelog', link: '/changelog' },
    ],
    sidebar: {
      '/components/': {
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Row', link: '/components/row' },
          { text: 'Col', link: '/components/col' },
        ]
      },
      '/guide/': {
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' },
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/minad-ui' }
    ]
  }
})
