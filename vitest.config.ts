import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    environment: 'jsdom',
    include: ['tests/unit/**/*.spec.ts'],
    globals: true,
    coverage: {
      include: ['src/components/**/*.{vue,ts,js}'],
      exclude: ['src/components/**/index.ts'],
      reporter: ['text', 'html', 'lcov']
    }
  }
})
