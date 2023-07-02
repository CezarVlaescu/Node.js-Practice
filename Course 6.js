// Event-driven and observer design pattern 

// Observers subcribe for events from the subject, to get notified when an event occurs.
// Event emitter -> is part of the event class, and trigger the observers when the event occurs by emitting an event.


const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1 

celebrity.on('race', (result) => { // whatever a celebrity wins a race, the observer will print the message
    if(result === 'win')
       console.log("Congrats you are the best");
})

// Subscribe to celebrity for Observer 2 
celebrity.on('race', (result) => { 
    if(result === 'lost')
       console.log("Boo");
})

process.on('exit', (code) => {
    console.log('Process exit event with code : ', code);
});

celebrity.emit('race', 'win'); // emit the event to trigger the observers
celebrity.emit('race', 'lost');