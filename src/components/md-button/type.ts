export interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
  loading?: boolean
}

export interface ButtonEmits {
  click: [event: MouseEvent]
}
