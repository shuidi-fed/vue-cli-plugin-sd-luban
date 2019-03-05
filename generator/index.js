module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    private: false,
    scripts: {
      "build": 'vue-cli-service build --modern',
      "publish": "node ./bin/publish.js",
    },
    dependencies: {
      "axios": "^0.18.0",
      "lodash": "^4.17.11",
      "qs": "^6.6.0",
      "child_process": "^1.0.2",
      "cos-nodejs-sdk-v5": "^2.5.6",
      "puppeteer": "^1.12.2",
    },
    devDependencies: {
      "less": "^3.0.4",
      "less-loader": "^4.1.0",
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
    delete files['src/store.js']
    delete files['src/router.js']
    delete files['src/main.js']
    delete files['src/App.vue']
    delete files['src/assets/logo.png']
  })
}
