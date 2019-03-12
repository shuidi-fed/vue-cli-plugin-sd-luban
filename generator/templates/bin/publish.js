const chalk = require('chalk')
const shell = require('shelljs')
const process = require('child_process')
const getConfig = require('./lib/getConfig.js')
const uploadComponentInfo = require('./uploadComponentInfo.js')
const uploadFile = require('./lib/uploadFile.js')
const projecName = require('../package.json').name;

let pChild
let serveProcess

// 发布npm
const isPublishNpmSuccess = () => {
  if (shell.exec('npm publish').code === 0) {
    return true
  }

  console.log(chalk.red.bold('npm组件发布失败,请重试!'))
  return false
}

const start = async () => {
  // 发布npm
  // if (!isPublishNpmSuccess()) {
  //   return
  // }
  let config = await getConfig()
  config = Object.keys(config).map(value => config[value])

  // 创建截图进程
  pChild = process.fork('./bin/lib/puppeteer.js', config )

  // 监听子进程截图完成消息，并kill devserve进程
  pChild.on('message', function (imgUrl) {

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
      uploadComponentInfo(imgUrl, `https://${Location}`)
      console.log(chalk.green.bold(`文件上传成功`))

      serveProcess.kill()
    })
  })

  // 执行run serve
  serveProcess = process.exec('npm run serve')
}

start()
