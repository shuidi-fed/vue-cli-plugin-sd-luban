module.exports = {
  devServer: {
    port: 9527
  },
  css: {
    <% if (options.pxtorem) { %>loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 32, // 换算的基数
            // selectorBlackList: ['xx'], // 忽略转换正则匹配项
            propList: ['*'],
          }),
        ]
      }
    },<% } %>
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
