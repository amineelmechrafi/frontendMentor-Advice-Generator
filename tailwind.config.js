/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'LightCyan':'hsl(193, 38%, 86%)',
        'NeonGreen': 'hsl(150, 100%, 66%)',
        'NeonGreen2': 'hsl(150, 100%,42%)',
        'GrayishBlue': 'hsl(217, 19%, 38%)',
        'DarkGrayishBlue' : 'hsl(217, 19%, 24%)',
       'DarkBlue': 'hsl(218, 23%, 16%)'
      },
      fontFamily: {
        'Manrope':"Manrope"
      }
    },
    
  },
  plugins: [],
}