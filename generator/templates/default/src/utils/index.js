import publicUtils from 'seaPublic/utils'
const ownUtils = publicUtils.requireContextApi(require.context('./', true, /\.js$/), ['index.js'])

export default {
  ...publicUtils,
  ...ownUtils
}
