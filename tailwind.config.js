/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // ← includes all your pages and components
    "./components/**/*.{js,ts,jsx,tsx}", // if you move components outside /app
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}