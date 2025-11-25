/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 16:36:08
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 16:36:11
 * @FilePath: \minad-ui\vue-test.js
 * @Description:
 *
 */
// 简单的Vue应用测试文件
import { createApp } from 'vue'
import MinAdUI from './dist/minad-ui.es.js'
import './dist/style.css'

const app = createApp({
  template: `
    <div style="padding: 20px;">
      <h1>MinAd UI组件测试</h1>

      <!-- 测试按钮组件 -->
      <h2>按钮组件</h2>
      <md-button type="primary">主要按钮</md-button>
      <md-button type="success">成功按钮</md-button>
      <md-button type="warning">警告按钮</md-button>
      <md-button type="danger">危险按钮</md-button>
      <md-button type="info">信息按钮</md-button>
      <br><br>
      <md-button type="primary" size="large">大按钮</md-button>
      <md-button type="primary" size="medium">中按钮</md-button>
      <md-button type="primary" size="small">小按钮</md-button>
      <br><br>
      <md-button type="primary" disabled>禁用按钮</md-button>

      <!-- 测试输入框组件 -->
      <h2>输入框组件</h2>
      <md-input placeholder="普通输入框"></md-input>
      <br>
      <md-input placeholder="禁用输入框" disabled></md-input>
      <br>
      <md-input placeholder="只读输入框" readonly value="只读内容"></md-input>
      <br>
      <md-input placeholder="大尺寸输入框" size="large"></md-input>
      <br>
      <md-input placeholder="小尺寸输入框" size="small"></md-input>

      <!-- 测试栅格组件 -->
      <h2>栅格组件</h2>
      <md-row>
        <md-col span="8">
          <div style="background-color: #f0f0f0; padding: 10px; text-align: center;">8列</div>
        </md-col>
        <md-col span="8">
          <div style="background-color: #e0e0e0; padding: 10px; text-align: center;">8列</div>
        </md-col>
        <md-col span="8">
          <div style="background-color: #d0d0d0; padding: 10px; text-align: center;">8列</div>
        </md-col>
      </md-row>
      <br>
      <md-row gutter>
        <md-col span="6">
          <div style="background-color: #f0f0f0; padding: 10px; text-align: center;">有间距的6列</div>
        </md-col>
        <md-col span="6">
          <div style="background-color: #e0e0e0; padding: 10px; text-align: center;">有间距的6列</div>
        </md-col>
        <md-col span="6">
          <div style="background-color: #d0d0d0; padding: 10px; text-align: center;">有间距的6列</div>
        </md-col>
        <md-col span="6">
          <div style="background-color: #c0c0c0; padding: 10px; text-align: center;">有间距的6列</div>
        </md-col>
      </md-row>
    </div>
  `
})

app.use(MinAdUI)
app.mount('#app')
