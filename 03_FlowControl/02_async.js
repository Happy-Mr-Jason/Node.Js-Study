const async = require('async');

function task1(callback){
    console.log('Start Task1');
    setTimeout(function(){
        console.log('End of Task1');
        callback(null, 'Task2 Result');
    }, 300);
}
// a Function with callback
function task2(callback){
    console.log('Start Task2');
    setTimeout(function(){
        console.log('End of Task2');
        callback(null, 'Task2 Result');
    }, 200);
}

function task3(callback){
    console.log('Start Task3');
    setTimeout(function(){
        console.log('End of Task3');
        callback('Task3 Error!', null);
    }, 200);
}

//Example 1
async.series([task1, task2], function(err, results){
    console.log('End of Example 1', results);
});

//Example 2
async.series([task3, task2, task1], function(err, results){
    if(err){
        console.log('Example 2 Error! : ', err);
        return;
    }
    console.log('End of Example 2', results);
});