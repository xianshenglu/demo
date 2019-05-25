<template>
  <div id="app">
    <router-link to="/foo" class="app__link">Go to foo</router-link>
    <router-link to="/bar" class="app__link">Go to bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app__link {
  display: block;
}
</style>
