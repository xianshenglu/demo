var plugin = (function() {
  var plugin = document.createElement('embed')
  plugin.style.display = 'none'
  plugin.type = 'application/txftn-webkit'
  plugin.sign = function() {
    console.log('开始文件扫描')
  }
  plugin.pause = function() {
    console.log('暂停文件上传')
  }
  plugin.uploading = function() {
    console.log('开始文件上传')
  }
  plugin.del = function() {
    console.log('删除文件上传')
  }
  plugin.done = function() {
    console.log('文件上传完成')
  }
  document.body.appendChild(plugin)
  return plugin
})()
class BaseState {
  bindEvent() {
    throw new Error('bindEvent method is needed!')
  }
  changeState() {
    throw new Error('bindEvent method is needed!')
  }
}
class SignState extends BaseState {
  constructor(upload) {
    super(upload)
    this.upload = upload
  }
  bindEvent() {
    this.upload.button1.onclick = () => {
      console.log('扫描中，点击无效...')
    }
    this.upload.button2.onclick = () => {
      console.log('文件正在扫描中，不能删除')
    }
  }
}
class UploadingState extends BaseState {
  constructor(upload) {
    super(upload)
    this.upload = upload
  }
  bindEvent() {
    this.upload.button1.onclick = () => {
      this.upload.changeState('pause')
    }
    this.upload.button2.onclick = () => {
      console.log('文件正在上传中，不能删除')
    }
  }
}
class PauseState extends BaseState {
  constructor(upload) {
    super(upload)
    this.upload = upload
  }
  bindEvent() {
    this.upload.button1.onclick = () => {
      this.upload.changeState('uploading')
    }
    this.upload.button2.onclick = () => {
      this.upload.changeState('del')
    }
  }
}
class DoneState extends BaseState {
  constructor(upload) {
    super(upload)
    this.upload = upload
  }
  bindEvent() {
    this.upload.button1.onclick = () => {
      console.log('文件已完成上传, 点击无效')
    }
    this.upload.button2.onclick = () => {
      this.upload.changeState('del')
    }
  }
}
class ErrorState extends BaseState {
  constructor(upload) {
    super(upload)
    this.upload = upload
  }
  bindEvent() {
    this.upload.button1.onclick = () => {
      console.log('文件上传失败, 点击无效')
    }
    this.upload.button2.onclick = () => {
      this.upload.changeState('del')
    }
  }
}
class DelState extends BaseState {
  constructor(upload) {
    super(upload)
    this.upload = upload
  }
  bindEvent() {
    this.upload.button1.onclick = () => {}
    this.upload.button2.onclick = () => {}
  }
}

class Upload {
  constructor(fileName) {
    this.plugin = plugin
    this.fileName = fileName
    this.button1 = null
    this.button2 = null
    this.signState = new SignState(this)
    this.uploadingState = new UploadingState(this)
    this.pauseState = new PauseState(this)
    this.doneState = new DoneState(this)
    this.errorState = new ErrorState(this)
    this.delState = new DelState(this)
  }
  init() {
    this.dom = document.createElement('div')
    this.dom.innerHTML =
      '<span>文件名称:' +
      this.fileName +
      '</span>\
    <button data-action="button1">扫描中</button>\
    <button data-action="button2">删除</button>'
    document.body.appendChild(this.dom)
    this.button1 = this.dom.querySelector('[data-action="button1"]') // 第一个按钮
    this.button2 = this.dom.querySelector('[data-action="button2"]') // 第二个按钮
  }
  changeState(newState) {
    this.plugin[newState]()
    console.log(newState)
    this[newState]()
    this.state.bindEvent()
  }
  sign() {
    this.button1.innerHTML = '扫描中，任何操作无效'
    this.state = this.signState
  }
  uploading() {
    this.button1.innerHTML = '正在上传，点击暂停'
    this.state = this.uploadingState
  }
  pause() {
    this.button1.innerHTML = '已暂停，点击继续上传'
    this.state = this.pauseState
  }
  done() {
    this.button1.innerHTML = '上传完成'
    this.state = this.doneState
  }
  error() {
    this.button1.innerHTML = '上传失败'
    this.state = this.errorState
  }
  del() {
    this.dom.parentNode.removeChild(this.dom)
    console.log('删除完成')
    this.state = this.delState
  }
}
var uploadObj = new Upload('JavaScript 设计模式与开发实践')
uploadObj.init()
window.external.upload = function(state) {
  // 插件调用JavaScript 的方法
  uploadObj.changeState(state)
}
window.external.upload('sign') // 文件开始扫描
setTimeout(function() {
  window.external.upload('uploading') // 1 秒后开始上传
}, 1000)
setTimeout(function() {
  window.external.upload('done') // 5 秒后上传完成
}, 5000)
