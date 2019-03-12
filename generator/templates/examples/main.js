import Vue from 'vue'
import App from './App'
import component from '../src/index'

Vue.use(component)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
