/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        floating: "floating 3.5s ease-in-out infinite ",
        float: "float 3.5s ease-in-out infinite ",
      },
      keyframes: {
        floating: {
          "0%, 100%": {
            transform: "translateY(0)",
            transform: "rotate(6deg)",
          },
          "50%": { transform: "translateY(-50px)" },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
            transform: "rotate(-6deg)",
          },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
