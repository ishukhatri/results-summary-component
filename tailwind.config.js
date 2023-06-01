/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: ["HankenGrotesk", "sans-serif"],
      },
      colors: {
        "custom-red": "#FF5555",
        "custom-dark-navy": "#303B59",
        "custom-yellow": "#FFB21E",
        "custom-blue": "#1125D6",
        "custom-green": "#00BB8F",
        "custom-light-blue": "#CAC9FF",
        "custom-very-light-blue": "#ECF2FF",
      },
      fontSize: {
        32: "2rem",
        56: "3.5rem",
      },
      lineHeight: {
        42: "2.625rem",
        23: "1.4375rem",
        72: "4.5rem",
        21: "1.3125rem",
        23: "1.4375rem",
      },
      width: {
        368: "23rem",
        200: "12.5rem",
        140: "8.75rem",
      },
      height: {
        200: "12.5rem",
        140: "8.75rem",
      },
      padding: {
        38: "2.375rem",
      },
    },
  },
  plugins: [],
};
