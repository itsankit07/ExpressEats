/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'grey' : '#686b78',

      },
      fontFamily: {
        GrotThin: ['Grotesque Pro Thin'],
        GrotReg: ['Grotesque Pro Reg'],
        GrotMed: ['Grotesque Pro Med'],
        GrotBold: ['Grotesque Pro Bold'],
        GrotBlack: ['Grotesque Pro Black'],
        ProximaNovaThin: ['ProximaNova Condensed Thin'],
        ProximaNovaMed: ['ProximaNova Condensed Med'],
        ProximaNovaSemiBold: ['ProximaNova Condensed SemiBold'],
        ProximaNovaBold: ['ProximaNova Condensed Bold'],
        ProximaNovaBlack: ['ProximaNova Condensed Black'],
      },
    },
  },
  plugins: [],
}