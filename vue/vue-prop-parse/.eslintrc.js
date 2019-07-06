// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // 'vue/prop-name-casing': ['error', 'camelCase']
    'vue/attribute-hyphenation': 'error'
  }
}
