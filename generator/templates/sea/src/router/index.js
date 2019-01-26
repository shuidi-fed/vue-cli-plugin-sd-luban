import Vue from 'vue'
import VueRouter from 'vue-router'
import maps from './map'
Vue.use(VueRouter)

export default new VueRouter({
  routes: maps,
})
