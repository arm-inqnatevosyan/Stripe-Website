/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '20px'
      },
      height: {
        '3xl': '400px',
        '33xl': '80vh'
      },
      width: {
        '3xl': '73%',
        '33xl': '80%'
      }
    }
  }
}
