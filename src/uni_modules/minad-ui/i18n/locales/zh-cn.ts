// 中文本地化文件
import type { LocaleMessages } from '../types'

const messages: LocaleMessages = {
  form: {
    required: '该字段为必填项',
    minLength: '最小长度为 {min}',
    maxLength: '最大长度为 {max}',
    email: '请输入有效的邮箱地址',
    number: '请输入有效的数字',
    invalidDate: '请输入有效的日期',
    invalidNumber: '请输入有效的数字',
    invalidString: '请输入有效的字符串',
    dateFormat: '日期格式必须为 {format}',
    dateBefore: '日期必须早于 {date}',
    dateAfter: '日期必须晚于 {date}',
    minValue: '最小值为 {min}',
    maxValue: '最大值为 {max}'
  },
  input: {
    placeholder: '请输入'
  },
  button: {
    submit: '提交',
    cancel: '取消',
    reset: '重置'
  }
}

export default messages
