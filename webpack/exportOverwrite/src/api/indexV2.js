// indexV2.js
import * as user from './user'
import * as utilities from './utilities' //utilities wins
// Disallow the usage of ... in the export object
export default { ...user, ...utilities }
