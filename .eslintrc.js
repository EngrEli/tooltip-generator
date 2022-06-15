module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'prefer-template': 0,
    'space-before-function-paren': ['error', 'never'],
    'no-new': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-var': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
  },
};
