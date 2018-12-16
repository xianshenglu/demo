if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange // allows CommonJS/Node.js require()
}
let coins = [200, 100, 50, 20, 10, 5, 2, 1]

/**
 * @description get change return to users
 * @param {Number} totalPayable the money needs to be paid
 * @param {Number} cashPaid the money user paid
 * @return the money return back to user
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
function getChange (totalPayable, cashPaid) {
  let difference = cashPaid - totalPayable
  let result = []
  while (difference > 0) {
    let maxCoin = coins.find(v => v <= difference)
    result.push(maxCoin)
    difference -= maxCoin
  }
  return result
}
