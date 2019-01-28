import requireContextApi from 'seaPublic/utils/requireContextApi'
export default requireContextApi(require.context('./list/', true, /\.js$/))
