/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches the file types you are using
  ],
  theme: {
    extend: { 
      fontSize: {
        '10px': '10px',
      },    
      colors: {
        'custom-dark': '#242424', // Custom color
          primary: '#00796B',   // Replace '#4f46e5' with your primary color
          secondary: '#E0F2F1', // Replace '#ec4899' with your secondary color
      },
      boxShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      
      
    },
  },
  plugins: [],
}

