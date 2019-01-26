import Vue from 'vue'
import router from './router'
// 插件
import Api from 'seaPublic/plugins/Api'
import MomentPlugin from 'seaPublic/plugins/MomentPlugin'
import StoragePlugin from 'seaPublic/plugins/StoragePlugin'
import RegexPlugin from 'seaPublic/plugins/RegexPlugin'
import GlobalConfig from 'seaPublic/plugins/GlobalConfig'
import UtilsPlugin from 'seaPublic/plugins/UtilsPlugin'
import LodashPlugin from 'seaPublic/plugins/LodashPlugin'
import SeaSDKPlugin from 'sd-sea-sdk'

import App from './App'
import store from './store'
import 'styles/index.less'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ButtonWithInputsDialog from 'seaPublic/components/buttonWithInputsDialog'
import ButtonWithPrompt from 'seaPublic/components/buttonWithPrompt'

Vue.use(SeaSDKPlugin, router)
Vue.use(Api)
Vue.use(MomentPlugin)
Vue.use(StoragePlugin)
Vue.use(GlobalConfig)
Vue.use(RegexPlugin)
Vue.use(UtilsPlugin)
Vue.use(LodashPlugin)
Vue.component('ButtonWithInputsDialog', ButtonWithInputsDialog)
Vue.component('ButtonWithPrompt', ButtonWithPrompt)

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
