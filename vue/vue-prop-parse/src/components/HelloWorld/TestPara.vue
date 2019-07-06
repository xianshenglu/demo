<template>
  <div class="TestPara"></div>
</template>

<script>
export default {
  name: 'TestPara',
  props: [
    'attr-aa',
    'attrBb',
    'attr-Cc', // undefined
    // 'attrCc', // undefined
    // 'attr-cc', // undefined
    // 'attrcc', // undefined
    'Attr-Dd', // AttrDd undefined,
    // 'AttrDd', // AttrDd undefined
    // 'Attr-dd', // AttrDd undefined
    // 'Attrdd', // Attrdd undefined
    // 'attrDd', // attrDd undefined
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
