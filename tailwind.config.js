/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'headings':['Nanum Gothic Coding', 'monospace'],
        'gametext':['Silkscreen', 'sans-serif']
      },
      colors:{
          'darkCol':'#1A2238',
          'lightPurole':'#9DAAF2',
          'lightOrange':'#FF6A3D',
          
      },
      screens: {
        'xs': '360px',
        '3xl': '1536px',
        'custom-height-mq': { 'raw': '((min-width: 360px) and (max-height: 430px))' },
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}