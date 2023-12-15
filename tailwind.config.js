/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app/js/script.js', './app/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': 'url(../assets/images/desktop.jpg)',
        'mobile': 'url(../assets/images/mobile.jpg)',
      },
      fontFamily: {
        Nabla: "'Nabla', sans-serif",
      }
    },
  },
  plugins: [],
}

