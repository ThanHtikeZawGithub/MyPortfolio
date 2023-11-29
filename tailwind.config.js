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
      secondary: '#222222',
      primary1: '#FFFFFF',
      primary3: '#17BE74',
      dark:'#1b1b1b',
      light:'#f5f5f5',
      skill: "#190E33",
      normal:"#1e293b"
     },
     backgroundImage:{
      'gradient':'linear-gradient(90deg, rgba(215,239,234,1) 67%, rgba(23,190,116,1) 67%)',
      'gradient-mobile':'linear-gradient(180deg, rgba(215,239,234,1) 40%, rgba(23,190,116,1) 40%)',
      'gradient-dark': 'linear-gradient(0deg, rgba(30,41,59,1) 30%, rgba(25,14,51,1) 100%)',
      'mountain' : "url('/mountains.png')",
      'planet' : "url('/planets.png')",
      'star' : "url('/stars.png')",
      'sun' : "url('/sun.png')",
      'cloud': "url('/cloud.png')"
     },
     fontFamily: {
      poppin:['var(--font-pop)', ...fontFamily.sans],
     },
    
    },
  },
  plugins: [],
}
