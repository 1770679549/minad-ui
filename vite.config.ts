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
      const fs = await import('fs/promises')
      const path = await import('path')

      console.log('开始复制组件文件...')

      // 确保目标目录存在
      await fs.mkdir('dist/components', { recursive: true })

      // 读取所有组件目录
      const componentsDir = 'src/components'
      const componentDirs = await fs.readdir(componentsDir, { withFileTypes: true })
        .then(dirs => dirs.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name))

      // 复制所有组件
      for (const componentDir of componentDirs) {
        const srcPath = path.join(componentsDir, componentDir)
        const destPath = path.join('dist/components', componentDir)
        await copyDirectory(srcPath, destPath)
        console.log(`✅ 已复制 ${componentDir} 组件`)
      }

      // 递归复制目录
      async function copyDirectory(src: string, dest: string) {
        await fs.mkdir(dest, { recursive: true })
        const entries = await fs.readdir(src, { withFileTypes: true })

        for (const entry of entries) {
          const srcPath = path.join(src, entry.name)
          const destPath = path.join(dest, entry.name)

          if (entry.isDirectory()) {
            await copyDirectory(srcPath, destPath)
          } else {
            await fs.copyFile(srcPath, destPath)
          }
        }
      }

      // 复制样式目录
      try {
        await fs.stat('src/styles')
        await copyDirectory('src/styles', 'dist/styles')
        console.log('✅ 已复制 styles 目录')
      } catch (error) {
        console.log('⚠️  styles 目录不存在，跳过复制')
      }

      // 复制 utils 目录（如果存在）
      try {
        await fs.stat('src/utils')
        await copyDirectory('src/utils', 'dist/utils')
        console.log('✅ 已复制 utils 目录')
      } catch (error) {
        console.log('⚠️  utils 目录不存在，跳过复制')
      }

      console.log('所有文件复制完成！')
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 共享配置
  const commonConfig = {
    plugins: [
      vue(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // 全局导入变量文件，这样每个组件就不需要单独导入了
          additionalData: '@use "./src/styles/variables" as *;'
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }

  if (mode === 'lib') {
    return {
      ...commonConfig,
      plugins: [
        ...commonConfig.plugins,
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
    }
  } else {
    return commonConfig
  }
})