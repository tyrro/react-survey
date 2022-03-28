module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        shadow: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 1) 100%)',
      },
      fontFamily: {
        neuzeit: '"Neuzeit S LT Std"',
      },
      fontSize: {
        baseLarge: ['17px', '22px'],
        baseSmall: ['15px', '20px'],
      },
    },
  },
  plugins: [],
};
