import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff5f5",
          100: "#ffe0e0",
          200: "#fab8b8",
          300: "#f08080",
          400: "#e04545",
          500: "#c92a2a",
          600: "#a61e1e",
          700: "#8b1a1a",
          800: "#6e1515",
          900: "#4a0e0e",
        },
        navy: {
          50: "#f7f8fa",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b0b8c9",
          400: "#8490a8",
          500: "#636f88",
          600: "#4f5869",
          700: "#3d4451",
          800: "#2a2f3a",
          900: "#1a1d24",
          950: "#0d0f13",
        },
        warm: {
          50: "#faf9f7",
          100: "#f3f1ec",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-libre)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 20px -4px rgba(26, 29, 36, 0.08)",
        photo: "0 8px 32px -8px rgba(26, 29, 36, 0.18)",
        lift: "0 16px 48px -12px rgba(26, 29, 36, 0.15)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(26,29,36,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,29,36,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
