const Axios = require('axios')
const qs = require('qs')

const ajax = Axios.create({
  baseURL:'https://luban.shuiditech.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})

ajax.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config
})

const list = {
  addOrUpdateByName: '/api/component/addOrUpdateByName',
  getConfig: '/api/config/get'
}

module.exports = {
  ajax,
  list
}
