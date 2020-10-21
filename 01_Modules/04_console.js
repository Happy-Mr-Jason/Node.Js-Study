/**
 * Console
 * console.log('log', 'log message');
 * console.info('info', 'info message');
 * console.warn('warn', 'warn message');
 * console.error('error', 'error message');
 * 
 * Custom Console : Make a files for log data
 * Use console Module
 * new keyword is used
 * Console Object has 'stdout' (for info, log) and 'stderr' (for warn , error) parameters
 * 
 * Measure Time
 * console.time('TimerName');
 * console.timeEnd('TimerName');
 */
var fs = require('fs');
var Console = require('console').Console;

var output = fs.createWriteStream('./stdout.log');
var errorOutput = fs.createWriteStream('./stderr.log');
var logger = new Console(output, errorOutput);

var obj = {
    name : 'NodeJs',
    how : 'interesting'
};

console.log('log', 'log message');
console.info('info', 'info message');
console.warn('warn', 'warn message');
console.error('error', 'error message');

logger.log('Log : File is created');
logger.info('INFO : Files is created');
logger.warn('WARNING : File is created');
logger.error('ERROR : Files is created');

console.log("obj : " + obj);
console.log("obj : ", obj);

console.time('SUM');
for(var i = 0 ; i < 10000 ; i++){
    var sum = 0;
    sum += i;
}
console.timeEnd('SUM');