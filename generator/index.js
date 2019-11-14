const process = require('child_process')

module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  let packageJson = {
    name: `@sd-luban/${rootOptions.projectName}`,
    private: false,
    scripts: {
      "build": "node ./.bin/build.js",
      "upload": "node ./.bin/publish.js",
    },
    dependencies: {
      "axios": "^0.18.0",
      "lodash": "^4.17.11",
      "qs": "^6.6.0",
      "cos-nodejs-sdk-v5": "^2.5.6",
    },
    devDependencies: {
      "puppeteer": "^2.0.0",
      "less": "^3.0.4",
      "less-loader": "^5.0.0"
    },
    main: "./src/index.js",
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
  }
  // 判断是否依赖sd-account和sd-ajax
  options.use.forEach(item => options[item] = true)
  if (options.sdAccount) {
    packageJson.devDependencies['sd-account'] = '6.1.29'
  }
  if (options.sdAjax) {
    packageJson.devDependencies['sd-ajax'] = '^0.5.10'
  }
  api.extendPackage(packageJson)
  api.render('./templates/', {
    options,
    rootOptions
  })
  api.render(files => {
    delete files['src/components/HelloWorld.vue']
    delete files['public/favicon.ico']
    delete files['src/views/Home.vue']
    delete files['src/views/About.vue']
    delete files['src/store.js']
    delete files['src/router.js']
    delete files['src/main.js']
    delete files['src/App.vue']
    delete files['src/assets/logo.png']
  }),
  api.onCreateComplete(() => {
    process.execSync('git config --local user.email "jiwenbing88@126.com" && git config --local user.name "luban"', { cwd: api.resolve('./') })
  })
}
