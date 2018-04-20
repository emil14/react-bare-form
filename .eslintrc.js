export default {
  extends: 'standard',
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
