/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      spartan: ['League Spartan', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto Slab', 'serif'],
      titillium: ['Titillium Web', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
