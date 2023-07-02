// Node modules

// require() -> this function, takes a JS file, execute it and return the code inside the file

const { request } = require('https'); // destructior of the object from require call, when we know the functionality (request)

const req = request('https://www.goggle.com', (response)=>{
    response.on('data', (chunk)=>{  // event the event and the listener
        console.log(`Data chunk: ${chunk}`)
    });
    response.on('end', () =>{ // when the event ends
        console.log('No more data');
    })
});

req.end();