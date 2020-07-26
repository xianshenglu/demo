<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <el-button type="primary" @click="onHelloWorldShow"
      >click me to show HelloWorld</el-button
    >
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    onHelloWorldShow() {
      this.$message({
        message: this.$createElement('hello-world', {
          props: { msg: 'from onHelloWorldShow' }
        }),
        showClose: true
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
