/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-19 22:26:29
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-28 18:00:00
 * @FilePath: \minad-ui\src\index.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import type { App } from 'vue'
import { components } from './components'
import * as allComponents from './components'

// 全量安装
const install = (app: App): void => {
  Object.keys(components).forEach((key) => {
    const component = components[key as keyof typeof components]
    app.component(key, component)
  })
}

// 按需导入
export * from './components'

export default {
  install,
  version: '__VERSION__'
}
