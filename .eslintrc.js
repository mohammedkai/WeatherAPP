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
    parser: 'babel-eslint'
  },
  rules: {
    'template-curly-spacing': 'off',
    'no-param-reassign': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': [2, { code: 130, tabWidth: 4, ignoreUrls: true }],
    'dot-notation': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'vue/no-v-html': 0,
    'import/no-cycle': 0, // to be able to use index.js
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-plusplus': 'off', // allow use of uranary operator
    'no-restricted-globals': 0
  }
}
