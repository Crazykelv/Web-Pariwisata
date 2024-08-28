/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': {'max': '1024px'},
        'tablet-sm': {'max': '768px'},
        'android': {'max': '576px'},
        'android-sm': {'max': '414px'},
        'iphone': {'max': '355px'}
      }
    },
  },
  plugins: [],
}

