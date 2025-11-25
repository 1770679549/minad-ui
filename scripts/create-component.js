#!/usr/bin/env node

/**
 * md-ui 组件脚手架脚本
 * 用于快速创建符合 md-ui 规范的新组件
 */

const fs = require('fs');
const path = require('path');

// 检查命令行参数
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('错误：请提供组件名称');
  console.log('使用方法：npm run create-component <组件名称>');
  process.exit(1);
}

// 获取组件名称并转换为合适的格式
let componentName = args[0].trim();

// 确保组件名称以 md- 开头
if (!componentName.startsWith('md-')) {
  componentName = `md-${componentName}`;
}

// 转换为 PascalCase (用于组件类名)
const pascalCaseName = componentName
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');

// 组件目录路径
const componentDir = path.join(__dirname, '..', 'src', 'components', componentName);

// 检查组件是否已存在
if (fs.existsSync(componentDir)) {
  console.error(`错误：组件 ${componentName} 已存在`);
  process.exit(1);
}

// 创建组件目录
fs.mkdirSync(componentDir, { recursive: true });

// 1. 创建组件 Vue 文件
const vueTemplate = `<!--
 * @Author: 李红林 1770679549@qq.com
 * @Date: ${new Date().toISOString().split('T')[0]}
 * @FilePath: \minad-ui\src\components\${componentName}\${componentName}.vue
 * @Description: ${componentName} 组件
 *
-->
<template>
  <view :class="['${componentName}']">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

// Props 定义
const props = defineProps<{
  // 示例属性，根据组件实际需求修改
  type?: string
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
}>()

// Emits 定义
const emit = defineEmits<{
  // 示例事件，根据组件实际需求修改
  click: [event: MouseEvent]
}>()

// 示例方法，根据组件实际需求修改
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style lang="scss" scoped>
// 该组件使用 _components.scss 中的全局样式
// 仅在此处定义组件特定样式

.${componentName} {
  // 组件基础样式
}
</style>
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.vue`), vueTemplate, 'utf8');

// 2. 创建组件入口文件
const indexTemplate = `// ${componentName} 组件入口
import ${pascalCaseName} from './${componentName}.vue'

export default ${pascalCaseName}
`;

fs.writeFileSync(path.join(componentDir, 'index.ts'), indexTemplate, 'utf8');

// 3. 更新 src/index.ts，添加新组件的导出
const indexTsPath = path.join(__dirname, '..', 'src', 'index.ts');
let indexTsContent = fs.readFileSync(indexTsPath, 'utf8');

// 添加导入语句
const importRegex = /import\s+(.*?)\s+from\s+'\.\/components\/(.*?)\/(.*?)';/g;
let lastImportIndex = 0;
let match;

while ((match = importRegex.exec(indexTsContent)) !== null) {
  lastImportIndex = match.index;
}

const importLine = `import ${pascalCaseName} from './components/${componentName}/${componentName}.vue'`;
indexTsContent = indexTsContent.substring(0, indexTsContent.indexOf('// 导入样式')) + 
  importLine + '\n' + 
  indexTsContent.substring(indexTsContent.indexOf('// 导入样式'));

// 添加组件注册
const componentRegex = /app\.component\('(.*?)',\s+(.*?)\);/g;
let lastComponentIndex = 0;

while ((match = componentRegex.exec(indexTsContent)) !== null) {
  lastComponentIndex = match.index;
}

const componentLine = `  app.component('${pascalCaseName}', ${pascalCaseName})`;
const installMethod = indexTsContent.substring(indexTsContent.indexOf('const install ='));
const componentStartIndex = indexTsContent.indexOf(installMethod) + installMethod.indexOf('{') + 1;
const componentEndIndex = indexTsContent.indexOf('}', componentStartIndex);

const componentsPart = indexTsContent.substring(componentStartIndex, componentEndIndex);
const updatedComponentsPart = componentsPart + '\n' + componentLine;

indexTsContent = indexTsContent.substring(0, componentStartIndex) + 
  updatedComponentsPart + 
  indexTsContent.substring(componentEndIndex);

// 更新按需导出
const exportRegex = /export\s+\{(.*?)\}/g;
let exportMatch;

while ((exportMatch = exportRegex.exec(indexTsContent)) !== null) {
  const exportContent = exportMatch[1];
  const updatedExportContent = `${exportContent}, ${pascalCaseName}`;
  indexTsContent = indexTsContent.replace(exportMatch[0], `export { ${updatedExportContent} }`);
}

fs.writeFileSync(indexTsPath, indexTsContent, 'utf8');

// 4. 更新 package.json 的 exports 配置
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// 添加新组件的 exports 配置
packageJson.exports[`./components/${componentName}/${componentName}`] = {
  import: `./dist/components/${componentName}/${componentName}.vue`,
  require: `./dist/components/${componentName}/${componentName}.vue`
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

// 5. 添加组件样式到 _components.scss
const componentsScssPath = path.join(__dirname, '..', 'src', 'styles', '_components.scss');
const componentScssTemplate = `
// ${componentName} 基础样式
.${componentName} {
  // 组件基础样式
  
  // 类型变体
  &.type-primary {
    // 主要类型样式
  }
  
  // 尺寸变体
  &.size-large {
    // 大尺寸样式
  }
  
  &.size-medium {
    // 中尺寸样式
  }
  
  &.size-small {
    // 小尺寸样式
  }
  
  // 禁用状态
  &.disabled {
    // 禁用状态样式
  }
}`;

fs.appendFileSync(componentsScssPath, componentScssTemplate, 'utf8');

console.log(`🎉 组件 ${componentName} 已创建成功！`);
console.log(`📁 组件目录：${componentDir}`);
console.log(`📝 已更新：`);
console.log(`   - src/index.ts (添加组件导出)`);
console.log(`   - package.json (添加 exports 配置)`);
console.log(`   - src/styles/_components.scss (添加组件样式)`);
console.log(`\n📌 请根据需求修改组件文件并完善功能！`);
