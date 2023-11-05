/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      width: {
        500: "33rem",
        409: "28rem",
        97: "420px",
      },
      minWidth: {
        default: "350px",
      },
    },
  },
  plugins: [],
};
