import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { spawn } from 'child_process'

// 自定义插件，用于在构建完成后复制文件
function copyComponentsPlugin() {
  return {
    name: 'copy-components',
    async closeBundle() {
      const fs = await import('fs-extra')
      const path = await import('path')

      console.log('开始复制组件文件...')

      // 确保目标目录存在
      await fs.ensureDir('dist/components')

      // 复制 ma-row 组件
      await fs.copy('src/components/ma-row', 'dist/components/ma-row')
      console.log('✅ 已复制 ma-row 组件')

      // 复制 ma-col 组件
      await fs.copy('src/components/ma-col', 'dist/components/ma-col')
      console.log('✅ 已复制 ma-col 组件')

      // 复制样式目录
      if (await fs.pathExists('src/styles')) {
        await fs.copy('src/styles', 'dist/styles')
        console.log('✅ 已复制 styles 目录')
      }

      // 复制 utils 目录（如果存在）
      if (await fs.pathExists('src/utils')) {
        await fs.copy('src/utils', 'dist/utils')
        console.log('✅ 已复制 utils 目录')
      }

      console.log('所有文件复制完成！')
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [
        vue(),
        copyComponentsPlugin()
      ],
      build: {
        outDir: 'dist',
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'MinAdUI',
          fileName: (format) => `minad-ui.${format}.js`
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        }
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    }
  } else {
    return {
      plugins: [
        vue(),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    }
  }
})