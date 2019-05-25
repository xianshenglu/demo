<template>
  <div class="HelloWorld">
    <h3>Here is {{$route.name}}</h3>
    <input type="text" class="HelloWorld__input" placeholder="please enter some text">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HelloWorld__input {
  width: 250px;
  padding:10px 10px 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid rgb(78, 59, 59);
  outline: none;
}
</style>
