module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flexBasis: {
        'eighth': '12.5%'
      },
      screens: {
        'navbar':{'min': '900px'},
        'navbar_max':{'max': '900px'},
        'xl_max': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg_max': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md_max': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm_max': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        'main-blue': '#2A7FFF',
        'main-purple': '#9955FF'
      },
      height: {
        'icon': '4vw'
      }
    },
  },
  plugins: []
}
