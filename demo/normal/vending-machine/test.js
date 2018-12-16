let app
if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs') // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log) // use console.log for test output
  var getChange = require('./change.js') // load our getChange method
}
test('getChange(215, 300) should return [50, 20, 10, 5]', function (assert) {
  var result = getChange(215, 300)
  assert.deepEqual(result, [50, 20, 10, 5])
})
test('getChange(486, 600) should return [100, 10, 2, 2]', function (assert) {
  var result = getChange(486, 600)
  assert.deepEqual(result, [100, 10, 2, 2])
})
test('getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function (assert) {
  var result = getChange(12, 400)
  assert.deepEqual(result, [200, 100, 50, 20, 10, 5, 2, 1])
})
if (typeof module !== 'undefined' && module.exports) {
  QUnit.load()
}
