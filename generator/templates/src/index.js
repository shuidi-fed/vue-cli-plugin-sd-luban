/**
 * @author jiwenbing
 * Date: 2019/3/4
 */
import component from './component.vue'

component.install = function (Vue) {
  Vue.component(component.name, component)
}

export default component

