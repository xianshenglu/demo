const data = [1, 2, 3, 4, 5, 6]
for (var i = 0, l = data.length; i < l; i++) {
  appendDiv(data[i])
}

function appendDiv(html) {
  var div = document.createElement('div')
  div.innerHTML = html
  document.body.appendChild(div)
}
