/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "new-bounce": {
          "0%, 100%": {
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "scale(1.1)",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
          "0%": {
            transform: "scale(1)",
            borderColor: "#ddd",
          },
          "100%": {
            transform: "scale(1)",
            borderColor: "#333",
          },
        },
      },
    },
  },
  plugins: [],
};
