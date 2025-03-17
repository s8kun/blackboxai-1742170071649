/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-gray': '#1d1d1f',
        'apple-blue': '#2997ff',
      },
      fontFamily: {
        'sf-pro': ['"SF Pro Display"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
