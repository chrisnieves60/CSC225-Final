/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./public/andromeda_2-wallpaper-3840x2160.jpg')",
      },
    },
  },
  plugins: [],
}

