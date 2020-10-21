/**
 * Buffer
 * 
 * var buf = new Buffer; //deprecated!!
 * var buf = from(...); //instead
 * 
 * buffer.length
 * buffer.fill
 * buffer.slice
 * buffer.compare
 * buffer.copy
 * 
 */

const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

const buf = Buffer.from(arr.buffer);

console.log(buf);

arr[1] = 6000;

console.log(buf);
