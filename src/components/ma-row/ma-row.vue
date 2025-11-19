<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-19 22:26:03
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-19 22:32:29
 * @FilePath: \minad-ui\src\components\ma-row\ma-row.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<script lang="ts">
export default {
    name: 'ma-row',
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared'
    }
}
</script>
<script setup lang="ts">
import { provide, computed, type StyleValue } from 'vue'

const props = defineProps({
    /** 列间距 默认16 */
    gutter: { type: Number, default: 16 },
    /** 列数 默认12 */
    columns: { type: Number, default: 12 },
    /** 对齐方式 默认top 支持 top|middle|bottom */
    align: { type: String, default: 'top' },
    /** 对齐方式 默认start 支持 start|center|end|space-between */
    justify: { type: String, default: 'start' },
    /** 是否换行 默认true */
    wrap: { type: Boolean, default: true }
})

provide('MA_ROW_CTX', { gutter: props.gutter, columns: props.columns })

const rowStyle = computed<StyleValue>(() => {
    const alignMap: Record<string, string> = { top: 'flex-start', middle: 'center', bottom: 'flex-end' }
    const justifyMap: Record<string, string> = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        'space-between': 'space-between'
    }

    return {
        marginLeft: `-${props.gutter / 2}px`,
        marginRight: `-${props.gutter / 2}px`,
        display: 'flex',
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        alignItems: alignMap[props.align] || 'flex-start',
        justifyContent: justifyMap[props.justify] || 'flex-start'
    }
})
</script>

<template>
    <view class="ma-row" :style="rowStyle">
        <slot></slot>
    </view>
</template>
<style lang="scss" scoped>
@use '../../styles/index' as *;

.ma-row {
    box-sizing: border-box;
    width: 100%;
}
</style>
