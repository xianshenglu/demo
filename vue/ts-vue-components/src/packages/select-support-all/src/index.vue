<template>
  <el-select
    :value="value"
    v-bind="$attrs"
    v-on="listeners"
    @input.native="e=>isSelectAllShow=e.target.value.trim()===''"
    class="SelectSupportAll"
  >
    <!-- //! element has a bug with @blur on el-select, and @visible-change would fail if user just click the x button. So, so use change event. https://github.com/ElemeFE/element/issues/10810 -->
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
import Vue from 'vue'
import { Checkbox, Select, Option } from 'element-ui'
Vue.use(Checkbox, Select, Option)
/**
 * @todo move to utils/
 */
function hyphenToPascal(str) {
  return str.replace(/(?:^|-)([a-z])/g, (match, group) => group.toUpperCase())
}
export default {
  name: 'SelectSupportAll',
  props: {
    value: {
      require: true,
      default: () => ([])
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
      return this.value.length > 0 && this.value.length === this.getOptionSlots().length
    },
    listeners() {
      return {
        ...this.$listeners
      }
    }
  },
  created() {
    // window.vmmm = this
  },
  methods: {
    getOptionSlots() {
      if (Array.isArray(this.$slots.default) === false) {
        return []
      }
      return this.$slots.default.filter(o => {
        if (
          typeof o.componentOptions !== 'object' ||
          o.componentOptions === null
        ) {
          return false
        }
        return (
          Option.name === hyphenToPascal(o.componentOptions.tag)
        )
      })
    },
    selectAll(isSelectAll) {
      if (isSelectAll === true) {
        this.$emit('input', [])
        this.$emit('change', [])
        return
      }
      if (isSelectAll === false) {
        const allValues = this.getOptionSlots().map(o => o.componentInstance.value)
        this.$emit('input', allValues)
        this.$emit('change', allValues)
        return
      }
    }
  }

}
</script>

<style scoped>
.SelectSupportAll,
.el-checkbox__label {
  font-size: inherit;
}
.SelectSupportAll__checkAll {
  width: 100%;
  box-sizing: border-box;
  margin-right: 0px;
  padding-left: 18px;
  line-height: 34px;
  font-size: 12px;
}
</style>