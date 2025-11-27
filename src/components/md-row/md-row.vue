<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 14:58:00
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 14:58:00
 * @FilePath: \uniapp-vue3-components\packages\core\src\components\md-row\md-row.vue
 * @Description: 栅格布局行组件
 * 
-->
<template>
  <view :class="['md-row', { 'md-row--gutter': gutter }, align ? { [align]: true } : {}, justify ? { [justify]: true } : {}]">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { RowProps } from './type'

const props = defineProps<RowProps>()
</script>

<style scoped>
/* Row component specific styles */
.md-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

/* Gutter style */
.md-row--gutter {
  margin-right: -8px;
  margin-left: -8px;
}

/* Alignment styles */
.md-row.top {
  align-items: flex-start;
}

.md-row.middle {
  align-items: center;
}

.md-row.bottom {
  align-items: flex-end;
}

/* Justify styles */
.md-row.start {
  justify-content: flex-start;
}

.md-row.end {
  justify-content: flex-end;
}

.md-row.center {
  justify-content: center;
}

.md-row.space-between {
  justify-content: space-between;
}

.md-row.space-around {
  justify-content: space-around;
}

.md-row.space-evenly {
  justify-content: space-evenly;
}
</style>