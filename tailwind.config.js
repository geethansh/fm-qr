/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize:{
      '20': '20px',
      '15': '15px'

    },
    
    colors:{
      'b-blue':'#1F3251',
      'g-gray':'#7B879D'

    },
    backgroundColor:{
      'card':'#ffffff'

    },
    extend: {
      fontFamily:{
        'custom':['Outfit','sans-serif'],
  
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
