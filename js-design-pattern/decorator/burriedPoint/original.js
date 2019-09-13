var showLogin = function() {
  console.log('打开登录浮层')
  log(this.getAttribute('tag'))
}
var log = function(tag) {
  console.log('上报标签为: ' + tag)
  // (new Image).src = 'http:// xxx.com/report?tag=' + tag; // 真正的上报代码略
}
document.getElementById('button').onclick = showLogin
