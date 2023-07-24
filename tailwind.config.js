/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Ultra', 'serif'],
      },
      backgroundImage: {
        home: "url('/src/assets/home.jpeg')",
        vehicle: "url('/src/assets/tesla.jpeg')",
        mortgage: "url('/src/assets/mortgage.webp')",
        medical: "url('/src/assets/medication.jpeg')",
      },
    },
  },
  plugins: [],
};
