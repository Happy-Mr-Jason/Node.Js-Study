# Control Flow

There are many troubles or complexed code with processing the callback. 

Sometimes we are falling in the 'Callback Hell'...
(Refer to '01_callbackhell.js')

Let's escape from the 'Callback Hell' using  'Async' Module and 'Promise' API

## Install 'Async' module
```
npm install async
```

## Async Docs
refer to https://caolan.github.io/async/v3/

## Functions of Async Module

### Porcedural control
series, waterfall, parallels....

#### .series(tasks, callback) // each one running once the previous function has completed
```javascript
async.series(
    [
        function (callback){
            callback(null, 'result1');
        }, 
        function (callback){
            callback(null, 'result2');
        }, 
        function (callback){
            callback(null, 'result3');
        }
    ],
    //optinal callback
    function(err, results){
        //results : ['result1', 'result2', 'result3']
});

async.series(
    {
        one: function(callback) {
            setTimeout(function() {
                callback(null, 1);
            }, 200);
        },
        two: function(callback){
            setTimeout(function() {
                callback(null, 2);
            }, 100);
        }
    },
    function(err, results) {
    // results is now equal to: {one: 1, two: 2}
});        

```
#### .waterfall(tasks, callback) //each passing their results to the next in the array
```javascript
async.waterfall(
    [
        function (callback){
            callback(null, 'value1');
        }, 
        function (arg, callback){
            //arg = 'value1'
            callback(null, 'value2', 'value3');
        }, 
        function (arg1, arg2, callback){
            //arg1 = 'value2' , arg2 = 'value3'
            callback(null, 'done');
        }
    ], 
    //optional callback
    function (err, result){
        //result = 'done'
});

// Or, with named functions:
async.waterfall([myFirstFunction, mySecondFunction, myLastFunction],
function (err, result) {
    // result now equals 'done'
});

function myFirstFunction(callback) {
    callback(null, 'one', 'two');
}

function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
}

function myLastFunction(arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done');
}
```
#### .parallel(tasks, callback) //without waiting until the previous function
```javascript
async.parallel(
    [
        function(callback) {
            setTimeout(function() {
                callback(null, 'one');
            }, 200);
        },
        function(callback) {
            setTimeout(function() {
                callback(null, 'two');
            }, 100);
        }
    ],
    // optional callback
    function(err, results) {
        // the results array will equal ['one','two'] even though
        // the second function had a shorter timeout.
    });

// an example using an object instead of an array
async.parallel(
    {
        one: function(callback) {
            setTimeout(function() {
                callback(null, 1);
            }, 200);
        },
        two: function(callback) {
            setTimeout(function() {
                callback(null, 2);
            }, 100);
        }
    }, 
    function(err, results) {
    // results is now equals to: {one: 1, two: 2}
});
```
### Collection
each, eachOf(forEachOf), map, filter....

#### .each(coll, iteratee, callback) // Applies the function iteratee to each item in coll, in parallel
```javascript
// openFiles is an array of file names
// saveFile is a function
async.each(openFiles, saveFile, function(err){
  // if any of the saves produced an error, err would equal that error
});
```
#### .eachOf(coll, iteratee, callback) // Like each(), except that it passes the key (or index) as the second argument to the iteratee.each,  parallel
```javascript
var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
var configs = {};

async.forEachOf(obj, function (value, key, callback) {
    fs.readFile(__dirname + value, "utf8", function (err, data) {
        if (err) return callback(err);
        try {
            configs[key] = JSON.parse(data);
        } catch (e) {
            return callback(e);
        }
        callback();
    });
}, function (err) {
    if (err) console.error(err.message);
    // configs is now a map of JSON data
    doSomethingWith(configs);
});
```
#### .map(coll,k iteratee, callback) // Produces a new collection of values by mapping each value in coll through the iteratee function
```javascript
async.map(['file1','file2','file3'], fs.stat, function(err, results) {
    // results is now an array of stats for each file
});
```
#### .filter(coll,k iteratee, callback) // Returns a new array of all the values in coll which pass an async truth test
```javascript
async.filter(['file1','file2','file3'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, results) {
    // results now equals an array of the existing files
});
```
## Promise
Promise API is included in JavaScript ES6.

so, don't need to install Module after Node.js 4.x.

refer to https://www.promisejs.org

### What is a promise?
The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:

* pending - The initial state of a promise.
* fulfilled - The state of a promise representing a successful operation.
* rejected - The state of a promise representing a failed operation.

Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).
(referred from  https://www.promisejs.org)

### Constructing(Create) a Promise
We give the constructor a factory function which does the actual work
```javascript
new Promise(function(fulfill, reject){
    //Asynchronous code
    if (err) reject(err);
    else fulfill(res);
});
```
### Transformation / Chaining
Calls onFulfilled or onRejected with the fulfillment value or rejection reason of the promise (as appropriate) and returns a new promise resolving to the return value of the called handler.
```javascript
Promise.prototype.then(onFulfilled, onRejected)
```




