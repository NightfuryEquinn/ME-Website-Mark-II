module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backblue: '#0A1633',
        backlightblue: '#163C7C',
        neonblue: '#56BDC6',
        neonpurple: '#711490',
        neonpink: '#EA33D9',
        neonyellow: '#F9E852',
        textwhite: '#b3c3d4',
      },
      fontFamily: {
        orbit: ['Orbitron'],
        space: ['"Space Mono"'],
      },
      boxShadow: {
        musicShadow: '-12.5px 12.5px #0A1633, -15px 15px #F9E852, -10px 15px #F9E852, -15px 10px #F9E852',
        neonblueShadow: '-33px 23px #0A1633, -35px 25px #56BDC6, -35px 21px #56BDC6, -31px 25px #56BDC6',
        neonpinkShadow: '-33px 23px #0A1633, -35px 25px #EA33D9, -35px 21px #EA33D9, -31px 25px #EA33D9',
        neonyellowShadow: '-33px 23px #0A1633, -35px 25px #F9E852, -35px 21px #F9E852, -31px 25px #F9E852',
        neonpurpleShadow: '-33px 23px #0A1633, -35px 25px #711490, -35px 21px #711490, -31px 25px #711490',
      }
    },
  },
  plugins: [],
}
