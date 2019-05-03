<template>
  <div id="app">
    <SelectSupportAll v-model="value" multiple filterable collapse-tags>
      <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
    </SelectSupportAll>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      value: '',
      options: [
        { label: 'label1', value: 1 },
        { label: 'label2', value: 2 },
        { label: 'label3', value: 3 },
        { label: 'label4', value: 4 }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
