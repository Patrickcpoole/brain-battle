/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clashregular: ['ClashDisplayRegular', 'sans-serif'],
        clashmedium: ['ClashDisplayMedium', 'sans-serif'],
        clashlight: ['ClashDisplayLight', 'sans-serif'],
        clashextralgiht: ['ClashDisplayExtralight', 'sans-serif'],
        clashbold: ['ClashDisplayBold', 'sans-serif'],
        clashsemibold: ['ClashDisplaySemibold', 'sans-serif'],
      },
      colors: {
        primary: '#33A6FF',
        secondary: '#FDB914',
        alert: '#FB493D',
        dark: '#454D51',
        light: '#FFFFFF'
      }
    },
  },
  plugins: [],
}

