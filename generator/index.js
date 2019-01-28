const shell = require('shelljs')
module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      "build": 'vue-cli-service build --modern',
    },
    dependencies: {
      "axios": "^0.18.0",
      "element-ui": "^2.5.0",
      "lodash": "^4.17.11",
      "moment": "^2.22.2",
      "sd-sea-sdk": "^0.2.3",
    },
    devDependencies: {
      "less": "^3.0.4",
      "less-loader": "^4.1.0",
    },
    eslintConfig: {
      "root": true,
      "env": {
        "node": true
      },
      "extends": [
        "plugin:vue/essential",
        "@vue/standard"
      ],
      "rules": {
        "space-before-function-paren": "off",
        "comma-dangle": "off",
      },
      "globals": {
        "_": true
      },
      "parserOptions": {
        "parser": "babel-eslint"
      }
    },
  })
  console.log(options)
  api.render('./templates/default/', options)
  api.render(files => {
    delete files['src/components/HelloWorld.vue']
    delete files['public/favicon.ico']
    delete files['src/views/Home.vue']
    delete files['src/views/About.vue']
    delete files['src/router.js']
    delete files['src/store.js']
  })
  console.log('vue-cli-pligin-sd-sea version: 0.0.3')
  api.onCreateComplete(() => {
    // cd到该目录下
    shell.cd(api.resolve('./'))
    // 检测是否安装git
    if (!shell.which('git')) {
      shell.echo('git not found')
      shell.exit(1)
      return
    }
    // 安装submodule
    shell.exec('git submodule add git@git.shuiditech.com:frontend/sea/public-module.git src/seaPublic')
  })
}