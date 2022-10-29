/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require("daisyui"), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}