require('./style.less')
require('./index.html')
const isDev = process.env.NODE_ENV === 'production'
if (isDev) {
  // require('./index.html')
}
// if (module.hot) {
//   module.hot.accept()
//   // module.hot.accept('./index.html', function() {
//   //   console.log('Accepting the updated printMe module!')
//   // })
// }
