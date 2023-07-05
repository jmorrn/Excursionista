/** @type {import('tailwindcss').Config} */

const globalTheme = require('./src/styles/globalTheme.js');
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: globalTheme,
  },
  plugins: [],
};
