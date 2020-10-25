import Vue from 'vue'
import { CreateElement, VNode } from 'vue/types/umd'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// todo fix type eslint bug
const x: number = '1'

new Vue({
  router,
  store,
  render: (h: CreateElement): VNode => h(App)
}).$mount('#app')
