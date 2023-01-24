/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0,1fr))",
        8: "repeat(8, minmax(0,1fr))",
      }
      //standard tailwind css only have 6 rows, doing this helps extend it to have 7 or 8 rows
    },
  },
  plugins: [],
};
