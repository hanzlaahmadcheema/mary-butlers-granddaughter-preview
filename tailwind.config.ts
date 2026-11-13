import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          50: "#faf3f6",
          100: "#f3e6ec",
          200: "#e3cdd8",
          300: "#c9a3b8",
          400: "#a97a97",
          500: "#8a5578",
          600: "#7d4a6c",
          700: "#633654",
          800: "#4d2a41",
          900: "#3d1f33",
        },
        gold: {
          DEFAULT: "#c9a227",
          dark: "#a8861d",
          light: "#f5ecd0",
        },
        honey: "#d9a441",
        ivory: "#fdf9f4",
        sand: "#f6ede4",
        blush: "#f3d9d7",
        amberstar: "#e8a33d",
        ink: "#2b1a24",
        muted: "#6f5a66",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
