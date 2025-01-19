module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
      colors: {
        primary: '#1D4ED8', // Define your primary color here
        custom_blue: '#c0cbde',        // #5c739d
        custom_gold: '#ffcc44',
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        pop: "pop 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
}