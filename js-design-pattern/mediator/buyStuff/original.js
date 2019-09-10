function $(str) {
  return Array.from(document.querySelectorAll(str))
}

var goods = {
  // 手机库存
  'red|32G': 3, // 红色32G，库存数量为3
  'red|16G': 0,
  'blue|32G': 1,
  'blue|16G': 6
}

$('.form')[0].onsubmit = e => e.preventDefault()

const colorSelect = $('.form__color')[0]
const countInput = $('.form__count')[0]
const memorySelect = $('.form__memory')[0]

const colorInfoEl = $('.select-color__value')[0]
const countInfoEl = $('.selected-count__value')[0]
const memoryInfoEl = $('.selected-memory__value')[0]

const nextBtn = $('#nextStepText')[0]

colorSelect.onchange = e => {
  const val = e.target.value
  colorInfoEl.textContent = val
  validateCount()
}
countInput.oninput = e => {
  const val = e.target.value
  countInfoEl.textContent = val
  validateCount()
}
memorySelect.onchange = e => {
  const val = e.target.value
  memoryInfoEl.textContent = val
  validateCount()
}

function validateCount() {
  const count = Number(countInput.value)
  const color = colorSelect.value
  const memory = memorySelect.value

  if (!Number.isInteger(count) || count < 1) {
    nextBtn.textContent = '请输入正确的数量'
    nextBtn.disabled = true
    return
  }
  if (color === '') {
    nextBtn.textContent = '请选择颜色'
    nextBtn.disabled = true
    return
  }
  if (memory === '') {
    nextBtn.textContent = '请选择内存'
    nextBtn.disabled = true
    return
  }
  if (count > goods[color + '|' + memory]) {
    nextBtn.textContent = '库存不足'
    nextBtn.disabled = true
    return
  }
  nextBtn.disabled = false
  nextBtn.textContent = '放入购物车'
}

colorInfoEl.textContent = colorSelect.value
countInfoEl.textContent = countInput.value
memoryInfoEl.textContent = memorySelect.value

validateCount()
