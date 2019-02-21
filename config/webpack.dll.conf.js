const path = require('path')
const process = require('process')
const webpack = require('webpack')

const cwd = process.cwd()

let vendor = [
  'vue/dist/vue.esm.js',
  'vuex',
  'vue-router',
  // 'element-ui',
  'axios',
  'lodash',
  'dayjs',
  'qs',
]

module.exports = {
  mode: 'production',
  entry: {
    vendor
  },
  output: {
    path: path.join(cwd, './static'),
    filename: 'sea-dll.js',
    library: 'SEA_DLL'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(cwd, 'sea-manifest.json'),
      name: 'SEA_DLL',
      context: cwd
    }),
  ]
}
