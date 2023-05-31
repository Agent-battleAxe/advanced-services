/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens :{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      'mobile' : {'max':'500px'},
      'tablet-sm' :  {'min':'501px' , 'max' : '780px'},
      'tablet-lg' : {'min':'781px' , 'max' : '1050px'}
    },
  },
  plugins: [],
}