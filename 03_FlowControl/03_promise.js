function task1(fulfill, reject){
    console.log('Start Task1');
    setTimeout(function (){
        console.log('End of Task1');
        fulfill('Task1 Result');
    }, 300);
}

function task2(fulfill, reject){
    console.log('Start Task2');
    setTimeout(function (){
        reject('Task2 Error msg....');
        console.log('End of Task2');
        fulfill('Task2 Result');
    }, 300);
}

function fulfilled(result){
    console.log('Fulfilled : ', result);
}

function rejected(err){
    console.log('Rejected : ', err);
}

new Promise(task1).then(fulfilled, rejected);
new Promise(task2).then(fulfilled, rejected);