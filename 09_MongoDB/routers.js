const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { ObjectId } = require('mongodb');

var router = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'nodejs';
const colName = 'movies';

router.get('/movies', showMovieList);
router.post('/movies', addMovie);
router.get('/movies/:movieId', showMovieDetail);
router.post('/movies/:movieId', addReview);
// router.put('/movies/:movieId', editMovie);
// router.delete('/movies/:movieId', deleteMovie);
// router.put('/movies/:movieId/:reviewId', editReview);
// router.delete('/movies/:movieId/:reviewId', deleteReview);

function dbControl(queryFunction, callback) {
    (async function () {
        const client = new MongoClient(url, {
            useUnifiedTopology: true
        });

        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);
        console.log('Database', db);
        console.log('Collection Movies', db.collection('movies'));
        const col = await db.collection(colName);
        //const col = db.movies;
        queryFunction(col, function (result) {
            callback(client, result);
        });

    })();
}

//db.movies.update({id:8},{$push:{reviews:{writer:'arkang', review:'hihi'}}})
function addReview(req, res, next) {
    var movieId = parseInt(req.params.movieId);
    var reviewData = {
        writer: req.body.writer,
        review: req.body.review
    };
    dbControl(function (col, callback) {
       col.updateOne({
            _id: movieId
        }, {
            $push: {
                reviews: reviewData
            }
        }, function (err, result){
            if(err){
                console.error(err);
                assert.strictEqual(err, null);
            }
            callback(result);
        });
    }, function (client, result) {
        console.log('put Result', result);
        res.send('Checking.........');
        // result.then(result => {
        //     if (result.length == 0) {
        //         res.status(404).send({
        //             result: 'Not Found'
        //         });
        //     } else {
        //         res.send({
        //             result: 'Success'
        //         });
        //     }
            client.close();
        // });
    });
}

function showMovieList(req, res, next) {
    dbControl(function (col, callback) {
        let result = col.find({}).toArray();
        callback(result);
    }, function (client, result) {
        result.then(result => {
            if (result.length == 0) {
                res.status(404).send({
                    result: 'Not Found'
                });
            } else {
                res.send({
                    result: 'Success',
                    count: result.length,
                    movies: result
                });
            }
            client.close();
        });
    });
}

function addMovie(req, res, next) {
    var insertData = {
        name: req.body.name,
        runtime: req.body.runtime,
        releasedate: req.body.releasedate,
        director: req.body.director,
        writer: req.body.writer
    };

    dbControl(function (col, callback) {
        let result = col.insertOne(insertData);
        callback(result);
    }, function (client, result) {
        result.then(result => {
            if (result.length == 0) {
                res.status(404).send({
                    result: 'Not Found'
                });
            } else {
                res.send({
                    result: 'Success',
                    count: result.length,
                    movies: result
                });
            }
            client.close();
        });
    });
}

function showMovieDetail(req, res, next) {
    // var movieId = parseInt(req.params.movieId);
    var movieId = ObjectId(req.params.movieId);
    dbControl(function (col, callback) {
        let result = col.findOne({
            _id: movieId
        });
        callback(result);
    }, function (client, result) {
        result.then(result => {
            if (result.length == 0) {
                res.status(404).send({
                    result: 'Not Found'
                });
            } else {
                res.send({
                    result: 'Success',
                    movie: result
                });
            }
            client.close();
        });
    });
}

module.exports = router;