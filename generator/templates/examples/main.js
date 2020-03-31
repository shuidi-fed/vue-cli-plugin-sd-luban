<% if (options.sdAccount) { %>import 'babel-polyfill'<% } %>
<% if (options.sdData) { %>import SD_DATA from 'sd-data'<% } %>
import Vue from 'vue'
import App from './App'
import Utils from '../utils'
import component from '../src/index'
<% if (options.sdAccount) { %>
// 文档：https://wiki.shuiditech.com/pages/viewpage.action?pageId=207684729
import account from 'sd-account'
<% } %><% if (options.sdAccount) { %>
Vue.use(account, { userThirdScope: 'base', thirdType: 17 })
Vue.sdAccount.login({ url: window.location.href })
<% } %><% if (options.sdData) {%>
Vue.SD_DATA = Vue.$SD_DATA = Vue.prototype.$SD_DATA = SD_DATA
Vue.SD_DATA.init({})
<% } %>
Vue.use(component)
Vue.prototype.$Utils = Utils
/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
