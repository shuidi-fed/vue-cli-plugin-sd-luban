const category = require('./category.json')
module.exports = [{
  type: 'input',
  name: 'name',
  message: '请输入组件名称',
  validate: function(input) {
    return !!input
  }
}, {
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
  default: ['sdAccount']
}, {
  type: 'confirm',
  name: 'isBiz',
  message: '是否为业务组件',
  default: false
}, {
  name: 'bizType',
  type: 'list',
  message: '请选择业务线',
  when: function(answers) {
    return answers.isBiz
  },
  choices: [{
    name: '水滴筹',
    value: 1
  }, {
    name: '水滴互助',
    value: 2
  }, {
    name: '水滴保',
    value: 3
  }]
}, {
  name: 'category',
  type: 'list',
  message: '请选择组件类型',
  when: function(answers) {
    let list = category.data || []
    return list.length
  },
  pageSize: 20,
  choices: function() {
    let list = category.data || []
    return list.map(item => {
      return {
        name: item.name,
        value: item.id
      }
    })
  }
}]