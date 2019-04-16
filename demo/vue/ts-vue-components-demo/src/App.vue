<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SelectSupportAll/>
  </div>
</template>

<script>
import TsVueComponets from 'ts-vue-components/src/components/index'
const { SelectSupportAll } = TsVueComponets
console.log(SelectSupportAll)

export default {
  name: 'app',
  components: {
    SelectSupportAll
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
