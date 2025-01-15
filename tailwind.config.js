/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        "epilogue": "var(--font-epilogue)"
      },
      colors:{
        background: "var(--background)",
        foreground: "var(--foreground)"
      }
    },
  },
  plugins: [],
};
