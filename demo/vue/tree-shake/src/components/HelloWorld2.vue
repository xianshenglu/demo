<template>
  <div class="hello">
    <h1>{{ 'hello world' }}</h1>
  </div>
</template>

<script>
import { log2 } from '../utils'
log2()
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
