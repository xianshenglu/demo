// var start = Date.now()
// if (Date.now() - start > 1000) {
//   return undefined
// }

// Problem #1
// factorial(5) 5 * 4 * 3 * 2 * 1
// factorial(3) 3 * 2 * 1

let factorial = function f (num) {
  if (num > 1) {
    return num * f(--num)
  } else {
    return 1
  }
}
let factorialV2 = function f (num) {
  let result = 1
  while (num >= 1) {
    result *= num
    num--
  }
  return result
}
console.log(factorial(3))
console.log(factorialV2(3))

// Problem #2
// Check if a given number is a power of 2
// isPowerOfTwo(8) -> true
// isPowerOfTwo(9) -> false
var isPowerOfTwo = function (num) {
  function f (count) {
    let result = 2 ** count - num
    if (result < 0) {
      return f(++count)
    } else if (result === 0) {
      return true
    } else {
      return false
    }
  }
  return f(0)
}
var isPowerOfTwoV2 = function (num) {
  let count = 1
  for (let index = 0; index < count; ++index) {
    let result = 2 ** index - num
    if (result < 0) {
      ++count
    } else if (result === 0) {
      return true
    } else {
      return false
    }
  }
}
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(9))
console.log(isPowerOfTwoV2(8))
console.log(isPowerOfTwoV2(9))

// Problem #3 Fibonacci Sequence
// 1、1、2、3、5、8、13、21、34、55……
// F1=1, F2 = 1, Fn = F（n - 1）+F（n - 2）（n > 2, n∈N *））。

let fibonacci = function f (num) {
  if (num > 2) {
    return f(--num) + f(--num)
  } else {
    return 1
  }
}
let fibonacciV2 = function f (num) {
  let Fn_2 = 1
  let Fn_1 = 1
  let result
  let index = 3
  while (index < num + 1) {
    result = Fn_1 + Fn_2
    Fn_2 = Fn_1
    Fn_1 = result
    index++
  }
  return result
}

console.log(fibonacci(5))
console.log(fibonacci(7))
console.log(fibonacciV2(5))
console.log(fibonacciV2(7))
