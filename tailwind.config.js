const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      brand: ['"brand"', 'serif'],
      default: ['"body"', 'sans-serif']
    },
    extend: {
      fontFamily: {
        sans: ['"body"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          50: '#EDFDF7',
          100: '#DBFAEF',
          200: '#BCF6E0',
          300: '#8FF0CC',
          400: '#4BE7AD',
          500: '#19B87D',
          600: '#138B5F',
          700:  '#0c583c',
        },
      },
    },
  },
  plugins: [],
}

