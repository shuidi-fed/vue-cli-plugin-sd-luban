module.exports = {
  devServer: {
    port: 9527
  },
  css: {
    extract: false
  },
  pages: {
    index: {
      entry: 'examples/main.js'
    },
    test: {
      entry: 'src/index.js',
      chunks: ['test.js']
    }
  }
}
