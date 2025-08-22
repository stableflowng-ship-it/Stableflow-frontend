// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",// for components
    ],
    safelist: [
      'text-green-500', 'bg-green-100',
      'text-yellow-500', 'bg-yellow-100',
      'text-red-500', 'bg-red-100'
    ],
    theme: {
      extend: {
        fontFamily: {
        sf: ['"SF Pro"', 'sans-serif'],
      },
      },
    },
    plugins: [],
  }
  