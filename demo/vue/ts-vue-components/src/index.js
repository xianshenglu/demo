import SelectSupportAll from './packages/select-support-all'

const components = [SelectSupportAll]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// todo support import on demand
export { default as SelectSupportAll } from './packages/select-support-all'
export default {
  install,
  SelectSupportAll
}
