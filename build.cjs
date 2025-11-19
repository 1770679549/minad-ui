/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-19 23:13:05
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-19 23:13:13
 * @FilePath: \minad-ui\build.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
const fs = require('fs-extra')
const { execSync } = require('child_process')
const path = require('path')

async function build() {
    console.log('开始构建组件库...')

    // 清空 dist 目录
    await fs.remove('dist')

    // 使用 Vite 构建
    console.log('Step 1: 使用 Vite 构建...')
    execSync('vite build', { stdio: 'inherit' })

    // 复制源码结构到 dist
    console.log('Step 2: 复制源码结构...')
    await copySourceStructure()

    console.log('构建完成！')
}

async function copySourceStructure() {
    const srcDirs = ['components', 'styles', 'utils']

    for (const dir of srcDirs) {
        const srcPath = path.join('src', dir)
        const distPath = path.join('dist', dir)

        if (await fs.pathExists(srcPath)) {
            await fs.copy(srcPath, distPath, {
                filter: (src) => {
                    // 过滤掉不需要的文件
                    return !src.includes('node_modules') &&
                        !src.includes('.test.') &&
                        !src.includes('.spec.')
                }
            })
            console.log(`✅ 已复制 ${dir} 目录`)
        }
    }

    // 复制 package.json 和其他必要文件
    await fs.copy('package.json', 'dist/package.json')
    await fs.copy('README.md', 'dist/README.md')
    await fs.copy('LICENSE', 'dist/LICENSE')
}

build().catch(console.error)