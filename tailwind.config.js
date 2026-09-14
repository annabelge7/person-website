/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
    './src/content/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFFFF',
        paper: '#F7F7F5',
        ink: '#1E211F',
        stone: '#5C6059',
        line: '#DFDFDA',
        teal: '#2F6B5E',
        'teal-dark': '#254F45',
        sage: '#8A9A74',
        'sage-light': '#C3D1AC',
      },
      fontFamily: {
        display: ['var(--font-fraunces)'],
        sans: ['var(--font-manrope)'],
      },
      maxWidth: {
        site: '1180px',
      },
      letterSpacing: {
        wide2: '0.14em',
      },
    },
  },
  plugins: [],
}
