/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-09-28 17:24:30
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-09-29 09:32:33
 * @FilePath: \ma-ui\src\uni_modules\ma-ui\utils\index.ts
 * @Description: 
 * 
 */
import { isArray, isObject, isString } from '@vue/shared';

export const isUndefined = (val: any): val is undefined => val === undefined
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isStringNumber = (val: string): boolean => {
  if (!isString(val)) {
    return false
  }
  return !Number.isNaN(Number(val))
}
/**
 * 给size属性添加px后缀
 * @param value 
 * @param defaultUnit 
 * @returns 
 */
export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`
  } else if (isString(value)) {
    return value
  }
}