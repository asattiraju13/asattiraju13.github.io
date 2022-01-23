module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flexBasis: {
        'eighth': '12.5%'
      },
      screens: {
        'navbar':{'min': '950px'},
        'navbar_max':{'max': '949px'},
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
        'main-purple': '#9955FF',
        'muted-purple':'#5f469985',
        'muted-blue':'#2A7FFF5b'
      },
      height: {
        'icon': '35px'
      },
      minHeight: {
        'icon': '35px',
        'profile':'446.906px'
      },
      minWidth: {
        'profile':'335.188px'
      }
    },
  },
  plugins: []
}
