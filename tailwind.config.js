const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin .9s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'pparent': {
          DEFAULT: '#23a7c7',
          '50': '#eefbfd',
          '100': '#d5f3f8',
          '200': '#b0e7f1',
          '300': '#7ad5e6',
          '400': '#3cb8d4',
          '500': '#23a7c7',
          '600': '#1e7e9c',
          '700': '#1f657f',
          '800': '#215469',
          '900': '#204659',
        },
        'pelorous': {
          DEFAULT: '#23a7c7',
          '50': '#eefbfd',
          '100': '#d5f3f8',
          '200': '#b0e7f1',
          '300': '#7ad5e6',
          '400': '#3cb8d4',
          '500': '#23a7c7',
          '600': '#1e7e9c',
          '700': '#1f657f',
          '800': '#215469',
          '900': '#204659',
        },
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
