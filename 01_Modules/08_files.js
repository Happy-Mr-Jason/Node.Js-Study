/**
 * File System
 * 
 * Asynchronous function and Synchronous function
 * fs.open
 * fs.read
 * fs.write
 * fs.append
 * fs.unlink
 * fs.rename
 * fs.mkdir
 * fs.rmdir
 * fs.readdir
 * fs.createReadStream
 * fs.createWriteStream
 */

const fs = require('fs');

fs.readFile('./01_Modules/08_files.js', 'utf8', function (err, data) {
    if (err) {
        console.log('File Read Error....');
        return;
    }
    console.log(data);
});

try {
    var fileData = fs.readFileSync('./01_Modules/08_files.js', 'utf8');
    console.log(fileData);
} catch (error) {
    console.log('File Read Error occured....');
}
