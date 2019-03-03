const shell = require('shelljs')
const version = require('../package.json').version
module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      "build": 'vue-cli-service build --modern',
    },
    dependencies: {
      "axios": "^0.18.0",
      "lodash": "^4.17.11",
      "qs": "^6.6.0",
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
    "eslintIgnore": ["src/styles/*"],
  })
  console.log(options, rootOptions)
  api.render('./templates/', {
    options,
    rootOptions
  })
  api.render(files => {
    delete files['src/components/HelloWorld.vue']
    delete files['public/favicon.ico']
    delete files['src/views/Home.vue']
    delete files['src/views/About.vue']
    delete files['src/router.js']
    delete files['src/assets/logo.png']
  })
}
