<template>
  <div class="HelloWorld">
    <TestPara
      :AttrEe="4"
      :attr_ff="5"
      :attr_Gg="6"
      :Attr_Hh="7"
      :_attr_ii="8"
      :_attr_Jj="9"
      :_attrKk="10"
      :_AttrLl="11"
    />
  </div>
</template>

<script>
import TestPara from './TestPara'
export default {
  name: 'HelloWorld',
  components: {
    TestPara
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
