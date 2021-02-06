module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
  },
};
