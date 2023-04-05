/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      little: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        montser: ["Montserrat"],
      },
      backgroundImage: {
        background: "url('/src/img/background.jpg')",
        burger: "url('/src/img/burger.svg')",
        language: "url('/src/img/language-icon.svg')",
      },
      keyframes: {
        neko: {
          "0%": { transform: "translateY(0px)" },

          "100%": { transform: "translateY(20px)" },
        },
        azaza: {
          "0%": { transform: "translateY(0px)" },

          "100%": { transform: "translateY(10px)" },
        },
        text: {
          "0%": { color: "#ec4899" },

          "100%": { color: "#f5d0fe" },
        },
      },
      animation: {
        "neko-img": "neko 2s infinite alternate",
        "text-anim": "text 2s infinite alternate",
        "icons-anim": "azaza 3s infinite alternate",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
