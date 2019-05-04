import Vue from 'vue'
import { Checkbox, Select } from 'element-ui'
Vue.use(Checkbox, Select)

import { SelectSupportAll } from './components'

const myComponents = { SelectSupportAll }
// todo support import on demand
export default {
  components: myComponents,
  //! installed all components
  install: function(Vue) {
    Object.keys(myComponents).forEach(name => {
      Vue.component(name, myComponents[name])
    })
  }
}
