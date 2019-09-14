class Light {
  constructor() {
    this.state = 'off' // 给电灯设置初始状态off
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
    if (this.state === 'off') {
      console.log('弱光')
      this.state = 'weakLight'
    } else if (this.state === 'weakLight') {
      console.log('强光')
      this.state = 'strongLight'
    } else if (this.state === 'strongLight') {
      console.log('关灯')
      this.state = 'off'
    }
  }
}
const light = new Light()
light.init()
