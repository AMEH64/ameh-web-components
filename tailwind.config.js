const colors = require('tailwindcss/colors')

module.exports = {
  // prefix: 'ameh-',
  purge: {
    enabled: false,
    content: ["./src/**/*.tsx", "./src/index.html"]
  },
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}