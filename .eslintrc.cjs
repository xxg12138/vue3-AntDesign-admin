module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
      'plugin:vue/essential',
      '@vue/standard'
  ],
  parserOptions: {
      parser: '@babel/eslint-parser'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100,
        trailingComma: 'none'
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index']
      }
    ],
    'vue/no-setup-props-destructure': ['off']
  }
}





