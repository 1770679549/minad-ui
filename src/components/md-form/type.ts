export interface FormItem {
  prop: string
  validate: () => Promise<boolean>
  clearValidate: () => void
}

export interface FormRules {
  [key: string]: Array<{
    required?: boolean
    message: string
    trigger?: 'blur' | 'change'
  }>
}

export interface FormState {
  model: Record<string, any>
  rules: FormRules
  formItems: FormItem[]
}

export interface FormProps {
  modelValue: Record<string, any>
  rules?: FormRules
}

export interface FormEmits {
  (e: 'submit', values: Record<string, any>): void
  (e: 'validate', prop: string, valid: boolean, message: string): void
}
