const arr = ['1', '2', '3']
// todo tree-shake bug: https://github.com/webpack/webpack/issues/4453
// log1, log2 only used once. But it exists in all chunks which have imported from this file.
export function log1(params) {
  console.log('test1', arr)
}
export function log2(params) {
  console.log('test2')
}
// log3 has never been imported, so it wouldn't exist in any files
export function log3(params) {
  console.log('test3')
}
export default {
  log1,
  log2,
  log3
}
