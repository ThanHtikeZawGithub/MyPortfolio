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
      primary3: '#17BE74',
      dark:'#1b1b1b',
      light:'#f5f5f5',
     },
     backgroundImage:{
      'gradient':'linear-gradient(90deg, rgba(215,239,234,1) 67%, rgba(23,190,116,1) 67%)',
      'gradient-mobile':'linear-gradient(180deg, rgba(215,239,234,1) 40%, rgba(23,190,116,1) 40%)',
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
