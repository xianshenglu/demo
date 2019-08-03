const tween = {
  linear: function(t, b, c, d) {
    return (c * t) / d + b
  },
  easeIn: function(t, b, c, d) {
    return c * (t /= d) * t + b
  },
  strongEaseIn: function(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b
  },
  strongEaseOut: function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
  },
  sineaseIn: function(t, b, c, d) {
    return c * (t /= d) * t * t + b
  },
  sineaseOut: function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  }
}
class Animate {
  constructor(dom) {
    this.dom = dom
    this.startTime = 0
    this.duration = 0
    this.startPos = null
    this.endPos = null
    this.easing = null
    this.propertyName = ''
  }
  start(propertyName, endPos, duration, easing) {
    this.propertyName = propertyName
    this.startPos = this.dom.getBoundingClientRect()[this.propertyName]
    this.endPos = endPos
    this.startTime = new Date().getTime()
    this.duration = duration
    this.easing = easing
    this.poll()
  }
  poll() {
    // const timer = setInterval(() => {
    //   if (this.step() === false) {
    //     clearInterval(timer)
    //     return
    //   }
    // }, 17)
    requestAnimationFrame(() => {
      if (this.step() === false) {
        return
      }
      this.poll()
    })
  }
  step() {
    const consumedTime = new Date().getTime() - this.startTime
    const isTimeOut = consumedTime > this.duration
    if (isTimeOut) {
      this.update(this.endPos)
      return false
    }
    const nextPos = tween[this.easing](
      consumedTime,
      this.startPos,
      this.endPos,
      this.duration
    )
    this.update(nextPos)
  }
  update(nextPos) {
    this.dom.style[this.propertyName] = nextPos + 'px'
  }
}
const app = document.getElementById('app')
// todo use getSingle
const animate = new Animate(app)
// todo add support for multiple easing.
const startButton = document.getElementById('start')
startButton.onclick = () => {
  app.style.left = 0
  animate.start('left', 500, 5000, 'strongEaseOut')
}
