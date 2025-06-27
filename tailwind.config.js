/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        goudy: ['"Sorts Mill Goudy"', 'serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        primary: '#CC3366',
      },
    },
  },
 
  plugins: [],
};
