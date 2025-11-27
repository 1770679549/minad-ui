export interface TextProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary'
  size?: 'large' | 'medium' | 'small'
  bold?: boolean
  italic?: boolean
  underline?: boolean
  align?: 'left' | 'center' | 'right'
  lineHeight?: string | number
  letterSpacing?: string | number
}
