const fs = require('fs');
const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('create-tests', {
    description: 'Create test files for specified components in src',
    prompts: [],
    actions: function() {
      const srcDir = path.join(__dirname, 'src');
      const testDir = path.join(__dirname, 'test');
      const includeDirs = ['components', 'layout', 'pages'];
      const actions = [];

      const addTestFiles = (dir, relativePath) => {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const itemPath = path.join(dir, item);
          const stat = fs.statSync(itemPath);
          if (stat.isDirectory()) {
            if (includeDirs.includes(path.relative(srcDir, itemPath).split(path.sep)[0])) {
              addTestFiles(itemPath, path.join(relativePath, item));
            }
          } else if (stat.isFile() && (item.endsWith('.jsx') || item.endsWith('.js'))) {
            const componentName = path.basename(item, path.extname(item));
            const componentPath = path.relative(srcDir, dir);
            const testFilePath = path.join(testDir, componentPath, `${componentName}.test.js`);
            if (!fs.existsSync(testFilePath)) {
              actions.push({
                type: 'add',
                path: testFilePath,
                templateFile: 'plop-templates/test.hbs',
                data: { componentName, componentPath }
              });
            }
          }
        });
      };

      includeDirs.forEach(dir => addTestFiles(path.join(srcDir, dir), dir));
      return actions;
    }
  });
};
