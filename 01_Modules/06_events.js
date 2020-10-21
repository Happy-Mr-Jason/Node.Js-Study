/**
 * Event Emitter
 * Class : EventEmitter
 * 
 * The eventEmitter.on() method is used to register listeners, 
 * while the eventEmitter.emit() method is used to trigger the event.
 * 
 * Register Listener
 * emitter.addListener(event, listener)
 * emitter.on(event, listener) // Every time that trigger the event
 * emitter.once(event, listener) //Only do this once
 * 
 * Remove Listener
 * emitter.removeListener(event, listener)
 * emitter.removeAllListener()
 */

 const EventEmitter = require('events');

 class MyEmitter extends EventEmitter{}

 const myEmitter = new MyEmitter();
 myEmitter.on('event', () => {
     console.log('an event occureed!');
 });

 setInterval(function(){
     myEmitter.emit('event');
 }, 1*1000);

 process.on('exit', function(code){
     console.log('exit event : ', code);
 });

 process.on('uncaughtException', function(code){
     console.log('uncaughtException');
 });

 //Exception error occured
 sayHello();