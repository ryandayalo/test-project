/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1285FF',
        'primary-green': '#49A55D',
        'secondary-blue': '#014EFF',
        'secondary-green': '#66CB9F',
        'primary-yellow': '#FFC700',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'notosans': ['Noto Sans', 'sans-serif']
      },
      fontSize: {
        xs2: '0.65rem',
      },
      boxShadow: {
        'custom': [
          '0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
          '0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
        ]
      },
      listStyleImage: {
        checkmark: 'url("../src/img/check.png")',
        chevron: 'url("../src/img/chevron-right.svg")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

