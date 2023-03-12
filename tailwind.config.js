module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#01AB6C',
        inactive: '#5D6679',
        greyText: '#A8AAB9',
        greyTextSecondary: '#979797',
        darkGrey: '#1E1F21',
        grey26: '#262626',
      },
      fontFamily: {
        buttons: ['Playfair Display'],
        primaryFont: ['Inter'],
      },
      screens: {
        '3xl': '1700px',
        '2lg': '1200px',
        '2md': '876px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
