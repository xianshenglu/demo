// eslint-disable-next-line no-undef
var fsm = new StateMachine({
  init: 'off',
  transitions: [
    { name: 'buttonWasPressed', from: 'off', to: 'on' },
    { name: 'buttonWasPressed', from: 'on', to: 'off' }
  ],
  methods: {
    onButtonWasPressed: function(event, from, to) {
      console.log(fsm.state)
    }
  }
})

var Light = function() {
  this.button = null
  this.state = fsm
}
Light.prototype.init = function() {
  var button = document.createElement('button')
  button.innerHTML = '已关灯'
  this.button = document.body.appendChild(button)
  this.button.onclick = function() {
    fsm.buttonWasPressed() // 把请求委托给FSM 状态机
  }
}

var light = new Light()
light.init()
