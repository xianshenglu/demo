import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
// const HelloWorldCopy = Vue.extend(HelloWorld)
// console.log(new HelloWorldCopy().$mount())
console.log(HelloWorld)
Vue.use(VueRouter)

const routes = [
  {
    name: 'foo',
    path: '/foo',
    // component: HelloWorld,
    // component: { ...HelloWorld },
    // component: () => import('../components/HelloWorld'),
    component: () => {
      const result = import('../components/HelloWorld')
      return result.then(module => {
        return {
          __esModule: true,
          default: { ...module.default }
        }
      })
    }
    // component: () => {
    //   const result = import('../components/HelloWorld')
    //   return result.then(module => {
    //     return {
    //       __esModule: true,
    //       // default: { ...module.default }
    //       default: {
    //         name: 'foo',
    //         render() {
    //           return <HelloWorld />
    //         },
    //         components: {
    //           HelloWorld: module.default
    //         }
    //       }
    //     }
    //   })
    // }
  },
  {
    name: 'bar',
    path: '/bar',
    // component: HelloWorld,
    // component: { ...HelloWorld },
    // component: () => import('../components/HelloWorld'),
    component: () => {
      const result = import('../components/HelloWorld')
      return result.then(module => {
        return {
          __esModule: true,
          default: { ...module.default }
        }
      })
    }
    // component: () => {
    //   const result = import('../components/HelloWorld')
    //   return result.then(module => {
    //     return {
    //       __esModule: true,
    //       default: {
    //         name: 'bar',
    //         render() {
    //           return <HelloWorld />
    //         },
    //         components: {
    //           HelloWorld: module.default
    //         }
    //       }
    //     }
    //   })
    // }
  }
]
const router = new VueRouter({
  routes
})

export default router
