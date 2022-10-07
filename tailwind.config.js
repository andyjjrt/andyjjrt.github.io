/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto sans TC', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [require("daisyui")],
}