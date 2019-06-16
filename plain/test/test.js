window.onload = function() {
  Vue.component('mat-example', {
    data: function() {
      return {
        count: 0
      };
    },
    template:
      '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  });

  Vue.component('button-counter', {
    data: function() {
      return {
        num: 0
      };
    },
    template:
      '<button v-on:click="num++">You clicked me {{ num+1 }} times</button>'
  });

  var app = new Vue({
    el: '#app'
  });
};
