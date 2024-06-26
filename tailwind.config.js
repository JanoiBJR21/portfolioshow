/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#5bbb4c",
        primaryContent: "#4C5958",
        primarySubcontent: "#8AA6A3",
        primaryBase: "#B1B9CB",
        primaryAccent: "#fff",
        primaryBg: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
