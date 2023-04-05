/** @type {import('tailwindcss').Config} */


const {fontFamily} = require('tailwindcss/defaultTheme');


module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode :'class',
  theme: {
    extend: {
     colors:{
      primary: '#D7EFEA',
      secondary: '#c7c83b',
      primary1: '#FFFFFF',
      primary2: '#F24058',
      primary3: '#17BE74',
      primary4:'#301A0B',
      dark:'#1b1b1b',
      light:'#f5f5f5',
     },
     fontFamily: {
      mont:['var(--font-mont)', ...fontFamily.sans],
      raleway:['var(--font-raleway)', ...fontFamily.sans],
      alegreya: ['var(--font-alegreya)', ...fontFamily.sans ],
      open: ['var(--font-open)', ...fontFamily.serif],
     },
    
    },
  },
  plugins: [],
}
