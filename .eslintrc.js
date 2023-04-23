module.exports = {
  'parser': '@typescript-eslint/parser',
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'settings': {
    'react': {
      'version': '^16.13.1',
    },
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    'simple-import-sort'
  ],
  'rules': {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/display-name': 'off',
    'no-prototype-builtins': 'off',
    'no-console': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']}
    ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'react/prop-types': 'off'
  },
  'globals': {
    'APP_ENV': true,
    'CONFIG': true,
  },
};
