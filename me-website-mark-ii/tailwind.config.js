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
        neonblueShadow: '',
        neonpinkShadow: '',
        neonyellowShadow: '',
      }
    },
  },
  plugins: [],
}
