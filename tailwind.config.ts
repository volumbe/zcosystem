import type { Config } from "tailwindcss";

export default {
  content: ["./public/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'farm': "url('public/images/background-farm.png')",
      },
      colors: {
        'logo-green': '#018136',
      }
    },
  },
  plugins: [],
} satisfies Config;
