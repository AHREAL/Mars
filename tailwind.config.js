module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/**/*.html',
      './src/**/*.js',
      './src/**/*.tsx',
      './src/**/*.ts',
    ],
  },
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '1': 1,
      '2': 2,
      '3': 3,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
