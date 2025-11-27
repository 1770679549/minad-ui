// 英文本地化文件
import type { LocaleMessages } from '../types'

const messages: LocaleMessages = {
  form: {
    required: 'This field is required',
    minLength: 'Minimum length is {min}',
    maxLength: 'Maximum length is {max}',
    email: 'Please enter a valid email address',
    number: 'Please enter a valid number',
    invalidDate: 'Please enter a valid date',
    invalidNumber: 'Please enter a valid number',
    invalidString: 'Please enter a valid string',
    dateFormat: 'Date format must be {format}',
    dateBefore: 'Date must be before {date}',
    dateAfter: 'Date must be after {date}',
    minValue: 'Minimum value is {min}',
    maxValue: 'Maximum value is {max}'
  },
  input: {
    placeholder: 'Please enter'
  },
  button: {
    submit: 'Submit',
    cancel: 'Cancel',
    reset: 'Reset'
  }
}

export default messages
