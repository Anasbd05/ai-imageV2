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
        'text': '#1a0505',
        'background': '#fcf1f1',
        'primary': '#da322f',
        'secondary': '#a6ea87',
        'accent': '#53e06f',
      },
      fontFamily: {
        "dm_sans": "DM_Sans"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
