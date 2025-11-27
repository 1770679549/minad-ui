<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-27 09:00:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-27 18:10:19
 * @FilePath: \minad-ui\src\components\md-config-provider\md-config-provider.vue
 * @Description: ConfigProvider 全局配置组件
 *
-->
<template>
  <view>
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { provide, watch, inject, reactive } from 'vue'
import type { Locale } from '../../i18n/types'
import { createI18n, setI18nInstance } from '../../i18n/i18n'
import type { ConfigProviderProps } from './type'

// 定义组件属性
const props = defineProps<ConfigProviderProps>()

// 创建i18n实例
const i18nInstance = createI18n({
  locale: props.locale || 'zh-cn'
})

// 设置全局i18n实例
setI18nInstance(i18nInstance)

// 创建响应式配置对象
const config = reactive({
  locale: props.locale || 'zh-cn',
  theme: props.theme || 'light',
  size: props.size || 'medium'
})

// 提供全局配置
provide('mdConfig', config)

// 提供i18n实例
provide('mdI18n', i18nInstance)

// 监听locale变化
watch(() => props.locale, (newLocale) => {
  if (newLocale) {
    i18nInstance.setLocale(newLocale)
    config.locale = newLocale
  }
})

// 监听theme变化
watch(() => props.theme, (newTheme) => {
  if (newTheme) {
    config.theme = newTheme
  }
})

// 监听size变化
watch(() => props.size, (newSize) => {
  if (newSize) {
    config.size = newSize
  }
})
</script>

<style lang="scss" scoped>
/* ConfigProvider组件不需要特定样式 */
</style>
