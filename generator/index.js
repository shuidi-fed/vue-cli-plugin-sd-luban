const shell = require('shelljs')
module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      "build": 'vue-cli-service build --modern',
    },
    dependencies: {
      "vue-router": "^3.0.2",
      "vuex": "^3.1.0",
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

  api.render('./templates/sea/', options)
  console.log('vue-cli-pligin-sd version: 0.0.8')
  api.onCreateComplete(() => {
    // cd到该目录下
    shell.cd(api.resolve('./'))
    // 清除vue-cli自带的favicon
    shell.rm('./public/favicon.ico')
    // 清除vue-cli自带的components,views
    shell.rm('./src/components/*')
    shell.rm('./src/views/*')
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