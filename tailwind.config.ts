import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',

  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      colors:{
        lms: {
          "transcript-header": "#E5EAFA",
          "gray-30": "#808897",
          "white-80": "#FFFBFB",
          primary: "#253C95",
          background: "#F5F5F5",
          secondary: "#F20A14",
          accent: "#FCB920",
          "gray-80": "#808897",
          success: "#008000",
          error: "#F73030",
          black90: "#000000",
          grayBorder: "#E6E6E6",
          "black-90": "#403F3F",
        },
        "primary": "#253C95", //primary color
        "secondary": "#FCB920", //secondary color
        "whiteSmoke": "#F5F5F5", //for background color
        "gray-80": "#808897" , //for gray text
        "gray-30": "#F8F9FB", //for gray stroke color
        "white-80": "#FFFFFF", // for text color
        "success": "#008000",
        "error": "#F73030",
        "black-34" : "#343434",
        "blue-sky" :"#5ADEFF",



      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },

  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config