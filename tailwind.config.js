module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
        '2.5xl': '54px',
        '4xl': '81.55px',
        '5xl': '100px',
      },
      backgroundImage: {
        shadow: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 1) 100%)',
      },
      colors: {
        dark: 'rgba(255, 255, 255, 0.18)',
        notification: 'rgba(37, 37, 37, 0.6)',
        sidebar: 'rgba(30, 30, 30, 0.9)',
      },
      fontFamily: {
        neuzeit: '"Neuzeit S LT Std"',
      },
      fontSize: {
        'base-xs': ['13px', '18px'],
        'base-small': ['15px', '20px'],
        'base-large': ['17px', '22px'],
        'base-xl': ['20px', '25px'],
        'base-xxl': ['22px', '28px'],
        'base-xxxl': ['28px', '34px'],
        'base-xxxxl': ['34px', '41px'],
      },
    },
  },
  plugins: [],
};
