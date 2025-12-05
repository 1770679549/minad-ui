/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 15:55:18
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-28 17:47:54
 * @FilePath: \minad-ui\docs\.vitepress\config.ts
 * @Description:
 *
 */
import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'Md UI',
  description: 'A Vue 3 Mobile UI Component Library',
  base: '/minad-ui/',
  lang: 'zh-CN', // 默认语言
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    // 中文配置（默认语言，root）
    root: {
      lang: 'zh-CN',
      title: 'Md UI',
      description: 'Vue 3 移动端 UI 组件库',
      label: '中文',
      link: '/zh/',
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/getting-started'
          },
          { text: '组件', link: '/zh/components/button' },
          { text: '更新日志', link: '/zh/changelog' },

        ],
        sidebar: {
          '/zh/components/': [
            {
              text: '基础组件',
              items: [
                { text: 'Button 按钮', link: '/zh/components/button' },
                { text: 'Icon 图标', link: '/zh/components/icon' },
                { text: 'Link 链接', link: '/zh/components/link' },
                { text: 'Text 文本', link: '/zh/components/text' }
              ]
            },
            {
              text: '布局组件',
              items: [
                { text: 'Row 行', link: '/zh/components/row' },
                { text: 'Col 列', link: '/zh/components/col' }
              ]
            },
            {
              text: '表单组件',
              items: [
                { text: 'Input 输入框', link: '/zh/components/input' }
              ]
            }
          ],
          '/zh/guide/': [
            {
              text: '开发指南',
              items: [
                { text: '入门指南', link: '/zh/guide/getting-started' },
                { text: '安装指南', link: '/zh/guide/installation' },
                { text: '快速开始', link: '/zh/guide/quick-start' },
                { text: '国际化', link: '/zh/guide/i18n' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yourusername/minad-ui' }
        ]
      }
    },
    // 英文配置
    en: {
      lang: 'en-US',
      title: 'Md UI',
      description: 'A Vue 3 Mobile UI Component Library',
      label: 'English',
      link: '/en/',
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: 'Guide', link: '/en/guide/getting-started' },
          { text: 'Components', link: '/en/components/button' },
          { text: 'Changelog', link: '/en/changelog' },
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
  ,
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/uni_modules/minad-ui/styles/_variables.scss" as *;
            @use "@/uni_modules/minad-ui/styles/_base.scss" as *;
            @use "@/uni_modules/minad-ui/styles/_index.scss" as *;
            @use "@/uni_modules/minad-ui/styles/_components.scss" as *;
            @use "@/uni_modules/minad-ui/styles/_element-icons.scss" as *;
          `
        }
      }
    }
  }
})
