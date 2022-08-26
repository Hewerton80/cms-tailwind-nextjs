const assets = require('./assets.json')
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    screens: {
      sm: `${assets.breakpoints.sm}px`,
      // => @media (min-width: 640px) { ... }
      md: `${assets.breakpoints.md}px`,
      // => @media (min-width: 768px) { ... }
      lg: `${assets.breakpoints.lg}px`,
      // => @media (min-width: 1024px) { ... }
      xl: `${assets.breakpoints.xl}px`,
      // => @media (min-width: 1280px) { ... }
      '2xl': `${assets.breakpoints['2xl']}px`,
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: assets.fontFamily,

    extend: {
      colors: assets.colors,
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
