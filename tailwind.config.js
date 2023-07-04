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
        black: {
          brandBlack: '#263238',
          brandBlack100: '#40525B',
        },
        red: {
          brandRed: '#f50000',
        },
        white: {
          brandWhite: '#f2f2f2',
        },
      },
    },
  },
  plugins: [],
};
