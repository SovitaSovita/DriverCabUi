/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#00b4db', //blue (same as => root_low)
        'red-weight': '#6E1E10',
        'red-light': '#D55126',
        'brand-black': '#0f1d30',
        'smoke-black': '#393940',
        'gray-hover': '#56565a',
        'white-smoke': '#f0f2f5',
        'black-low': 'rgb(0,0,0,0.4)',
        'root_high': '#26bdf7',
        'root_low': '#00b4db',
        'txtcolor': '#26bdf7',
        'root_dark': '#323f54',
        'root_Overlay': '#323f5499',
        'root_opacityBG': '#323f5433',
      },
      screens: {
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        'phone': '340px',
      },
      fontFamily: {

        'roboto': ['Roboto'],
        'poppin': ['Poppins'],
        'merienda': ['Merienda'],
      },
      textShadow: {
        '2-2': '2px 2px 0 rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'hero-footer': "url('./assets/images/all/footerbg.jpg')",
        'popular-back': "url('./assets/images/all/populartourbg.jpg')",
        'logo': "url('./assets/images/logo/logo.png')",
        'hero-front': "url('./assets/img/bg-done.jpg')",
        'hero-star': "url('./assets/img/star.png')",
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 3rem',
        top: 'top',
        'top-4': 'center top 1rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}