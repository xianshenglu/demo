<template>
  <div class="TestPara"></div>
</template>

<script>
export default {
  name: 'TestPara',
  props: [
    'AttrEe',
    'attr_ff',
    'attr_Gg',
    'Attr_Hh',
    '_attr_ii',
    '_attr_Jj',
    '_attrKk',
    '_AttrLl'
  ],
  created () {
    window.vm = this
    console.log(vm.$props)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
