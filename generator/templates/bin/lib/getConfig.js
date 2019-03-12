const { ajax, list } = require('./ajax')

module.exports = async () => {
  let config = await ajax.post(list.getConfig)

  return config.data.data
}

