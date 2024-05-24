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
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }
      // iPhone SE, Galaxy Fold (folded)
    
      'sm': '375px',
      // => @media (min-width: 375px) { ... }
      // iPhone X/11/12/13/14, Google Pixel 4a
    
      'md': '425px',
      // => @media (min-width: 425px) { ... }
      // Google Pixel 4, Samsung Galaxy S20/S21, iPhone 14 Pro Max
    
      'lg': '640px',
      // => @media (min-width: 640px) { ... }
      // Small tablets, large phones like Samsung Galaxy Note series
    
      'xl': '768px',
      // => @media (min-width: 768px) { ... }
      // iPad Mini, larger phablets
    },
    extend: {     
      fontSize:{
        xxs : '0.625rem'
      },
      colors: {
        'custom-dark': '#242424', // Custom color
          'custom-black': "#303030",
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
      dropShadow: {
        'custom': '0 4px 2px rgba(0, 0, 0, 0.25)'},
      boxShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      
      
    },
  },
  plugins: [],
}

