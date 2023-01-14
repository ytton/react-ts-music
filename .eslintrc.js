module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react', 'prettier', '@typescript-eslint/eslint-plugin', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-var-requires': 0
  }
};
