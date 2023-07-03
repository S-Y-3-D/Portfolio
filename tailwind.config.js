/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
primary:{
500:"#4F3DFF",
800:"#FFFFE3",
"head-white": "#3C3C43",
"head-black": "#DFDFD7",
"para-black":"#9999A0",
"para-white": "#6D6D72"
},
},
      fontFamily:{
        satoshiRg : ["satoshi-Rg","sans"],
        satoshiMd :["satoshi-Md","sans"],
        satoshiB :["satoshi-Bold","sans"],
        outfitB :["outfit-Bold","sans"],
        outfitMd :["outfit-Md","sans"],
        notoUrdu:["noto-urdu","sans"]
      },
    },
  },
  plugins: [],
}

