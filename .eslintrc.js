module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb', 'plugin:flowtype/recommended'],

  plugins: ['eslint-plugin-flowtype'],

  env: {
    browser: true,
  },

  rules: {
    'react/prop-types': 0,

    'import/prefer-default-export': 0,

    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
