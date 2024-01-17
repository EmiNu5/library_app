/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '400px',
        md: '600px',
        lg: '900px',
      },
      colors: {
        'white': '#f2f0f0',
        'black': '#000011',
        'red': {
          '500': '#B80000',
          '700': '#820300'
        },
        'orange': '#f9b007'
      },
    },
  },
  plugins: [],
}

