/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#282A3A",
        gold: "#C69749 ",
        orange: "#F49D1A",
        black: "#000"
      },
      fontFamily: {
        rubik: ["Rubik Marker Hatch", "cursive"],
      },
      keyframes: {
        'slideIn': {
          '0%': { 'border': 'none' },
          '100%': { 'border-bottom': '1px solid #C69749' }
        }
      }
    },
  },
  plugins: [],
};
