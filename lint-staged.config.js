const path = require('path');

const buildEslintCommand = filenames =>
  `yarn lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'yarn prettier --write'],
  '*.{css,scss}': 'yarn stylelint --fix',
};
