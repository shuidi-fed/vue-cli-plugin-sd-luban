module.exports = (api, options, rootOptions) => {
  console.log(api, options, rootOptions)
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0",
      "element-ui": "^2.4.11",
      "lodash": "^4.17.11",
      "moment": "^2.22.2",
      "sd-sea-sdk": "^0.2.3",
    }
  })
}