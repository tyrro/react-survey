const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'responsive', 'screen'],
      },
    ],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [sortOrderSmacss({ emptyLineBefore: 'always' })],
    'max-nesting-depth': 3,
  },
};
