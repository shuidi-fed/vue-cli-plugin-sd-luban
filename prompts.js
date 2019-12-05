module.exports = [{
  type: 'checkbox',
  name: 'use',
  message: '请选择依赖的插件',
  choices: [{
    name: 'sd-account',
    value: 'sdAccount'
  }, {
    name: 'sd-ajax',
    value: 'sdAjax'
  }, {
    name: 'postcss-pxtorem',
    value: 'pxtorem'
  }],
  default: []
}]