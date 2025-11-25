/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 15:55:18
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 18:03:08
 * @FilePath: \minad-ui\docs\.vitepress\config.ts
 * @Description:
 *
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Md UI',
  description: 'A Vue 3 Mobile UI Component Library',
  base: '/minad-ui/',
  lang: 'zh-CN', // 默认语言
  locales: {
    // 中文配置
    root: {
      lang: 'zh-CN',
      title: 'Md UI',
      description: 'Vue 3 移动端 UI 组件库',
      label: '中文',
      link: '/',
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: '首页', link: '/' },
          { text: '组件', link: '/components/button' },
          { text: '指南', link: '/guide/getting-started' },
          { text: '更新日志', link: '/changelog' },
          { 
            text: '语言', 
            items: [
              { text: '中文', link: '/' },
              { text: 'English', link: '/en/' }
            ]
          }
        ],
        sidebar: {
          '/components/': {
            items: [
              { text: 'Button 按钮', link: '/components/button' },
              { text: 'Icon 图标', link: '/components/icon' },
              { text: 'Input 输入框', link: '/components/input' },
              { text: 'Link 链接', link: '/components/link' },
              { text: 'Row 行', link: '/components/row' },
              { text: 'Col 列', link: '/components/col' },
              { text: 'Text 文本', link: '/components/text' }
            ]
          },
          '/guide/': {
            items: [
              { text: '入门指南', link: '/guide/getting-started' },
              { text: '安装指南', link: '/guide/installation' },
              { text: '快速开始', link: '/guide/quick-start' },
            ]
          }
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yourusername/minad-ui' }
        ]
      }
    },
    // 英文配置
    '/en/': {
      lang: 'en-US',
      title: 'Md UI',
      description: 'A Vue 3 Mobile UI Component Library',
      label: 'English',
      link: '/en/',
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Components', link: '/en/components/button' },
          { text: 'Guide', link: '/en/guide/getting-started' },
          { text: 'Changelog', link: '/en/changelog' },
          { 
            text: 'Language', 
            items: [
              { text: '中文', link: '/' },
              { text: 'English', link: '/en/' }
            ]
          }
        ],
        sidebar: {
          '/en/components/': {
            items: [
              { text: 'Button', link: '/en/components/button' },
              { text: 'Icon', link: '/en/components/icon' },
              { text: 'Input', link: '/en/components/input' },
              { text: 'Link', link: '/en/components/link' },
              { text: 'Row', link: '/en/components/row' },
              { text: 'Col', link: '/en/components/col' },
              { text: 'Text', link: '/en/components/text' }
            ]
          },
          '/en/guide/': {
            items: [
              { text: 'Getting Started', link: '/en/guide/getting-started' },
              { text: 'Installation', link: '/en/guide/installation' },
              { text: 'Quick Start', link: '/en/guide/quick-start' },
            ]
          }
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yourusername/minad-ui' }
        ]
      }
    }
  }
})
