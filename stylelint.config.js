module.exports = {
  extends: ['@nimblehq/stylelint-config-nimble'],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'responsive', 'screen'],
      },
    ],
  },
};
