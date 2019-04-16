import SelectSupportAll from './components/SelectSupportAll';

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  Vue.component(SelectSupportAll.name, SelectSupportAll);
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '1.0.0',
  install,
  SelectSupportAll,
}