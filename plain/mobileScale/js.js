class ScalableEl {
  constructor (props) {
    let {
      el,
      parentEl,
      wheelEl = el,
      initElPos: elPos = null,
      initParentElPos: parentElPos = null,
      initScale: currentScale = 1
    } = props

    this.el = el
    this.parentEl = parentEl
    this.elPos = elPos
    this.parentElPos = parentElPos
    this.currentScale = currentScale
    this.wheelEl = wheelEl
    this.wheelSize = 0

    this.setElInitPos()

    this.wheelEl.addEventListener('wheel', this.wheelCb.bind(this))
    this.parentEl.addEventListener('mousemove', this.mouseMoveCb.bind(this))
  }
  setElInitPos () {
    this.setElInitOffset()
    // todo detect plain object
    if (this.elPos && this.parentElPos) {
      this.calcElTargetOffset()
      Object.keys(this.elTargetOffset).forEach(key => {
        this.el.style[key] = this.elTargetOffset[key] + 'px'
      })
      this.setElInitOffset()
    } else {
      this.elPos = { x: 0, y: 0 }
      this.parentElPos = { x: 0, y: 0 }
    }
  }
  setElInitOffset () {
    let elRect = this.el.getBoundingClientRect()
    let parentElRect = this.parentEl.getBoundingClientRect()
    let { left, top, width, height } = elRect
    this.elInitOffset = Object.assign(
      { left, top, width, height },
      {
        right: parentElRect.width - elRect.width - elRect.left,
        bottom: parentElRect.height - elRect.height - elRect.top
      }
    )
  }
  wheelCb (event) {
    this.calcScale(event)
    this.calcElTargetOffset()
    this.correctElTargetOffset()
  }
  calcScale (event) {
    let targetWheelSize = this.wheelSize + event.deltaY
    let targetScale = 1 + targetWheelSize / 1000
    if (targetScale >= 1) {
      this.currentScale = targetScale
      this.wheelSize = targetWheelSize
    }
  }
  calcElTargetOffset () {
    let elScaledWidth = this.currentScale * this.elInitOffset.width
    let elScaledHeight = this.currentScale * this.elInitOffset.height
    let parentElRect = this.parentEl.getBoundingClientRect()
    this.elTargetOffset = {
      width: elScaledWidth,
      height: elScaledHeight,
      left:
        this.parentElPos.x * parentElRect.width - this.elPos.x * elScaledWidth,
      top:
        this.parentElPos.y * parentElRect.height -
        this.elPos.y * elScaledHeight,
      right:
        (1 - this.parentElPos.x) * parentElRect.width -
        (1 - this.elPos.x) * elScaledWidth,
      bottom:
        (1 - this.parentElPos.y) * parentElRect.height -
        (1 - this.elPos.y) * elScaledHeight
    }
  }
  correctElTargetOffset () {
    Object.keys(this.directionMap).forEach(direction => {
      let offsetToOrigin =
        this.elTargetOffset[direction] - this.elInitOffset[direction]
      if (offsetToOrigin > 0) {
        this.elTargetOffset[direction] = this.elInitOffset[direction]
        let oppositeDirection = this.directionMap[direction]
        this.elTargetOffset[oppositeDirection] += offsetToOrigin
      }
    })
    Object.keys(this.elTargetOffset).forEach(key => {
      this.el.style[key] = this.elTargetOffset[key] + 'px'
    })
  }
  get directionMap () {
    return {
      top: 'bottom',
      bottom: 'top',
      left: 'right',
      right: 'left'
    }
  }
  mouseMoveCb (event) {
    let parentElRect = this.parentEl.getBoundingClientRect()
    let elRect = this.el.getBoundingClientRect()
    this.elPos.x = (event.clientX - elRect.left) / elRect.width
    this.elPos.y = (event.clientY - elRect.top) / elRect.height
    this.parentElPos.x =
      (event.clientX - parentElRect.left) / parentElRect.width
    this.parentElPos.y =
      (event.clientY - parentElRect.top) / parentElRect.height
  }
}

let scalableAvatar = new ScalableEl({
  el: document.querySelector('#app__avatar'),
  parentEl: document.querySelector('#app'),
  wheelEl: document.querySelector('#app'),
  initElPos: { x: 0.2, y: 0.2 },
  initParentElPos: { x: 0.2, y: 0.2 },
  initScale: 1
})
