/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      display: ['Changa One', 'serif'],
    },
    lineHeight: {
      body: '1.85rem',
    },
    minHeight: {
      80: '20rem',
    },
    // container: {
    //   xl: '800px',
    //   '2xl': '1280px',
    // },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        background: 'var(--background-color)',
        almostWhite: 'var(--almost-white-color)',
        accent: 'var(--accent-color)',
      },
    },
  },
  plugins: [],
}
