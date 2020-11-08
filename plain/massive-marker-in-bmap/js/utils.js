/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} radius The corner radius. Defaults to 5;
 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
 */
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true
  }
  if (typeof radius === 'undefined') {
    radius = 5
  }
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()
  if (stroke) {
    ctx.stroke()
  }
  if (fill) {
    ctx.fill()
  }
}
const eventTypeList = [
  'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mousemove',
  'DOMMouseScroll',
  // wheel 事件不能加上，否则缩放会失效
  // 'wheel',
  'mousewheel',
  'contextmenu',
  'keydown',
  'keyup'
]
function getPointList(num) {
  return Array(Number(num))
    .fill()
    .map(() => {
      return new BMap.Point(getRandomGps().lng, getRandomGps().lat)
    })
}
function getLabelDom(val) {
  const div = document.createElement('div')
  div.style =
    'width:100px;height:40px;background-color:rgba(255,255,255,0.8);border: 1px solid #000;border-radius: 20px;'
  div.innerHTML = `index: ${val}`
  return div.outerHTML
}

//  获取 [90-123,20-43] 的经纬度
function getRandomGps() {
  return {
    lng: 90 + Math.random() * 33,
    lat: 20 + Math.random() * 23
  }
}

function redirectCustomCanvasEvents(fromElement) {
  eventTypeList.forEach(eventType => {
    const getBMapCanvas = () => map.getContainer().querySelector('.BMap_mask')
    fromElement.addEventListener(
      eventType,
      redirectEvent(eventType, fromElement, getBMapCanvas)
    )
  })
}

function redirectEvent(eventType, fromElement, toElement) {
  fromElement.addEventListener(eventType, function(event) {
    toElement = typeof toElement === 'function' ? toElement() : toElement
    // to see the principle, you might need to check the specs.
    toElement.dispatchEvent(new event.constructor(event.type, event))
    event.preventDefault()
    event.stopPropagation()
  })
}
