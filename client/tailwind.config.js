/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stranger: ["'Benguiat', serif"],
        horror: ["'Creepster', cursive"],
        typewriter: ["'Special Elite', cursive"],
      },
      colors: {
        'stranger-red': '#b91c1c',
        'stranger-dark': '#0a0a0a',
        'stranger-glow': '#ff3333',
      },
    },
  },
  plugins: [],
}
