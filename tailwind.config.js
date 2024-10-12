/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["IBM Plex Mono"],
      ubuntu: ["Ubuntu"],
    },

    extend: {
      backgroundImage: {
        'bg1': 'url("./src/assets/bg1.jpg")',
        'bg2': 'url("./src/assets/bg2.jpeg")',
      },
      colors:{
        'primary': '#12F7D6',
        'secondary': '#1A1E23',
        'tertary': '#292F36',
      },
      screens: {
        'xs': '375px',
        'md': '769px',
      },
    },
  },
  plugins: [],
}

