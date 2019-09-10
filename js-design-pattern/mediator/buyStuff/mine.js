class Store {
  constructor(state = {}, listeners = {}) {
    this.state = state
    this.listeners = listeners
  }
  dispatch(type, ...args) {
    const callbackList = this.listeners[type]
    if (Array.isArray(callbackList)) {
      callbackList.forEach(cb => cb.call(this, this.state, ...args))
    }
  }
  on(type, callback) {
    const { listeners } = this
    if (Array.isArray(listeners[type])) {
      return listeners[type].push(callback)
    }
    listeners[type] = [callback]
  }
}

const store = new Store({
  goods: {
    // 手机库存
    'red|32G': 3, // 红色32G，库存数量为3
    'red|16G': 0,
    'blue|32G': 1,
    'blue|16G': 6
  },
  formData: {
    color: '',
    memory: '',
    count: ''
  }
})

function $(str) {
  return Array.from(document.querySelectorAll(str))
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
  store.dispatch('updateColor', val)
}
countInput.oninput = e => {
  const val = e.target.value
  store.dispatch('updateCount', val)
}
memorySelect.onchange = e => {
  const val = e.target.value
  store.dispatch('updateMemory', val)
}

store.on('updateColor', (state, color) => {
  state.color = color
  colorInfoEl.textContent = color
  validateCount()
})
store.on('updateCount', (state, count) => {
  state.count = count
  countInfoEl.textContent = count
  validateCount()
})
store.on('updateMemory', (state, memory) => {
  state.memory = memory
  memoryInfoEl.textContent = memory
  validateCount()
})

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
  if (count > store.state.goods[color + '|' + memory]) {
    nextBtn.textContent = '库存不足'
    nextBtn.disabled = true
    return
  }
  nextBtn.disabled = false
  nextBtn.textContent = '放入购物车'
}

store.dispatch('updateColor', colorSelect.value)
store.dispatch('updateCount', countInput.value)
store.dispatch('updateMemory', memorySelect.value)
