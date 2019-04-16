import Vue from 'vue'
import SelectSupportAll from './SelectSupportAll.vue'
const components = { SelectSupportAll }
Object.keys(components).forEach(name => {
  Vue.component(name, components[name])
})
export default components
