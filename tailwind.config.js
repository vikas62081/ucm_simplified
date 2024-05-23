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
      // 00796B
      colors: {
        'custom-dark': '#242424', // Custom color
          primary: '#00796B',   // Replace '#4f46e5' with your primary color
          secondary: '#E0F2F1', // Replace '#ec4899' with your secondary color
          'custom-yellow-border': '#FFD568', // Custom yellow used in AccomodationDetails page for border color
          'custom-yellow-background': '#FFF2D2', // Custom yellow used in AccomodationDetails page for background color
          'custom-gray': '#666666', // Custom gray used in AccomodationDetails page for text color
          'custom-gray-background': '#D9D9D9', // Custom gray used in AccomodationDetails page for border color
          'custom-gray-text': '#736B6B', // Custom gray used in AccomodationDetails page for text color
          'custom-gray-fill': '#F5F5F5', // Custom gray used in AccomodationDetails page for button fill
          'custom-gray-text-contact': '#7D7B7B', // Custom gray used in AccomodationDetails page for contact details
          'custom-green-svg': '#00796B', // Custom gray used svgs
      },
      boxShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      
      
    },
  },
  plugins: [],
}

