/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"var(--primary)",
        "black":"var(--black)",
        "dark-gray":"var(--dark-gray)",
        "regular-gray":"var(--regular-gray)",
        "light-gray":"var(--light-gray)",
        "white":"var(--white)",
        "blue":"var(--blue)",
      },
      boxShadow:{
        "navbar":"0px 2px 15px rgba(0, 0, 0, 0.1)"
      },
      keyframes:{
        fade:{
          '0%':{transform:'scale(90%); opacity:0'},
          '100%':{transform:'scale(100%)'},
        },
        'fade-up-down':{
          '0%':{transform:'translateY(-30px)'},
          '100%':{transform:'translateY(5px)'},
        },
        blink:{
          '0%':{transform:'scale(30%)'},
          '100%':{transform:'scale(100%)'},
        },
        animation:{
          fade:'fade 200ms ease-in 1',
          'fade-up-down':'fade-up-down 200ms linear infinite',
          'blink':'blink 200ms linear infinite',
        }
      }
    },
  },
  plugins: [],
}

