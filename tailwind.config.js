const breakpoints = require('./assets/breakpoints.json')
const colors = require('./assets/colors.json')

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    screens: {
      sm: `${breakpoints.sm}px`,
      // => @media (min-width: 640px) { ... }
      md: `${breakpoints.md}px`,
      // => @media (min-width: 768px) { ... }
      lg: `${breakpoints.lg}px`,
      // => @media (min-width: 1024px) { ... }
      xl: `${breakpoints.xl}px`,
      // => @media (min-width: 1280px) { ... }
      '2xl': `${breakpoints['2xl']}px`,
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: 'Poppins, Arial, sans-serif',
    },
    colors,
    extend: {
      minWidth: {
        screen: '100vw',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
