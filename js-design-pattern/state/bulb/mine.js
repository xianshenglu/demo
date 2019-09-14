class Light {
  constructor() {
    this.stateIterator = this.getStateIterator()
    this.state = this.stateIterator.next().value // 给电灯设置初始状态off
    this.button = null // 电灯开关按钮
    this.onClick = this.onClick.bind(this)
  }
  init() {
    const button = document.createElement('button')
    button.innerHTML = 'on/off'
    button.onclick = this.onClick
    document.body.appendChild(button)
    this.button = button
  }
  onClick() {
    this.state = this.stateIterator.next().value
  }
  *getStateIterator() {
    console.log('关灯')
    yield 'off'
    console.log('弱光')
    yield 'weakLight'
    console.log('强光')
    this.stateIterator = this.getStateIterator()
    yield 'strongLight'
  }
}
const light = new Light()
light.init()
