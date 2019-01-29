module.exports = {
  // 修改output.publicPath
  publicPath: process.env.NODE_ENV === 'production'
    ? '/<%= rootOptions.projectName.replace(/^sea-/,'') %>-static/'
    : '/',
  // 修改启动端口
  devServer: {
    port: 7000
  },
}