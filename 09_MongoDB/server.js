const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(require('./routers'));
app.use(errorHandler);

app.listen(3000);

function errorHandler(err, req, res, next){
    if(err){
        res.status(500).send('Sorry. server has a problems\n');
        console.error(err);
    }
}