const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const process = require('process')

const root = process.cwd()

// 将src下的文件夹的名字都设为alias
function aliasProvider() {
  const aliasObj = {
    'vue$': 'vue/dist/vue.esm.js',
    '@': path.join(root, 'src')
  }
  fs.readdirSync(path.join(root, 'src'))
    .filter(fileName => fs.lstatSync(path.join(root, 'src', fileName)).isDirectory())
    .forEach(fileName => {
      aliasObj[fileName] = path.join(root, 'src', fileName)
    })
  return aliasObj
}
const alias = aliasProvider()

module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    // 移除 prefetch 插件
    // webpackConfig.plugins.delete('prefetch')
    // 自动生成alias
    Object.keys(alias).forEach(key => {
      webpackConfig.resolve.alias.set(key, alias[key])
    })
  })

  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
  })
}
