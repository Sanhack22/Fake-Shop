/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      title:['Bebas Neue'],
      title2:['Major Mono Display'],
      title3:['Sofia Sans Extra Condensed']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}