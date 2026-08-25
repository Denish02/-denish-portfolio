import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBFBFD",
        mist: "#F5F5F7",
        void: "#000000",
        graphite: "#1D1D1F",
        ink: "#1D1D1F",
        fog: "#86868B",
        smoke: "#A1A1A6",
        hairline: "#D2D2D7",
        hairlineDark: "#39393C",
        accent: "#0066CC",
        accentDim: "#004C99",
      },
      fontFamily: {
        display: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
