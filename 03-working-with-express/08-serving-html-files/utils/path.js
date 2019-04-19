const path = require('path');

//we can create a helper to access the root path
module.exports = path.dirname(process.mainModule.filename); 