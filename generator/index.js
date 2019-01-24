module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0",
      "element-ui": "^2.4.11",
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
        "prefer-promise-reject-errors": [
          "error",
          {
            "allowEmptyReject": true
          }
        ]
      },
      "globals": {
        "_": true
      },
      "parserOptions": {
        "parser": "babel-eslint"
      }
    },
  })
  const files = {
    './sea-manifest.json': './templates/sea/src/sea-manifest.json',
    './public/index.html': './templates/sea/src/index.html',
  }
  api.render(files)
  console.log('vue-cli-pligin-sd version: 0.0.4')
}