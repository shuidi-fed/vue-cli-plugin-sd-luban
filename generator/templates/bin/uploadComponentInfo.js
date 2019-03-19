const chalk = require('chalk')
const fs = require('fs')
const { ajax, list } = require('./lib/ajax')

module.exports = (imgFile, jsFile) => {
  // 读取config文件
  let componentConfig = fs.readFileSync('./config/index.json', 'utf8');
  let editorConfig = fs.readFileSync('./config/editor.json', 'utf8');

  try {
    componentConfig = JSON.parse(componentConfig)
    componentConfig.img = imgFile
    componentConfig.editor = editorConfig
    componentConfig.jsSrc = jsFile
    // 默认写死h5
    componentConfig.platform = 0
    // 是否是公共组件
    componentConfig.isPublic = componentConfig.isPublic || 0
    // 是否是交互组件
    componentConfig.category = componentConfig.category || 0

    ajax.post(list.addOrUpdateByName, {
      name: componentConfig.name,
      componentInfo: componentConfig
    }).then((data) => {
      console.log(
        chalk.green.bold('发布成功')
      )
    }).catch((err) => {
      console.log(
        chalk.red.bold(err)
      )
    })
  } catch(e) {
    console.log(
      chalk.red.bold('解析JSON文件失败')
    )
  }
}

