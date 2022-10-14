/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    colors: {
      "gray-100": "#E1E1E6",
      "gray-200": "#7C7C7A",
      "gray-400": "#7C7C8A",
      "gray-800": "#202024",
      "gray-900": "#121214",
      "gray-100": "#E1E1E6",
      "cyan-500": "#81DFF7",
      "cyan-300": "#B2E4F5",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
