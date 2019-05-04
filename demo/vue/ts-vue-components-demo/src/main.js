import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// import TsVueComponents from 'ts-vue-components/src/index'
import TsVueComponents from 'ts-vue-components'
// import 'ts-vue-components'

// console.log(TsVueComponents)

// const { SelectSupportAll } = TsVueComponents

Vue.use(TsVueComponents)

// console.log(SelectSupportAll)

new Vue({
  render: h => h(App)
}).$mount('#app')
