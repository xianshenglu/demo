import Vue from 'vue'
import {  Checkbox, Select } from 'element-ui'
Vue.use(Checkbox, Select)
import SelectSupportAll from './SelectSupportAll.vue'
const components = { SelectSupportAll }
Object.keys(components).forEach(name => {
  Vue.component(name, components[name])
})
export default components
