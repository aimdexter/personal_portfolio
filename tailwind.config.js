module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue-dark': '#01080E',
        'primary-blue-light': '#011627',
        'secondary-gray-light': '#607B96',
        'secondary-green-light': '#3C9D93',
        'secondary-blue-soft': '#4D5BCE',
        'secondary-white': '#FFFFFF',
        'accent-orange': '#FEA55F',
        'accent-green': '#43D9AD',
        'accent-red': '#E99287',
        'accent-pink': '#C98BDF',
        'line': '#1E2D3D',
        'btn-bg-default': '#1C2B3A',
        'btn-primary-hover': '#FFAC6B',
        'btn-default-hover': '#263B50',
      },
      fontSize: {
        'heading': '62px',
        'subheading': '32px',
        'body': '18px',
        'labels': '16px',
        'code': '14px',
      },
      fontFamily: {
        'fira': ['"Fira Code"', '"monospace"'],
      }
    },
  },
  plugins: [],
}
