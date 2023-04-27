/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
primary:{
500:"#4F3DFF",
800:"#FFFFE3"
}
      },
      fontFamily:{
        chillaxSemi : ["chillax-semibold","sans"],
        chillaxMd :["chillax-md","sans"]
      },
    },
  },
  plugins: [],
}
