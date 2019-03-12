const puppeteer = require('puppeteer');
const uploadFile = require('./uploadFile.js')

let browser
let page

// 上传图片到cos
const updateFile = (callback) => {
  uploadFile({
    SecretId: process.argv[2],
    SecretKey: process.argv[3],
    Bucket: process.argv[4],
    Region: process.argv[5]
  }, {
    Key: `/imgs/comoponent-${new Date().getTime()}.png`,
    FilePath: 'example.png'
  }, (file) => {
    callback && callback(file)
  })
}

setInterval(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()

  await page.setViewport({width:375, height:375})
  await page.goto('http://localhost:9527')
  await page.screenshot({path: 'example.png'})
  await browser.close()

  updateFile((data) => {
    process.send(`https://${data.Location}`)
    process.exit()
  })
}, 3000)
