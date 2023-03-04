const { screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,svelte.md,svx}'],
  theme: {
    container: {
      screens: {
        ...screens,
        '2xl': undefined,
      },
    },
    extend: {
      colors: {
        'nxs-red': '#8E443F',
        'nxs-blue': '#445263',
      },
      keyframes: {
        logoSpin: {
          '0%': {
            transform: 'perspective(120px) rotateY(0deg)',
          },
          '100%': {
            transform: 'perspective(120px) rotateY(360deg)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
