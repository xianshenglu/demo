var showLogin = function() {
  console.log('打开登录浮层')
}
var log = function() {
  console.log('上报标签为: ' + this.getAttribute('tag'))
  // (new Image).src = 'http:// xxx.com/report?tag=' + tag; // 真正的上报代码略
}
document.getElementById('button').onclick = after(showLogin, log)

function before(fn, ...callbackList) {
  return function() {
    callbackList.forEach(cb => cb.apply(this, arguments))
    fn.apply(this, arguments)
  }
}

function after(fn, ...callbackList) {
  return function() {
    fn.apply(this, arguments)
    callbackList.forEach(cb => cb.apply(this, arguments))
  }
}
window.after = after
