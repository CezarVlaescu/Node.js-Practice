// const request = require('./request');
// const response = require('./response');

module.exports = { // spreding our modules (that points means opening the modules)
    ...require('./response'),
    ...require('./request')
}

// module.exports = { // exports all from module exports from other files
//     send : request.send,
//     read : response.read,
// }