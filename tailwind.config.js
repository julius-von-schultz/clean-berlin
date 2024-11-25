/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['AnekMalayalam'],
  },
  fontSize: {
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    '2xl': '1.75rem', // 28px
    '3xl': '2rem', // 32px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.5rem', // 56px
    '7xl': '4rem', // 64px
  },
  lineHeight: {
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    9: '2.25rem', // 36px
    10: '2.5rem', // 40px
    11: '2.75rem', // 44px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
  },
  opacity: {
    0: '0',
    10: '0.1',
    20: '0.2',
    50: '0.5',
    80: '0.8',
    100: '1',
  },
  screens: {
    sm: '0px',
    md: '768px',
    lg: '1280px',
    xl: '1440px',
    '2xl': '2560px',
  },
}

export class theme {}
