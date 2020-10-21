/**
 * process
 * Information-------------------
 * env : process environment
 * version : Node.js version
 * arch, platform : CPU and platform information
 * argv : execute command parameters
 * 
 * Events------------------------
 * exit : exit app
 * beforeExit : before exit app
 * uncaughtException : Exception Event
 * 
 * Functions---------------------
 * exit : exit app
 * nextTick : execute callback after all process done in the event loop
 */

 console.log("process.version : " , process.version);
 console.log("process.env : " , process.env);
 console.log("process.arch : " , process.arch);
 console.log("process.platform : " , process.platform);
// run node 02_process.js arg1 arg2
 console.log("process argv : ", process.argv);