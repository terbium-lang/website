/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './theme.config.tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0586FF',
          50: '#BDDFFF',
          100: '#A8D5FF',
          200: '#7FC1FF',
          300: '#57ADFF',
          400: '#2E9AFF',
          500: '#0586FF',
          600: '#0069CC',
          700: '#004C94',
          800: '#002F5C',
          900: '#001224',
          950: '#000408'
        },
      },
    }
  },
  plugins: [],
  darkMode: 'class'
}