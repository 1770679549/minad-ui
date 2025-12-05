/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-28 10:17:17
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-05 14:39:29
 * @FilePath: \minad-ui\docs\.vitepress\theme\index.ts
 * @Description:
 *
 */
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DemoContainer from './components/DemoContainer.vue'
import './style.css'
import { defineAsyncComponent } from 'vue'
const DemoPanel = defineAsyncComponent(() => import('./components/DemoPanel.vue'))
import MinAdUI from '../../../src/index'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-top': () => h(DemoPanel)
    })
  },
  enhanceApp({ app }) {
    app.use(MinAdUI as any)
     app.component('DemoContainer', DemoContainer)
  }
}
