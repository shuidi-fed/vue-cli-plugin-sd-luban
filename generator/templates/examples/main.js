import Vue from 'vue'
import App from './App'
import SdLubanText from '../src/index'

Vue.use(SdLubanText)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
