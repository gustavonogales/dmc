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
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '10rem',
      },
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        background: 'var(--background-color)',
        almostWhite: 'var(--almost-white-color)',
        accent: 'var(--accent-color)',
        accentLight: 'var(--accent-light-color)',
      },
      keyframes: {
        hide: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, display: 'hidden', bottom: -200 },
        },
      },
      animation: {
        hide: 'hide 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
