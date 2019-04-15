let resolvePromise = new Promise((resolve, reject) => {
  let resolvedPromise = Promise.resolve()
  // resolve(resolvedPromise)
  // works like
  // Promise.resolve().then(() => {
  //   resolvedPromise.then(() => {
  //     resolve()
  //   })
  // })
  // should be?
  // Promise.resolve().then(() => {
  //   resolvedPromise.then.[[Value]](resolve,reject)
  // })
  // equivalent with ?
  // Promise.resolve().then(() => {
  //   resolvedPromise.then(resolve)
  // })
  // equivalent with ?
  // Promise.resolve().then(() => {
  //   Promise.resolve().then(() => {
  //     resolve()
  //   })
  // })
})
resolvePromise.then(() => {
  console.log('resolvePromise resolved')
})
let resolvedPromiseThen = Promise.resolve().then(res => {
  console.log('promise1')
})
resolvedPromiseThen
  .then(() => {
    console.log('promise2')
  })
  .then(() => {
    console.log('promise3')
  })

// 'promise1'
// 'promise2'
// 'resolvePromise resolved'
// 'promise3'
