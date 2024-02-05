/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        "primary":"#FFF200"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

