module.exports = {
  plugins: {
    'posthtml-include': {
      root: __dirname + '/src'
    },
    'posthtml-modules': {
      root: './src'
    }
  }
}
