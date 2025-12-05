export interface LinkProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'large' | 'medium' | 'small'
  href?: string
  disabled?: boolean
  underline?: boolean
  external?: boolean
}

export interface LinkEmits {
  click: [event: MouseEvent]
}
