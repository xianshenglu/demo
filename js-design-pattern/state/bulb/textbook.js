class State {
  onClick() {
    throw new Error('子类的 onClick 方法必须被重写！')
  }
}
class OffLightState extends State {
  constructor(light) {
    super(light)
    this.light = light
  }
  onClick() {
    console.log('off')
    this.light.setState(this.light.weakLightState)
  }
}
class WeakLightState extends State {
  constructor(light) {
    super(light)
    this.light = light
  }
  onClick() {
    console.log('weakLight')
    this.light.setState(this.light.strongLightState)
  }
}
class StrongLightState extends State {
  constructor(light) {
    super(light)
    this.light = light
  }
  onClick() {
    console.log('strongLight')
    this.light.setState(this.light.offLightState)
  }
}
class Light {
  constructor() {
    this.button = null // 电灯开关按钮
    this.onClick = this.onClick.bind(this)
    this.offLightState = new OffLightState(this)
    this.weakLightState = new WeakLightState(this)
    this.strongLightState = new StrongLightState(this)
  }
  init() {
    const button = document.createElement('button')
    button.innerHTML = 'on/off'
    button.onclick = this.onClick
    document.body.appendChild(button)
    this.button = button

    this.curState = this.offLightState // 给电灯设置初始状态off
  }
  onClick() {
    console.log(this.curState)
    this.curState.onClick()
  }
  setState(curState) {
    this.curState = curState
  }
}
const light = new Light()
light.init()
