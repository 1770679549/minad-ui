/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-19 22:26:29
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 18:00:00
 * @FilePath: \minad-ui\src\index.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { App } from 'vue'

// 直接导入组件
import MdRow from './components/md-row/md-row.vue'
import MdCol from './components/md-col/md-col.vue'
import MdButton from './components/md-button/md-button.vue'
import MdInput from './components/md-input/md-input.vue'
import MdIcon from './components/md-icon/md-icon.vue'



// 全量安装
const install = (app: App): void => {
  app.component('MdRow', MdRow)
  app.component('MdCol', MdCol)
  app.component('MdButton', MdButton)
  app.component('MdInput', MdInput)
  app.component('MdIcon', MdIcon)
}

// 按需导入
export { MdRow, MdCol, MdButton, MdInput, MdIcon }

export default {
  install,
  version: '__VERSION__'
}
