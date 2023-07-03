/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anybodyRegular: 'Anybody',
        anybodyMedium: 'Anybody_Medium',
        anybodyBold: 'Anybody_Bold',
      },
      colors: {
        brandRed: '#f50000',
        brandBlack: '#263238',
        brandWhite: '#f2f2f2',
      },
    },
  },
  plugins: [],
};
