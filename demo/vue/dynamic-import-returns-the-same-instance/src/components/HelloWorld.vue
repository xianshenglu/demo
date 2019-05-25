<template>
  <div class="HelloWorld">
    <h3>Here is {{$route.name}}</h3>
    <input type="text" placeholder="please enter some text">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {
    window[this.$route.name]=this
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
