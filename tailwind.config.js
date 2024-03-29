/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    extend: {
      keyframes: {
        floating: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(0, 12px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        floating_phone: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(0, 8px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        slide: {
          "0%": { transform: "translateY(100%)", opacity: 0.1 },
          "15%": { transform: "translateY(0)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },
        slide_x: {
          "0%": { transform: "scaleX(0)", opacity: 0.1 },
          "100%": { transform: "scaleX(1)", opacity: 1 },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(20deg)" },
          "20%": { transform: "rotate(-10deg)" },
          "30%": { transform: "rotate(20deg)" },
          "40%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(12.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        floating: "floating 4s ease-in-out infinite",
        slide: "slide 2.5s linear infinite",
        floating_phone: "floating_phone 4s ease-in-out infinite",
        waving_hand: "wave 2s linear infinite",
        slide_x: "slide_x 0.3s linear",
      },
      backgroundImage: {},
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        text_accent: "var(--text-accent)",
        ternary: "var(--ternary)",
        text_gray: "var(--text-gray)",
      },
    },
  },
  plugins: [],
};
