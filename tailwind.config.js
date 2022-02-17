module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          200: "#F6C3C2",
          700: "#E79D9C",
        },
        green: {
          200: "#BDF5BF",
          400: "#00FF07",
          600: "#39E83E",
        },
        grey: {
          600: "#CFCFCF",
          700: "#C4C4C4",
          900: "#424242",
        },
      },
      textColor: theme => ({
        ...theme("colors"),
        primary: "#15171a",
        secondary: "#60757e",
        tag: "#FF1A75",
      }),
      backgroundColor: theme => ({
        ...theme("colors"),
        avatar: "#E4EAED",
      }),
      width: {
        5.5: "1.375rem",
      },
      height: {
        5.5: "1.375rem",
        76: "19rem",
        85: "21.25rem",
        128: "32rem",
      },
      minHeight: {
        13.75: "3.4375rem",
      },
      fontSize: {
        3.75: "0.9375rem",
        6.25: "1.5625rem",
      },
      borderRadius: {
        7.5: "1.875rem",
      },
      padding: {
        35: "8.75rem",
        "18vmin-4vmin": "18vmin 4vmin",
      },
      flex: {
        3: "1 1 301px",
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },

  plugins: [],
}
