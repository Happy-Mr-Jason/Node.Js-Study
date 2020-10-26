const express = require('express');
const app = express();
const port = 3000;

app.get('/:value', work);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

function work(req, res, next){
    var val = parseInt(req.params.value);

    if(!val){
        var error = new Error('This is not number');
        next(error);
        return;
    }
    res.send('Result : ' + val);
}

function errorHandler(err, req, res, next){
    res.send('Error Occured')
}