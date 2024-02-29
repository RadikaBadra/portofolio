/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(0, 15px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
      },
      animation: {
        floating: "floating 4s ease-in-out infinite",
      },
      backgroundImage: {},
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        text_accent: "var(--text-accent)",
        ternary: "var(--ternary)",
      },
    },
  },
  plugins: [],
};
