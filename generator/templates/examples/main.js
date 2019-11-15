import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import component from '../src/index'
<% if (options.sdAccount) { %>
// 文档：https://wiki.shuiditech.com/pages/viewpage.action?pageId=207684729
import account from 'sd-account'
<% } %>
<% if (options.sdAjax) { %>
// 文档：https://wiki.shuiditech.com/pages/viewpage.action?pageId=94110028
import { createAxios, setAjaxDebugState } from 'sd-ajax'
<% } %>

<% if (options.sdAccount) { %>
Vue.use(account, { userThirdScope: 'base', thirdType: 17 })
Vue.sdAccount.login({ url: window.location.href })
<% } %>
<% if (options.sdAjax) { %>
// 开启调试
setAjaxDebugState(true)
const API = createAxios({
  timeout: 8000, // default 15000
  baseURL: '//api.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' // default
  }
}, {})
Vue.prototype.$api = API
<% } %>

Vue.use(component)

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
