/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6366f1', // Color primario
          700: '#4f46e5', // Otra variante del color primario
        },
      },
      fontFamily: {
        'onest': ['Onest Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}