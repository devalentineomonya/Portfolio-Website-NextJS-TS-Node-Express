import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#e9204f",
        "dark-primary": "#121212",
        "light-primary": "#eff2f7",
        "dark-secondary": "#333333",
        "light-secondary": "#808080",
        "text-secondary": "#454545",
        "light-text-secondary": "#1c1c1c",
      },
      backgroundColor: {
        "bg-primary": "#ffffff",
        "bg-contact": "#f8f8f8",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
      boxShadowColor: {
        "navbar": "rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        caveat: ["Caveat", "ui-sans-serif", "system-ui"],
        dosis:["Dosis", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
export default config;
