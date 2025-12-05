<template>
  <section class="h5-demo-container" :class="{ minimized }" v-if="shouldShowDemo">
    <div class="md-demo-actions">
      <button class="md-demo-btn" @click="minimized = !minimized">{{ minimized ? '展开' : '收起' }}</button>
      <button class="md-demo-btn" @click="showCode = !showCode">{{ showCode ? '隐藏代码' : '显示代码' }}</button>
      <button class="md-demo-btn" @click="reset">重置</button>
    </div>

    <transition name="md-fade">
      <div v-show="!minimized" class="h5-demo-phone">
        <div class="h5-demo-content">
          <div class="md-demo-header-bar">
            <div class="md-demo-title">
              <strong>{{ demoTitle }}</strong>
              <span class="md-demo-desc">{{ demoDesc }}</span>
            </div>
            <div class="md-demo-segment" v-if="segments.length">
              <button 
                v-for="seg in segments" 
                :key="seg.key"
                :class="['seg-btn', { active: active === seg.key }]" 
                @click="active = seg.key"
              >
                {{ seg.text }}
              </button>
            </div>
          </div>

          <div class="md-demo-view">
            <!-- Input Demo -->
            <template v-if="componentName === 'input'">
              <div v-if="active === 'basic'" class="md-demo-section">
                <md-input v-model="inputValue" placeholder="请输入内容" />
              </div>
              <div v-else-if="active === 'disabled'" class="md-demo-section">
                <md-input v-model="inputValue" disabled placeholder="禁用状态" />
              </div>
              <div v-else-if="active === 'readonly'" class="md-demo-section">
                <md-input v-model="inputReadonly" readonly placeholder="只读状态" />
              </div>
              <div v-else-if="active === 'size'" class="md-demo-section size-list">
                <md-input v-model="inputValue" size="large" placeholder="大号输入框" />
                <md-input v-model="inputValue" size="medium" placeholder="中号输入框" />
                <md-input v-model="inputValue" size="small" placeholder="小号输入框" />
              </div>
              <div v-else class="md-demo-section">
                <md-input v-model="inputPrefix" placeholder="带前缀">
                  <template #prefix>￥</template>
                </md-input>
                <md-input v-model="inputSuffix" placeholder="带后缀">
                  <template #suffix>.com</template>
                </md-input>
              </div>
            </template>

            <!-- Button Demo -->
            <template v-else-if="componentName === 'button'">
              <div v-if="active === 'basic'" class="md-demo-section">
                <md-button type="primary">主要按钮</md-button>
                <md-button type="success">成功按钮</md-button>
                <md-button type="warning">警告按钮</md-button>
                <md-button type="danger">危险按钮</md-button>
              </div>
              <div v-else-if="active === 'size'" class="md-demo-section">
                <md-button size="large" type="primary">大号按钮</md-button>
                <md-button size="medium" type="primary">中号按钮</md-button>
                <md-button size="small" type="primary">小号按钮</md-button>
              </div>
              <div v-else-if="active === 'disabled'" class="md-demo-section">
                <md-button disabled type="primary">禁用按钮</md-button>
              </div>
            </template>

             <!-- Icon Demo -->
            <template v-else-if="componentName === 'icon'">
              <div class="md-demo-section icon-demo">
                <md-icon name="search" size="24" />
                <md-icon name="home" size="24" color="red" />
                <md-icon name="settings" size="24" />
              </div>
            </template>

            <!-- Default/Fallback -->
            <div v-else class="md-demo-section">
              <p>暂无演示或正在开发中</p>
            </div>

          </div>

          <transition name="md-fade">
            <div v-if="showCode" class="md-demo-code">
              <pre><code>{{ snippet }}</code></pre>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const minimized = ref(false)
const showCode = ref(false)
const active = ref('basic')

// Input Data
const inputValue = ref('')
const inputReadonly = ref('只读内容')
const inputPrefix = ref('')
const inputSuffix = ref('')

const componentName = computed(() => {
  const path = route.path
  if (path.includes('/button')) return 'button'
  if (path.includes('/input')) return 'input'
  if (path.includes('/icon')) return 'icon'
  if (path.includes('/link')) return 'link'
  if (path.includes('/text')) return 'text'
  if (path.includes('/row') || path.includes('/col')) return 'layout'
  return ''
})

const shouldShowDemo = computed(() => !!componentName.value)

