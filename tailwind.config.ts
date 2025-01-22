import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        emerald: "#18BD76",
        "outer-space": "#4A5759",
        night: "#0A0A0A",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "15%": {
            transform: "rotate(14deg)",
          },
          "30%": {
            transform: "rotate(-8deg)",
          },
          "40%": {
            transform: "rotate(14deg)",
          },
          "50%": {
            transform: "rotate(-4deg)",
          },
          "60%": {
            transform: "rotate(10deg)",
          },
          "70%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
