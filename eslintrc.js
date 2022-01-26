module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parseOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // Must be last in config
  ],
  rules: {
    '@typescript-esline/no-non-nill-assertion': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        endOfLine: 'autos'
      }
    ]
  }
}