const demoTitle = computed(() => {
  switch (componentName.value) {
    case 'button': return 'Button 按钮'
    case 'input': return 'Input 输入框'
    case 'icon': return 'Icon 图标'
    case 'link': return 'Link 链接'
    case 'text': return 'Text 文本'
    case 'layout': return 'Layout 布局'
    default: return '演示'
  }
})

const demoDesc = computed(() => {
  switch (componentName.value) {
    case 'button': return '按钮组件演示'
    case 'input': return '输入框组件演示'
    default: return '组件功能演示'
  }
})

const segments = computed(() => {
  switch (componentName.value) {
    case 'input':
      return [
        { key: 'basic', text: '基本' },
        { key: 'disabled', text: '禁用' },
        { key: 'readonly', text: '只读' },
        { key: 'size', text: '尺寸' },
        { key: 'affix', text: '前后缀' }
      ]
    case 'button':
      return [
        { key: 'basic', text: '基本' },
        { key: 'size', text: '尺寸' },
        { key: 'disabled', text: '禁用' }
      ]
    default:
      return []
  }
})

// Reset on route change
watch(() => route.path, () => {
  active.value = 'basic'
  reset()
  updateBodyClass()
})

// Watch shouldShowDemo to toggle body class
watch(shouldShowDemo, () => {
  updateBodyClass()
})

import { onMounted, onUnmounted } from 'vue'

function updateBodyClass() {
  if (typeof document !== 'undefined') {
    if (shouldShowDemo.value) {
      document.body.classList.add('md-has-demo')
    } else {
      document.body.classList.remove('md-has-demo')
    }
  }
}

onMounted(() => {
  updateBodyClass()
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('md-has-demo')
  }
})

function reset() {
  inputValue.value = ''
  inputReadonly.value = '只读内容'
  inputPrefix.value = ''
  inputSuffix.value = ''
}

const snippet = computed(() => {
  const openScript = '<s' + 'cript setup>'
  const closeScript = '</s' + 'cript>'
  
  if (componentName.value === 'input') {
    return `<template>
  ${active.value === 'basic' ? '<md-input v-model="value" placeholder="请输入内容" />' : ''}
  ${active.value === 'disabled' ? '<md-input v-model="value" disabled placeholder="禁用状态" />' : ''}
  ${active.value === 'readonly' ? '<md-input v-model="valueReadonly" readonly placeholder="只读状态" />' : ''}
  ${active.value === 'size' ? '<md-input v-model="value" size="large" placeholder="大号输入框" />\n  <md-input v-model="value" size="medium" placeholder="中号输入框" />\n  <md-input v-model="value" size="small" placeholder="小号输入框" />' : ''}
  ${active.value === 'affix' ? '<md-input v-model="value1" placeholder="带前缀">\n  <template #prefix>￥</template>\n</md-input>\n<md-input v-model="value2" placeholder="带后缀">\n  <template #suffix>.com</template>\n</md-input>' : ''}
</template>

${openScript}
import { ref } from 'vue'
const value = ref('')
${closeScript}`
  }
  
  if (componentName.value === 'button') {
    return `<template>
  <md-button type="primary">按钮</md-button>
</template>`
  }

  return '<!-- 暂无代码示例 -->'
})
</script>

<style scoped>
.md-demo-title {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.md-demo-title strong {
  font-size: 14px;
}
.md-demo-desc {
  color: var(--vp-c-text-2);
  font-size: 12px;
}
.md-demo-actions { display: flex; gap: 6px; margin-bottom: 8px; }
.md-demo-btn {
  font-size: 12px;
  line-height: 1;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}
.md-demo-btn:hover { background: var(--vp-c-bg); }
.md-demo-header-bar { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
.md-demo-segment { display: flex; gap: 6px; flex-wrap: wrap; }
.seg-btn {
  font-size: 12px; padding: 6px 10px; border-radius: 16px;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);
  cursor: pointer;
}
.seg-btn.active { background: var(--vp-c-bg); border-color: var(--vp-c-brand); color: var(--vp-c-brand); }

.md-demo-view { display: grid; gap: 10px; }
.md-demo-section { display: grid; gap: 8px; }
.icon-demo { display: flex; gap: 12px; flex-wrap: wrap; }
.size-list md-input { margin-bottom: 6px; }

.md-demo-code pre {
  margin: 0;
  padding: 10px;
  border-radius: 8px;
  background: var(--vp-code-block-bg);
  color: var(--vp-c-text-1);
  overflow-x: auto;
  font-size: 12px;
}
.md-fade-enter-active, .md-fade-leave-active { transition: opacity 0.2s ease; }
.md-fade-enter-from, .md-fade-leave-to { opacity: 0; }
</style>
