<template>
  <view class="md-form-item">
    <view v-if="label" class="md-form-item__label">
      {{ label }}
    </view>
    <view class="md-form-item__content">
      <slot></slot>
      <view v-if="errorMessage" class="md-form-item__error">
        {{ errorMessage }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref, watch, provide } from 'vue'
import { useI18n } from '../../i18n/i18n'
import { dayjs } from '@/uni_modules/minad-ui/utils'
import type { FormItem, FormRules, FormState, MdForm, FormItemProps, FormItemEmits } from './type'

const props = defineProps<FormItemProps>()

const emit = defineEmits<FormItemEmits>()

// Use i18n
const { t } = useI18n()

const mdForm = inject<MdForm>('mdForm')
const errorMessage = ref('')
const validateState = ref<'success' | 'error' | ''>('')

if (!mdForm) {
  console.error('MdFormItem must be used within MdForm')
}

const validate = async (): Promise<boolean> => {
  if (!mdForm || !props.prop) return true

  const rules = mdForm.formState.rules[props.prop]
  if (!rules || rules.length === 0) return true

  const value = mdForm.formState.model[props.prop]
  let valid = true
  let message = ''

  for (const rule of rules) {
    // Required validation
    if (rule.required) {
      if (!value || value === '') {
        valid = false
        message = rule.message || t('form.required')
        break
      }
    }

    // Skip further validation if value is empty and not required
    if (!value || value === '') continue

    // Type validation
    if (rule.type) {
      switch (rule.type) {
        case 'date':
          if (!dayjs(value).isValid()) {
            valid = false
            message = rule.message || t('form.invalidDate')
            break
          }
          break
        case 'number':
          if (typeof value !== 'number' && isNaN(Number(value))) {
            valid = false
            message = rule.message || t('form.invalidNumber')
            break
          }
          break
        case 'string':
          if (typeof value !== 'string') {
            valid = false
            message = rule.message || t('form.invalidString')
            break
          }
          break
      }
      if (!valid) break
    }

    // Date validation
    if (rule.date && dayjs(value).isValid()) {
      const dateValue = dayjs(value)
      
      // Date format validation
      if (rule.date.format) {
        if (!dayjs(value, rule.date.format, true).isValid()) {
          valid = false
          message = rule.message || t('form.dateFormat', { format: rule.date.format })
          break
        }
      }
      
      // Date before validation
      if (rule.date.before) {
        const beforeDate = dayjs(rule.date.before)
        if (!beforeDate.isValid()) {
          valid = false
          message = rule.message || t('form.invalidDate')
          break
        }
        if (dateValue.isAfter(beforeDate) || dateValue.isSame(beforeDate, 'day')) {
          valid = false
          message = rule.message || t('form.dateBefore', { date: beforeDate.format('YYYY-MM-DD') })
          break
        }
      }
      
      // Date after validation
      if (rule.date.after) {
        const afterDate = dayjs(rule.date.after)
        if (!afterDate.isValid()) {
          valid = false
          message = rule.message || t('form.invalidDate')
          break
        }
        if (dateValue.isBefore(afterDate) || dateValue.isSame(afterDate, 'day')) {
          valid = false
          message = rule.message || t('form.dateAfter', { date: afterDate.format('YYYY-MM-DD') })
          break
        }
      }
    }

    // String length validation
    if (typeof value === 'string') {
      // Min length validation
      if (rule.min !== undefined && value.length < rule.min) {
        valid = false
        message = rule.message || t('form.minLength', { min: rule.min })
        break
      }
      // Max length validation
      if (rule.max !== undefined && value.length > rule.max) {
        valid = false
        message = rule.message || t('form.maxLength', { max: rule.max })
        break
      }
    }
    
    // Number range validation
    if (typeof value === 'number' || !isNaN(Number(value))) {
      const numValue = Number(value)
      // Min value validation
      if (rule.min !== undefined && numValue < rule.min) {
        valid = false
        message = rule.message || t('form.minValue', { min: rule.min })
        break
      }
      // Max value validation
      if (rule.max !== undefined && numValue > rule.max) {
        valid = false
        message = rule.message || t('form.maxValue', { max: rule.max })
        break
      }
    }
  }

  validateState.value = valid ? 'success' : 'error'
  errorMessage.value = valid ? '' : message

  emit('validate', valid, message)
  return valid
}

const clearValidate = () => {
  validateState.value = ''
  errorMessage.value = ''
}

const handleBlur = () => {
  const triggers = Array.isArray(props.trigger) ? props.trigger : [props.trigger]
  if (triggers.includes('blur')) {
    validate()
  }
}

const handleChange = () => {
  const triggers = Array.isArray(props.trigger) ? props.trigger : [props.trigger]
  if (triggers.includes('change')) {
    validate()
  }
}

onMounted(() => {
  if (mdForm) {
    mdForm.registerFormItem({
      prop: props.prop,
      validate,
      clearValidate
    })
  }
})

onUnmounted(() => {
  if (mdForm) {
    mdForm.unregisterFormItem({
      prop: props.prop,
      validate,
      clearValidate
    })
  }
})

provide('mdFormItem', {
  prop: props.prop,
  validateState,
  errorMessage,
  handleBlur,
  handleChange
})

defineExpose({
  validate,
  clearValidate
})
</script>

<style scoped>
.md-form-item {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
}

.md-form-item__label {
  width: 80px;
  font-size: 14px;
  color: #303133;
  margin-right: 12px;
}

.md-form-item__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.md-form-item__error {
  font-size: 12px;
  color: #f56c6c;
  margin-top: 4px;
}
</style>