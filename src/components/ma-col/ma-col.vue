<template>
  <view class="ma-col" :style="colStyle">
    <slot />
  </view>
</template>
<script lang="ts">
export default {
  name: 'ma-col',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>
<script setup lang="ts">
import { inject, computed } from 'vue'
const ctx = inject('MA_ROW_CTX', { gutter: 16, columns: 12 }) as { gutter: number; columns: number }

const props = defineProps({
  span: { type: Number, default: 1 },
  offset: { type: Number, default: 0 }
})

const padding = ctx.gutter / 2

const width = computed(() => {
  const pct = (props.span / ctx.columns) * 100
  return `calc(${pct}% - ${ctx.gutter}px)`
})

const offsetLeft = computed(() => {
  if (!props.offset) return undefined
  return `calc(${(props.offset / ctx.columns) * 100}% )`
})

const colStyle = computed(() => ({
  paddingLeft: `${padding}px`,
  paddingRight: `${padding}px`,
  width: width.value,
  marginLeft: offsetLeft.value
}))
</script>

<style lang="scss" scoped>
@use '../../styles/index' as *;

.ma-col {
  box-sizing: border-box;
}

</style>
