// Event loop

// Def -> is responsable to handle all callback functions in node programs 
//     -> a piece of code, part of the libuv that process async events

while(!shouldExit) {
    // check for any events
    processEvents();
}

// Callback queues -> keeps track on which callback are ready to be executed (callback one, callback two .....) (FIFO)

// Phases of Event loop -> Timers -> I/O callbacks -> setImmediate -> Close callbacks
//                      -> Timers : setTimeout, setInterval, setImmediate


