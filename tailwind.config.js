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
    boxShadow: {
      button: '0 12px 12px -12px rgba(51, 48, 0, 0.4)',
      'border-grey-80': 'inset 0 0 0 2px #CCCCCC',
      'border-grey-16': 'inset 0 0 0 2px #292929',
    },
    colors: {
      'cb-green': '#76B900',
      'cb-green-darker': '#5A8F00',
      'cb-green-lighter': '#8EE000',
      'cb-orange': '#F45D01',
      'cb-white': '#FFFFFF',
      'cb-grey-1': '#EBEBEB',
      'cb-grey-2': '#D6D6D6',
      'cb-grey-3': '#C2C2C2',
      'cb-grey-4': '#ADADAD',
      'cb-grey-5': '#999999',
      'cb-grey-6': '#858585',
      'cb-grey-7': '#707070',
      'cb-grey-8': '#5C5C5C',
      'cb-grey-9': '#3F3F3F',
      'cb-grey-10': '#333333',
      'cb-grey-11': '#1F1F1F',
      'cb-grey-12': '#0A0A0A',
    },
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
