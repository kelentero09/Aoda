/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0C0E11",
          900: "#111417",
          800: "#161B20",
          700: "#1E242B",
          600: "#2A323B",
        },
        power: {
          400: "#FFC926",
          500: "#FFB800",
          600: "#E5A600",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
