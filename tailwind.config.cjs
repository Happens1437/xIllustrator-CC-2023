module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'overpass': ['Overpass', 'sans-serif'],
      },

      colors: {
        mainPurple: '#7D47EF',
        reviewPurple: '#874FFF',
        textGray: '#737373',
        textBlack: '#000000',
        fadedPurple: '#7D47EF',
        background: '#FAFAFA',
        white: '#FFFFFF',
        blurPurple: '#CCB4FF',
        heroSVG: '#7D47EF',
      }
    },
  },
  plugins: [],
};