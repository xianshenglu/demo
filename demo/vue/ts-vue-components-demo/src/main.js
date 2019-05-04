import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import { SelectSupportAll } from 'ts-vue-components'
Vue.use(SelectSupportAll)

console.log(SelectSupportAll)
// import TsVueComponents from 'ts-vue-components'
// import 'ts-vue-components'
// console.log(TsVueComponents)

new Vue({
  render: h => h(App)
}).$mount('#app')
