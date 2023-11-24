module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3A4D39',
        'secondary': '#4F6F52',
        'accent': '#F7EFE5',
        'abu': '#191825'
      }
    },
  },
  plugins: [require("daisyui")],
}