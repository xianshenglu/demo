import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'foo',
    path: '/foo',
    component: () => import('../components/HelloWorld')
  },
  {
    name: 'bar',
    path: '/bar',
    component: () => import('../components/HelloWorld')
  }
]
const router = new VueRouter({
  routes
})

export default router
