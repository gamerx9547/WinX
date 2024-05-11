/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: { 
      
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(0.8)' },
          }
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
        textShadow: {
          sm: '0 1px 2px var(--tw-shadow-color)',
          DEFAULT: '0 2px 4px var(--tw-shadow-color)',
          lg: '0 8px 16px var(--tw-shadow-color)',
        },
          fontFamily: { 
              "lilita": ['lilita', 'sans-serif'] 
          } 
      }, 
  }, 
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

