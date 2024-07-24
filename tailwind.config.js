/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        fontSize: {
          tiny: "0.95rem",
          small: "1.375rem", // text-small
          medium: "1.875rem", // text-medium
          large: "4.3758rem", // text-large line-large
        },
        lineHeight: {
          medium: "108%",
          large: '127%'
        }
      },
      themes: {
        save: {  
          extend: "dark",
          colors: {
            background: {
              dark: '#0E0D0D',
              md: '#1D1B1B',
              black: '#000'
            },
            primary: {
              50: "#6C6C6C",
              100: "#FFFFFF"
            }
          }
        }
      }
    })
  ]
}