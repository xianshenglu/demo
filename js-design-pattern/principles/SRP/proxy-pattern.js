function createImg(props) {
  const img = document.createElement('img')
  Object.assign(img, props)
  return img
}
function createImgLazy(props) {
  const { src, ...otherProps } = props
  const img = createImg(otherProps)
  const toolImg = createImg(otherProps)
  img.src = 'loading.gif'
  toolImg.src = src
  toolImg.onload = function() {
    img.src = src
  }
}
