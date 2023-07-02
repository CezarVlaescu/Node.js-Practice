// Node js 

// Node.js -> is a JavaScript runtime, enviroment not a programming language or framework
//         -> cycle of node.js :  V8 (JS engine) -> Node API (node bindings C++) -> LIBUV (Async I/O) (Event Queue -> Event Loop -> Blocking Operation -> Working Threads -> Callback)
//         -> Node Repl : Read -> Eval -> Print -> Loop
//         -> Node is async by his nature

const mission = process.argv[2]; // we can tell in terminal what value we want for this variable (node "name of the file" "the word to assign for mission")

if(mission==='learn'){
    console.log('Time to write some node');
}else{
    console.log('Is' + mission + 'really more fun?');
}

// Node is used for : build servers, build web/mobile apps, connect databases, adding security
// Asynchronous -> code that doesn't neccesary run line by line, tasks that can be done in time

