/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'custom': "linear-gradient(207.8deg, #201E1C 16.69%, #F7931A 100%)",
        },
        borderColor: {
            'custom-gray': "#faf8f7",
        },
    },
  },
  plugins: [],
}

