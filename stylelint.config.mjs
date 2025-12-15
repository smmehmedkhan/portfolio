/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
  overrides: [
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.{html,js,jsx,ts,tsx}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'screen',
          'layer',
          'variants',
          'responsive',
          'theme',
          'custom-variant',
        ],
      },
    ],
    'selector-class-pattern': null,
    'no-empty-source': null,
  },
  ignoreFiles: ['node_modules/**', '.next/**', 'out/**', 'dist/**', 'build/**'],
}
