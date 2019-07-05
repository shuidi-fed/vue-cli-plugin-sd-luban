const chalk = require('chalk')
const shell = require('shelljs')
const process = require('child_process')
const os = require('os')
const fs = require('fs')
const getConfig = require('./lib/getConfig.js')
const uploadComponentInfo = require('./uploadComponentInfo.js')
const uploadFile = require('./lib/uploadFile.js')

// 获取项目名字
let projecName = require('../package.json').name;
let componentConfig = fs.readFileSync('./config/index.json', 'utf8')

let pChild
let serveProcess

projecName = projecName.includes('/') ? projecName.split('/')[1] : projecName

const builds = {
  // 是否包含自定义图片
  isHasImg: !!JSON.parse(componentConfig).img,
  // 发布npm
  isPublishNpmSuccess: () => {
    if (shell.exec('snpm publish').code === 0) {
      return true
    }

    console.log(chalk.red.bold('snpm组件发布失败,请重试!'))
    return false
  },

  uploadConfig: (config, imgUrl = '') => {
    shell.exec('npm run build')

    uploadFile({
      SecretId: config[0],
      SecretKey: config[1],
      Bucket: config[2],
      Region: config[3]
    }, {
      Key: `/js/comoponent-${new Date().getTime()}.js`,
      FilePath: `./dist/${projecName}.umd.min.js`
    }, ({ Location }) => {
      // 存储组件信息
      uploadComponentInfo(componentConfig.img || imgUrl, `https://${Location}`)
        console.log(chalk.green.bold(`文件上传成功`))
    })
  },
  build: () => {
    builds.start()
  },
  start: async () => {
    let config

    // 发布npm
    if (!builds.isPublishNpmSuccess()) {
      return
    }

    config = await getConfig()
    config = Object.keys(config).map(value => config[value])

    // 如果包含自定义图片，就不需要截图功能
    if (builds.isHasImg) {
      builds.uploadConfig(config)
      return
    }

    // 创建截图进程
    pChild = process.fork('./.bin/lib/puppeteer.js', config )
    // 监听子进程截图完成消息，并kill devserve进程
    pChild.on('message', function (imgUrl) {
      builds.uploadConfig(config, imgUrl)
      serveProcess.kill()
    })

    // 执行run serve
    serveProcess = process.exec('npm run serve')
  }
}

builds.build()
