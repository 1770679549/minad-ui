/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-11-25 15:52:31
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-11-25 15:52:33
 * @FilePath: \minad-ui\plopfile.js
 * @Description:
 *
 */
// Plop configuration for generating UI components
module.exports = function(plop) {
  // Component generator
  plop.setGenerator('component', {
    description: 'Generate a new UI component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (without prefix, e.g. button)',
        validate: (value) => value ? true : 'Component name is required'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Component description'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Component type',
        choices: ['basic', 'form', 'layout', 'navigation', 'feedback', 'data-display']
      }
    ],
    actions: [
      // Create component directory
      {
        type: 'add',
        path: 'src/components/md-{{kebabCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs'
      },
      // Create component Vue file
      {
        type: 'add',
        path: 'src/components/md-{{kebabCase name}}/md-{{kebabCase name}}.vue',
        templateFile: 'plop-templates/component/component.vue.hbs'
      },
      // Update components index.ts to export new component
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: 'export const components = {',
        template: '  Md{{pascalCase name}},',
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: 'export {',
        template: '  Md{{pascalCase name}},',
      }
    ]
  });
};
