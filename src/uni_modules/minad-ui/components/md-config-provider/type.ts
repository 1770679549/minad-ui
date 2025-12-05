import type { Locale } from '../../i18n/types'

export interface ConfigProviderProps {
  locale?: Locale
  theme?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
}
