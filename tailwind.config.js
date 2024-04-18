/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bgimg": "url('/images/bg_dii9.png')",
      },
      colors: {
        gray: {
          "100": "#110416",
          "200": "#0b0b0b",
        },
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        notoserif: "Noto Serif Display, serif",
        petrona: "Petrona",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "12xs": "1px",
      },
    },
    fontSize: {
      "17xl": "36px",
      "11xl": "30px",
      sm: "14px",
      base: "16px",
      "2xl": "21px",
      xs: "12px",
      xl: "20px",
      "83xl": "102px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
});
