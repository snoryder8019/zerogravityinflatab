module.exports = {
  content:
  ["./views/**/*.ejs"],
  ["./pages/*.ejs"],
  ["./public/**/*.{css,js}"]
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg: '976px',
      xl:'1440px'
    },
    colors: {
      'blue':'#1effff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6'
    }
    extend: {},
  },
  plugins: [],
}
