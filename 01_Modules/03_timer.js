/**
 * Timeout : call the callback function after delay time passed
 * 
 * setTimeout(callback, delay, arg, ....)
 *   - callback : function
 *   - delay : millisecond
 *   - arg : parameters for callback function
 * 
 * clearTimeout
 * 
 * setinterval(callback, delay, arg, ....)
 * 
 * clearInterval
 */

function sayHello() {
    console.log('Hello world');
}
//execute the sayHello function after 3sec
setTimeout(sayHello, 3 * 1000);

//cancle the timeout
var t = setTimeout(sayHello, 10);
clearTimeout(t);

//execute  the callback function Repeatedly
function sayGoodbye(who) {
    console.log('Good bye', who);
}

setInterval(sayGoodbye, 1 * 1000, 'Friend');
 