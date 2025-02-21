import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#091a09',
        'background': '#f0faf1',
        'primary': '#43be52',
        'secondary': '#99ccdc',
        'accent': '#769ed0',
      },
      fontFamily: {
        "dm_sans": "DM_Sans"
      }
    },
  },
  plugins: [],
} satisfies Config;
