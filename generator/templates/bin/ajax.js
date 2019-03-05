const Axios = require('axios')
const qs = require('qs')

var ajax = Axios.create({
  baseURL:'https://api.shuidichou.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})

ajax.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config
})

module.exports = ajax
