module.exports = [
  {
    type: 'input',
    name: 'port',
    message: '输入启动项目的端口',
    validate: input => !!input,
  },
]