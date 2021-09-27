module.exports = {
  purge: [
    './dist/**/*.html',
    './dist/**/*.js',
  ],
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
};
