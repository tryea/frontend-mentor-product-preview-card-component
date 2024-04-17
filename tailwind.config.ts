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
        cream: "#F2EAE2",
        aurometal_saurus: "#6C7289",
        deep_aquamarine: "#3D8168",
        deep_aquamarine_hover: "#1A4032",
        gun_metal: "#1C232B",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        fraunces: "var(--font-fraunces)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
