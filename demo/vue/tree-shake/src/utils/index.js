const arr = ['test1', 'test2']
export function log1(params) {
  console.log('test1', arr)
}
export function log2(params) {
  console.log('test2')
}

export default {
  log1,
  log2
}
