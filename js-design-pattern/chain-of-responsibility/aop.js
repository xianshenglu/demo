const order500 = function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购, 得到100 优惠券')
    return
  }
  return false
}
const order200 = function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 元定金预购, 得到50 优惠券')
    return
  }
  return false
}
const orderNormal = function(orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买, 无优惠券')
  } else {
    console.log('手机库存不足')
  }
}
// not a good choice to modify prototype
// Function.prototype.after = function(fn) {
//   const self = this
//   return function() {
//     const ret = self.apply(self, arguments)
//     if (ret === false) {
//       return fn.apply(this, arguments)
//     }
//   }
// }
function after(before, fn) {
  return function() {
    const ret = before.apply(before, arguments)
    if (ret === false) {
      return fn.apply(this, arguments)
    }
  }
}

// var order = order500.after(order200).after(orderNormal)
var order = after(after(order500, order200), orderNormal)

order(1, true, 500) // 输出：500 元定金预购，得到100 优惠券
order(2, true, 500) // 输出：200 元定金预购，得到50 优惠券
order(1, false, 500) // 输出：普通购买，无优惠券

/**
 * not good as Chain
 * If we want to support async, we would need to add nextCallback and next method
 * in callback which would be like Chain in textbook.js
 */
