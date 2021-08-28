const colors = require('tailwindcss/colors');

// console.log('========= colors: ==========', colors)

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
        cyan: colors.cyan,
        darkGray: '#111111',
      },
      height: theme => ({
        'screen/50': '50vh',
        'screen/65': '65vh',
        'screen/75': '75vh',
        'screen/third': 'calc(100vh / 3)',
        'screen/fourth': 'calc(100vh / 4)',
        'screen/fith': 'calc(100vh / 5)',
      }),
    },
  },
  variants: {
    backdropFilter: ['hover'],
    gradientColorStops: ['hover', 'responsive'],
  },
  plugins: [],
};
