<template>
  <el-select
    :value="value"
    v-bind="$attrs"
    v-on="$listeners"
    @input.native="e=>isSelectAllShow=e.target.value.trim()===''"
  >
    <el-checkbox
      v-show="isSelectAllShow"
      :value="isSelectAll"
      class="SelectSupportAll__checkAll"
      @input="selectAll(isSelectAll)"
    >{{selectAllLabel}}</el-checkbox>
    <slot></slot>
  </el-select>
</template>

<script>
function hyphenToPascal(str) {
  return str.replace(/(^|\-)([a-z])/g, v => v.toUpperCase())
}
export default {
  name: 'select-support-all',
  props: {
    value: {
      require: true
    },
    selectAllLabel: {
      default: '全选'
    }
  },
  data() {
    return {
      isSelectAllShow: true
    }
  },
  computed: {
    isSelectAll() {
      return this.value.length === this.optionSlots.length
    },
    optionSlots() {
      return this.$slots.default.filter(o => {
        if (
          typeof o.componentOptions !== 'object' ||
          o.componentOptions === null
        ) {
          return false
        }
        return ELEMENT.Option.name === hyphenToPascal(o.componentOptions.tag)
      })
    }
  },
  methods: {
    selectAll(isSelectAll) {
      if (isSelectAll === true) {
        this.$emit('input', [])
        return
      }
      if (isSelectAll === false) {
        this.$emit(
          'input',
          this.optionSlots.map(o => o.componentInstance.value)
        )
        return
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.SelectSupportAll__checkAll {
  width: 100%;
  box-sizing: border-box;
  margin-right: 0px;
  padding-left: 18px;
  line-height: 34px;
  font-size: 12px;
}
.el-checkbox__label {
  font-size: inherit;
}
</style>
