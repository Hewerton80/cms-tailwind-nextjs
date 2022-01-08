module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    fontFamily: {
      sans: 'Poppins, Arial, sans-serif',
    },
    colors: {
      body: '#f3f4f9',
      primary: '#844fc1',
      secondary: '#6c7293',
      success: '#21bf06',
      danger: '#dc3545',
      warning: '#f39915',
      info: '#3b86d1',
      dark: '#282f3a',
      light: '#f8f9fa',
      muted: '#a5abcc',
      white: '#ffffff',
      black: '#001737',
      gray: '#76838f',
      'gray-light': '#eaeaf1',
      'gray-lighter': '#f7f8fc',
      'gray-lightest': '#e4e4f4',
    },
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
