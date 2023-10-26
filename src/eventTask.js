// const { EventEmitter} = require('events');

// const countDown = time => {
//     const event = new EventEmitter();

//     let currentTime = 0;

//     const timeInterval = setInterval(() =>
//         currentTime++;

//         event.emit('update', currentTime);

//         if (currentTime === time) {
//             event.emit('end');
//             clearInterval(timeInterval);
//         }
//         if (currentTime === time -2) {
//             event.emit('end-soon');
//         }
        
//     };
// };