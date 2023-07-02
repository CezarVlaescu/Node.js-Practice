const { send, read } = require('./internals')
// const { send } = require('./internals/request');
// const { read } = require('./internals/response')

function requesting(url,data){
    send(url, data);
    return read();
}

const responseData = requesting('https://www.google.com', 'hello')
console.log(responseData);

console.log(require.cache); // cache-ing the module to prevent the bad behaivor