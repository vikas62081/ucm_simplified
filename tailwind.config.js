/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches the file types you are using
  ],
  theme: {
    extend: {
     
      colors: {
        'custom-dark': '#242424', // Custom color
      }
      
    },
  },
  plugins: [],
}

