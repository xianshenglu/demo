<template>
  <div id="app" ref="app"></div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$refs.app.innerHTML = `<h1 class="App__title">App__title</h1>`
  }
}
</script>

<style scoped>
/deep/ .App__title {
  color: red;
}
</style>
