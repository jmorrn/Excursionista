/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anybodyRegular: 'Anybody',
        anybodyMedium: 'Anybody_Medium',
        anybodyBold: 'Anybody_Bold',
      }
    },
  },
  plugins: [],
};
