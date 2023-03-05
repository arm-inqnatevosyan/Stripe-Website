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
        '3xl': '83%',
        '33xl': '80%'
      },
      marginTop: {
        '3xl': '130px'
      },
      screens: {
        tall: { raw: '(max-width: 900px)' },
        tall1: { raw: '(max-width: 1000px)' }
      },
      colors: {
        mycolor: 'hsla(0,0%,100%,0.2)'
      }
    }
  }
}
