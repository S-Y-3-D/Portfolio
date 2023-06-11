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
},
},
      fontFamily:{
        satoshiRg : ["satoshi-Rg","sans"],
        satoshiMd :["satoshi-Md","sans"],
        satoshiB :["satoshi-Bold","sans"],
        outfitB :["outfit-Bold","sans"],
        outfitMd :["outfit-Md","sans"],
      },
    },
  },
  plugins: [],
}

