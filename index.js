const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const process = require('process')

const dir = process.cwd()

// 将src下的文件夹的名字都设为alias
function aliasProvider() {
  const aliasObj = {
    'vue$': 'vue/dist/vue.esm.js',
    '@': path.join(dir, 'src')
  }
  fs.readdirSync(path.join(dir, 'src'))
    .filter(fileName => fs.lstatSync(path.join(dir, 'src', fileName)).isDirectory())
    .forEach(fileName => {
      aliasObj[fileName] = path.join(dir, 'src', fileName)
    })
  return aliasObj
}
const alias = aliasProvider()
console.log('alias:', alias)

module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    // 移除 prefetch 插件
    webpackConfig.plugins.delete('prefetch')
    // 自动生成alias
    Object.keys(alias).forEach(key => {
      webpackConfig.resolve.alias.set(key, alias[key])
    })
    // dll插件
    webpackConfig.plugin('DllReferencePlugin')
      .use(webpack.DllReferencePlugin, [{
        context: dir,
        manifest: require(`${dir}/sea-manifest.json`)
      }])
  })

  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
  })

  api.registerCommand('test', args => {
    // 注册 `vue-cli-service test`
  })
}