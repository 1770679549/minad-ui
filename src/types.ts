/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-19 23:15:03
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-19 23:15:08
 * @FilePath: \minad-ui\src\types.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
// 组件类型声明
export interface RowProps {
    gutter?: number
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
    align?: 'top' | 'middle' | 'bottom'
}

// 工具函数类型声明
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}