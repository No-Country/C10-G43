/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter, sans-serif"],
    },
    extend: {
      boxShadow: {
        card: "0px 5px 5px rgba(0, 0, 0, 0.2), 2px -2px 0px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
