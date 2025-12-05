// 国际化类型定义

export type Locale = 'en' | 'zh-cn'

export interface TranslateOptions {
  [key: string]: any
}

export interface LocaleMessages {
  [key: string]: string | LocaleMessages
}

export interface I18nConfig {
  locale: Locale
  fallbackLocale: Locale
  messages: Record<Locale, LocaleMessages>
}

export interface I18nInstance {
  locale: Locale
  fallbackLocale: Locale
  messages: Record<Locale, LocaleMessages>
  t: (key: string, options?: TranslateOptions) => string
  setLocale: (locale: Locale) => void
  mergeLocaleMessage: (locale: Locale, message: LocaleMessages) => void
}
