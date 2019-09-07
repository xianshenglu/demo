const orderHandlers = {
  order500: function(orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
      console.log('500 元定金预购, 得到100 优惠券')
      return true
    }
    return false
  },
  order200: function(orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
      console.log('200 元定金预购, 得到50 优惠券')
      return true
    }
    return false
  },
  orderNormal: function(orderType, pay, stock) {
    if (stock > 0) {
      console.log('普通购买, 无优惠券')
    } else {
      console.log('手机库存不足')
    }
    return true
  }
}
const orderPriorities = ['order500', 'order200', 'orderNormal']

function getOrderResult(...args) {
  for (let index = 0; index < orderPriorities.length; index++) {
    const result = orderHandlers[orderPriorities[index]](...args)
    if (result === true) {
      break
    }
  }
}
// 测试结果：
getOrderResult(1, true, 500) // 输出：500 元定金预购, 得到100 优惠券
getOrderResult(1, false, 500) // 输出：普通购买, 无优惠券
getOrderResult(2, true, 500) // 输出：200 元定金预购, 得到500 优惠券
getOrderResult(3, false, 500) // 输出：普通购买, 无优惠券
getOrderResult(3, false, 0) // 输出：手机库存不足

// not good for reuse
// 1. function require unique name
// 2. function name is duplicated
// 3. not good for async
