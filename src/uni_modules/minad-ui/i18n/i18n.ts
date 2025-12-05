// 国际化工具函数和翻译系统
import { ref, reactive, computed } from 'vue'
import type { Locale, LocaleMessages, I18nConfig, I18nInstance, TranslateOptions } from './types'
import enMessages from './locales/en'
import zhCNMessages from './locales/zh-cn'

// 默认配置
const defaultConfig: I18nConfig = {
  locale: 'zh-cn',
  fallbackLocale: 'en',
  messages: {
    en: enMessages,
    'zh-cn': zhCNMessages
  }
}

// 实现翻译函数
const translate = (key: string, messages: LocaleMessages, options?: TranslateOptions): string => {
  // 解析嵌套键
  const keys = key.split('.')
  let result: any = messages

  for (const k of keys) {
    if (result[k] === undefined) {
      return key // 如果找不到键，返回原始键
    }
    result = result[k]
  }

  if (typeof result !== 'string') {
    return key
  }

  // 替换参数
  if (options) {
    return result.replace(/\{([^}]+)\}/g, (_, placeholder) => {
      return options[placeholder] !== undefined ? String(options[placeholder]) : `{${placeholder}}`
    })
  }

  return result
}

// I18n类
class I18n implements I18nInstance {
  private _locale: Locale
  private _fallbackLocale: Locale
  private _messages: Record<Locale, LocaleMessages>

  constructor(config: Partial<I18nConfig> = {}) {
    const mergedConfig = { ...defaultConfig, ...config }
    this._locale = mergedConfig.locale
    this._fallbackLocale = mergedConfig.fallbackLocale
    this._messages = mergedConfig.messages
  }

  get locale(): Locale {
    return this._locale
  }

  set locale(value: Locale) {
    this._locale = value
  }

  get fallbackLocale(): Locale {
    return this._fallbackLocale
  }

  set fallbackLocale(value: Locale) {
    this._fallbackLocale = value
  }

  get messages(): Record<Locale, LocaleMessages> {
    return this._messages
  }

  // 翻译函数
  t(key: string, options?: TranslateOptions): string {
    let result = translate(key, this._messages[this._locale], options)

    // 如果当前语言找不到，尝试使用回退语言
    if (result === key && this._locale !== this._fallbackLocale) {
      result = translate(key, this._messages[this._fallbackLocale], options)
    }

    return result
  }

  // 设置语言
  setLocale(locale: Locale): void {
    this._locale = locale
  }

  // 合并语言消息
  mergeLocaleMessage(locale: Locale, message: LocaleMessages): void {
    const currentMessage = this._messages[locale] || {}
    this._messages[locale] = this.deepMerge(currentMessage, message)
  }

  // 深度合并对象
  private deepMerge(target: any, source: any): any {
    const result = { ...target }

    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
          result[key] = this.deepMerge(target[key] || {}, source[key])
        } else {
          result[key] = source[key]
        }
      }
    }

    return result
  }
}

// 创建默认实例
export const createI18n = (config?: Partial<I18nConfig>) => {
  return new I18n(config)
}

// 导出默认实例
export default createI18n()

// 导出Composition API工具
let i18nInstance: I18nInstance = createI18n()

export const useI18n = () => {
  const locale = computed(() => i18nInstance.locale)
  const fallbackLocale = computed(() => i18nInstance.fallbackLocale)
  const messages = computed(() => i18nInstance.messages)

  const t = (key: string, options?: TranslateOptions) => {
    return i18nInstance.t(key, options)
  }

  const setLocale = (newLocale: Locale) => {
    i18nInstance.setLocale(newLocale)
  }

  const mergeLocaleMessage = (locale: Locale, message: LocaleMessages) => {
    i18nInstance.mergeLocaleMessage(locale, message)
  }

  return {
    locale,
    fallbackLocale,
    messages,
    t,
    setLocale,
    mergeLocaleMessage
  }
}

// 设置i18n实例（用于ConfigProvider）
export const setI18nInstance = (instance: I18nInstance) => {
  i18nInstance = instance
}
