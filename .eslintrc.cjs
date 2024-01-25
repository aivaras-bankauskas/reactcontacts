module.exports = {
  root: true,
  env: { 
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
    },
    parser: '@typescript-eslint/parser'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh'],
  rules: {
    'curly': 'error',
		'no-console': 'off',
		'space-infix-ops': 'error',
		'no-multi-spaces': 'error',
		'indent': ['error', 'tab'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'eqeqeq': ['error', 'always'],
		'no-trailing-spaces': 'error',
		'space-before-blocks': 'error',
		'eol-last': ['error', 'always'],
		'brace-style': ['error', '1tbs'],
		'comma-dangle': ['error', 'never'],
		'linebreak-style': ['error', 'unix'],
		'block-spacing': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
		'func-call-spacing': ['error', 'never'],
		'array-bracket-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 1 }],
		'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
		'spaced-comment': ['error', 'always', { 'exceptions': ['-'] }],
		'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
		'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
		'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
		'padding-line-between-statements': ['error', { 'blankLine': 'always', 'prev': '*', 'next': 'return' }]
  },
  settings: {
      react: {
          version: 'detect'
      }
  },
  overrides: [
      {
          files: ['*.tsx', '*.jsx'],
          rules: {
              // '@typescript-eslint/explicit-function-return-type': 'error',
              '@typescript-eslint/no-explicit-any': 'error',
              'no-unused-vars': 'off',
              '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
          }
      }
  ]
}
