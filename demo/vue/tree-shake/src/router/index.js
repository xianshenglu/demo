import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const HelloWorld = () =>
  import(/* webpackChunkName: "HelloWorld" */ '../components/HelloWorld.vue')
const HelloWorld2 = () =>
  import(/* webpackChunkName: "HelloWorld2" */ '../components/HelloWorld2.vue')
export default new VueRouter({
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld2',
      component: HelloWorld2
    }
  ]
})
