/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        ...screens,
        "2xl": undefined,
      },
    },
    extend: {
      colors: {
        "nxs-red": "#8E443F",
        "nxs-blue": "#445263",
      },
      keyframes: {
        logoSpin: {
          "0%": {
            transform: "perspective(120) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(120) rotateY(360deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
