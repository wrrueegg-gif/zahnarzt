import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean Medical Premium palette
        ink: {
          DEFAULT: "#0f2a33",
          soft: "#39535c",
          muted: "#6b8189",
        },
        teal: {
          50: "#eef9f8",
          100: "#d4f0ee",
          200: "#a9e1de",
          300: "#74cbc7",
          400: "#3faeab",
          500: "#1f9491",
          600: "#137876",
          700: "#125f5e",
          800: "#134c4c",
          900: "#133f40",
        },
        sand: {
          50: "#fbfaf7",
          100: "#f5f2ea",
          200: "#ebe5d6",
        },
        gold: {
          400: "#d9b46a",
          500: "#c79f4d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,42,51,0.04), 0 12px 32px -12px rgba(15,42,51,0.12)",
        lift: "0 2px 4px rgba(15,42,51,0.05), 0 24px 60px -20px rgba(15,42,51,0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
