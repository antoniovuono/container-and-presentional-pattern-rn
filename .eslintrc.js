module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['tests/**/*'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'react/self-closing-comp': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: true,
        endOfLine: 'auto',
      },
    ],
  },
};
