// index.js
import * as api1 from './api/indexV1.js'
import api2 from './api/indexV2.js'
// api/user/getUserInfo, api/utilities/getUserInfo
console.log(api1.getUserInfo.url, api2.getUserInfo.url)
