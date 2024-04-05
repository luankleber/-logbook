module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx',
    './lib/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: ['rubik', 'sans-serif'],
    },
    extend: { colors: {
      'regal-blue': '#0e151b',
      'light-blue': '#4dcfff'
    },
  }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
