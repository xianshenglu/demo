const getSingleton = function(fn) {
  var result = null
  return function() {
    if (result === null) {
      result = fn.apply(this, arguments)
    }
    return result
  }
}
const getLoginLayer = getSingleton(createDiv)

function createDiv(html) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div
}
getLoginLayer('请登陆！')
