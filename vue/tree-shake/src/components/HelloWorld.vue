<template>
  <div class="hello">
    <h1>{{ 'hello world' }}</h1>
  </div>
</template>

<script>
import { log1 } from '../utils'
log1()
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
