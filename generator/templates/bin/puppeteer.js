const puppeteer = require('puppeteer');
const COS = require('cos-nodejs-sdk-v5');

let browser
let page

// 上传图片到cos
const updateFile = (callback) => {
  const cos = new COS({
    SecretId: 'AKIDRp36A7RhIhvzrZO388zfAi9PUQDpBMf2',
    SecretKey: 'V57OcmoxzraAfBwZ0S943sZ4NZ3ThkeZ'
  })

  cos.sliceUploadFile({
    Bucket: 'luban-1254024480',
    Region: 'ap-beijing',
    Key: 'example.png',
    FilePath: 'example.png'
  }, (err, data) => {
    callback && callback(data)
  })
}

setInterval(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()

  await page.setViewport({width:375, height:375})
  await page.goto('http://localhost:8082')
  await page.screenshot({path: 'example.png'})
  await browser.close()

  updateFile((data) => {
    process.send(`https://${data.Location}`)
    process.exit()
  })
}, 3000)

