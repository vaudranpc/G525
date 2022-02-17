module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
    },
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended', 'eslint:recommended'],
    parserOptions: {
      ecmaVersion: 2018,
    },
    rules: {
      'no-console': 'error',
      'no-eval': 'error',
      'import/first': 'error',
      'prefer-const': 'error',
      'arrow-parens': 'always',
    },
  };
  