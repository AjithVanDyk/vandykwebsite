/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vd-blue': {
          DEFAULT: '#00467F', // Primary Blue (R=0, G=70, B=127)
          dark: '#00133D',    // Secondary Blue (R=0, G=19, B=61)
        },
        'vd-orange': {
          DEFAULT: '#F26531', // Primary Orange (R=242, G=101, B=49)
          alt: '#F0483E',     // Secondary Orange (Pantone Warm Red C)
          hex: '#D66638',     // Hex Orange
        },
      },
    },
  },
  plugins: [],
};
