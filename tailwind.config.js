module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xl_max': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg_max': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md_max': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm_max': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
