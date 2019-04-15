var Main = {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')
