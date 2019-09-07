class Chain {
  constructor(fn) {
    this.fn = fn
    this.nextInstance = null
  }
  setNextInstance(instance) {
    return (this.nextInstance = instance)
  }
  passRequest() {
    const result = this.fn.apply(this, arguments)
    if (result === false) {
      this.next.apply(this, arguments)
    }
  }
  next() {
    const nextInstance = this.nextInstance
    if (nextInstance !== null) {
      nextInstance.passRequest.apply(nextInstance, arguments)
    }
  }
}

const order500 = new Chain(function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购, 得到100 优惠券')
    return
  }
  return false
})
const order200 = new Chain(function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 元定金预购, 得到50 优惠券')
    return
  }
  return false
})
const orderNormal = new Chain(function(orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买, 无优惠券')
  } else {
    console.log('手机库存不足')
  }
  return
})

order500.setNextInstance(order200)
order200.setNextInstance(orderNormal)

// 测试结果：
order500.passRequest(1, true, 500) // 输出：500 元定金预购, 得到100 优惠券
order500.passRequest(1, false, 500) // 输出：普通购买, 无优惠券
order500.passRequest(2, true, 500) // 输出：200 元定金预购, 得到500 优惠券
order500.passRequest(3, false, 500) // 输出：普通购买, 无优惠券
order500.passRequest(3, false, 0) // 输出：手机库存不足

orderNormal.passRequest(1, false, 500) // 输出：普通购买, 无优惠券

var fn1 = new Chain(function() {
  console.log(1)
  return false
})
var fn2 = new Chain(function() {
  console.log(2)
  var self = this
  setTimeout(function() {
    self.next()
  }, 1000)
  return
})
var fn3 = new Chain(function() {
  console.log(3)
  return false
})
fn1.setNextInstance(fn2).setNextInstance(fn3)
fn1.passRequest()
