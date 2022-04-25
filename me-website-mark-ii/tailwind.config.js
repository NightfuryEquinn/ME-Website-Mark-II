module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackblue: '#131725',
        darkblue: '#1f3a6c',
        greyblue: '#517ca7',
        lightblue: '#407dd0',
        skyblue: '#61b9e7',
        
        blackpurple: '#1c2646',
        darkpurple: '#3f478c',
        greypurple: '#6b3c53',
        lightpurple: '#595cc8',
        skypurple: '#c4abe0',

        greywhite: '#b3c3d4',
      },
      fontFamily: {
        title: ['Allura'],
        para: ['"Playfair Display"']
      }
    },
  },
  plugins: [],
}
