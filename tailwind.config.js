/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        violet: "#AC6AFF",
        gray: {
          600: "#333333",
          500: "#4F4F4F",
          400: "#828282",
          300: "#BDBDBD",
          200: "#E0E0E0",
          100: "#F2F2F2",
        },
        red: {
          DEFAULT: "#EB5757",
        },
        orange: {
          DEFAULT: "#F2994A",
        },
        yellow: {
          DEFAULT: "#F2C94C",
        },
        green: {
          100: "#6FCF97",
          200: "#27AE60",
          300: "#219653",
        },
        blue: {
          100: "#56CCF2",
          200: "#2D9CDB",
          300: "#2F80ED",
        },
        puple: {
          100: "#BB6BD9",
          200: "#AC6AFF",
          300: "#9B51E0",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
