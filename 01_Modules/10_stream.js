/**
 * Stream
 * Usage : Console / File / Server / Client
 * Readable Stream
 * - flowing mode : using 'data' Event , pipe , resume()
 * - paused mode : don't use 'data' Event
 * - Methods : read() / setEncoding() / pause() / resume() / pipe() / unpipe()
 * - Events : readable / data / end / close / error
 * Writable Stream
 * - http clients request, response , file , tcp socket
 * - Methods : write() / setDefaultEncoding() / end() / cork() / uncork()
 * - Events : drain / error / finish / pipe / unpipe
 * Duplex
 * Transform
 * 
 * Standard In/Out Stream
 * process.stdin : Console Input
 * process.stdout : Console Output
 * 
 * InterConnection two Streams
 * is.pipe(os);
 * is.unpipe(os);
 * 
 * flowing mode

var is = fs.createReadStream(file);
is.on('readable', function (){
    console.log('==READABLE EVENT');
});

is.on('data', function(chunk){
    console.log('==DATA EVENT');
    console.log(chunk.toString());
});

is.on('end', function(){
    console.log('==END EVENT');
});

 * pause mode don't use 'data' EVENT

is.on('readable', function(){
    console.log('== READABLE EVENT');
    while(chunk = is.read(10)){
        console.log('chunk : ', chunk.toString);
    }
});
*/

const fs = require('fs');

var is = process.stdin;
var os = fs.createWriteStream('./output.txt');
var os2 = fs.createWriteStream('./output2.txt');

os.on('finish', function(){
    console.log('finish!');
});

os.write('1234\n');
os.write('5678\n');
os.end('9\n');

is.pipe(os2);
