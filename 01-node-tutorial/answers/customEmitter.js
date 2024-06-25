const EventEmitter = require('events');
const emitter = new EventEmitter();

// Event handler for the 'greet' event
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Event handler for the 'status' event
emitter.on('status', (status) => {
  console.log(`Status: ${status}`);
});

// Event handler for the 'timer' event, emits a different event
emitter.on('timer', (msg) => {
  console.log(`Timer event received: ${msg}`);
  emitter.emit('followup', 'This is a follow-up event');
});

// Event handler for the 'followup' event
emitter.on('followup', (msg) => {
  console.log(`Follow-up event received: ${msg}`);
});

// Emit 'greet' and 'status' events
emitter.emit('greet', 'Alice');
emitter.emit('status', 'Everything is running smoothly.');

// Trigger 'timer' event every 2 seconds
setInterval(() => {
  emitter.emit('timer', 'hi there');
}, 2000);

// Async function to wait for an event
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on('specialEvent', (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log('We got a special event! Here it is: ', msg);
};

doWait();

// Emit 'specialEvent' after 3 seconds
setTimeout(() => {
  emitter.emit('specialEvent', 'Hello World!');
}, 3000);
