/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-19 22:26:29
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-19 23:24:45
 * @FilePath: \minad-ui\src\index.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { App } from 'vue'

// 直接导入组件
import MaRow from './components/ma-row/ma-row.vue'
import MaCol from './components/ma-col/ma-col.vue'

// 导入样式
import './index.scss'

// 全量安装
const install = (app: App): void => {
  app.component('MaRow', MaRow)
  app.component('MaCol', MaCol)
}

// 按需导入
export { MaRow, MaCol }

export default {
  install,
  version: '__VERSION__'
}