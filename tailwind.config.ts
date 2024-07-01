import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      fill: "100% 100%",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nasalin: ['"nasal"', "sans-serif"],
      },
    },
  },
  components: {
    blueBlur: {
      content: "",
      position: "relative",
      display: "flex",
      placeItems: "center",
      before: {
        absolute: true,
        height: "full",
        width: "100%",
        borderRadius: "full",
        blur: "xl",
      },
      after: {
        absolute: true,
        zIndex: "-20",
        height: "calc(100% - 2rem)",
        width: "calc(100% - 4rem)",
        translate: "x-1/3",
        blur: "xl",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
