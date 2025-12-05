<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-12-05 14:38:37
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-12-05 14:38:46
 * @FilePath: \minad-ui\docs\.vitepress\theme\components\DemoContainer.vue
 * @Description: 
 * 
-->
<!-- .vitepress/theme/components/DemoContainer.vue -->
<template>
  <div class="demo-container">
    <div class="demo-preview" :style="previewStyle">
      <div class="demo-component">
        <slot />
      </div>
    </div>
    <div class="demo-code">
      <slot name="code" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  previewStyle: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
.demo-container {
  display: flex;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
}

.demo-preview {
  flex: 1;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border-right: 1px solid var(--vp-c-divider);
}

.demo-code {
  width: 50%;
  background: var(--vp-c-bg-alt);
  overflow: auto;
}
</style>