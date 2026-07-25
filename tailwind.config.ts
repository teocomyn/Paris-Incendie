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
          50: "#fff4ee",
          100: "#ffe4d6",
          200: "#ffc9ad",
          300: "#ffa070",
          400: "#ff7333",
          500: "#FC5000",
          600: "#e04500",
          700: "#b83700",
          800: "#8f2c00",
          900: "#5c1c00",
        },
        navy: {
          50: "#f5f5f5",
          100: "#E4E4E4",
          200: "#c8c8c8",
          300: "#9a9a9a",
          400: "#6b6b6b",
          500: "#4a4a4a",
          600: "#333333",
          700: "#222222",
          800: "#141414",
          900: "#0a0a0a",
          950: "#050505",
        },
        warm: {
          50: "#0a0a0a",
          100: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 24px -4px rgba(0, 0, 0, 0.4)",
        photo: "0 8px 40px -8px rgba(0, 0, 0, 0.6)",
        lift: "0 24px 64px -16px rgba(0, 0, 0, 0.5)",
        glow: "0 0 80px -12px rgba(252, 80, 0, 0.45)",
        "glow-sm": "0 0 40px -8px rgba(252, 80, 0, 0.35)",
        "glow-lg": "0 0 120px -20px rgba(252, 80, 0, 0.5)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(252,80,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(252,80,0,0.07) 1px, transparent 1px)",
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        "flame-gradient":
          "linear-gradient(180deg, #E4E4E4 0%, #FC5000 45%, #050505 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(252,80,0,0.35) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "64px 64px",
        grain: "256px 256px",
      },
      animation: {
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
