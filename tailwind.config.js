/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        //Colors
        "primary": "#FABB18",
        "primary-hover": "#C69413",
        "secondary": "#9A9A9A",
        //Table colors
        "alta": "#E06C60",
        "media": "FBD87E",
        "baja": "61CB90",
        "Finalizada": "E06C60",
        "curso": "#528DDE",
        "pausado": "FBD87E",
        //text
        "txt-white-m": "#9CA3AF",
        "txt-dark-m": "#374151",
        //background
        "white-m": "#F9FAFB",
        "dark-m": "#111827",
      },
    },
  },
  plugins: [],
}

