module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  printWidth: 140,
  useTabs: false,
  semi: false,
  singleQuote: true,

  overrides: [
    {
      files: ['*.css', '*.json'],
      options: {
        singleQuote: false
      }
    }
  ]
}
