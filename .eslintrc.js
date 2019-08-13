module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'error',
    'jsx-a11y/anchor-is-valid': 0
  }
};
