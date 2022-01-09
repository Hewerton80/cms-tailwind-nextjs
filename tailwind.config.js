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
      maxWidth: {
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '12/12': '100%',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
}
