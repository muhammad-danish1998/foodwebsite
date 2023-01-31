/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'greenToggle': '#05FF00',
        'redColor' : "#FF0000"
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}
