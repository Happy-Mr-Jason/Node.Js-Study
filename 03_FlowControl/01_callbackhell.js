// a Function with callback
function task1(callback){
    console.log('Start Task1');
    setTimeout(function(){
        console.log('End of Task1');
        callback();
    }, 300);
}
// a Function with callback
function task2(callback){
    console.log('Start Task2');
    setTimeout(function(){
        console.log('End of Task2');
        callback();
    }, 200);
}

// I want to continue executing codes as 'task1 > task2 .....' 
task1(function(){
    task2(function(){

    });
});

/* if we have many functions...
task1(function(){
    task2(function(){
        task3(function(){
            task4(function(){
                ...
            });
        });
    });
});
*/
