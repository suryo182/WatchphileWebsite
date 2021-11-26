module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          700: '#E79D9C'
        },
        green: {
          400: '#00FF07',
          600: '#39E83E'
        },
        grey: {
          700: '#CFCFCF',
          600: '#C4C4C4',
          900: '#424242' 
        }
      }
    }
  },

  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },

  plugins: [],
  }