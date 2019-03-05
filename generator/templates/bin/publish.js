const chalk = require('chalk')
const process = require('child_process')
const fs = require('fs')
const ajax = require('./ajax')

let pChild
let serveProcess

ajax.post('/api/cf/v4/get-funding-info', {
  infoUuid: '6fea63ee-fdcf-4a07-bbae-8b413ad7c7bd',
}).then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(
    chalk.red.bold(err)
  )
})

/*
const publishNpm = () => {
  process.exec('npm publish')
  console.log(chalk.green.bold(`npm发布成功`))
}

const start = () => {
  // 发布npm
  publishNpm()

  // 创建截图进程
  pChild = process.fork('./bin/puppeteer.js')
  // 监听子进程截图完成消息，并kill devserve进程
  pChild.on('message', function (fileUrl) {
    console.log(chalk.green.bold(`图片上传成功，地址:${fileUrl}`))
    serveProcess.kill()
  })

  // 执行run serve
  serveProcess = process.exec('npm run serve')
}

start()
*/


/* 读取config文件
let componentConfig = fs.readFileSync('./config/index.json', 'utf8');
console.log(JSON.parse(componentConfig));
let editorConfig = fs.readFileSync('./config/editor.json', 'utf8');
console.log(JSON.parse(editorConfig));
*/

