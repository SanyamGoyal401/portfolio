/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        burtons: "burtons",
      }
    },
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}