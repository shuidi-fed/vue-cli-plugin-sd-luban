const process = require('child_process')

module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  let packageJson = {
    name: `@sd-luban/${rootOptions.projectName}`,
    private: true,
    scripts: {
      "build": "luban-publisher build",
      "upload": "luban-publisher upload",
      "upload-test": "luban-publisher upload -t",
      "unpublish": "luban-publisher unpublish"
    },
    dependencies: {},
    devDependencies: {
      "less": "^3.0.4",
      "less-loader": "^5.0.0",
      "@sd/luban-publisher": "^0.1.8"
    },
    main: "./src/index.js",
    license: "MIT",
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
    packageJson.devDependencies['babel-polyfill'] = '^6.26.0'
  }
  if (options.sdAjax) {
    packageJson.devDependencies['sd-ajax'] = '^0.5.10'
  }
  if (options.pxtorem) {
    packageJson.devDependencies['postcss-pxtorem'] = '^4.0.1'
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
  api.onCreateComplete(() => { })
}
