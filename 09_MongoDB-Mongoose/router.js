const {
    nextTick
} = require('async');
const express = require('express');
var router = express.Router();

var Movie = require('./model');

router.get('/movies', showMovieList);
router.get('/movies/:movieId', showMovieDetail);
router.post('/movies', addMovie);
router.delete('/movies/:movieId', deleteMovie);

function deleteMovie(req, res, next) {
    var movieId = req.params.movieId;
    console.log(movieName);
    Movie.findOneAndRemove({
        _id: movieId
    }).then(function (result) {
        res.send({
            result: 'Success',
            movieId: result._id
        })
    }, function (err) {
        err.code = 404;
        next(err);
    });
}

function addMovie(req, res, next) {
    var name = req.body.name;
    var runtime = req.body.runtime;
    var releasedate = req.body.releasedate;
    var director = req.body.director;
    var writer = req.body.writer;
    var movie = new Movie({
        name: name,
        runtime: runtime,
        releasedate: releasedate,
        director: director,
        writer: writer
    });
    movie.save().then(function (result) {
        console.log(result);
        res.send({
            result: 'Success',
            movieId: result._id
        });
    }, function (err) {
        err.code = 500;
        next(err);
    });
}

function showMovieList(req, res, next) {
    Movie.find({}, {
        _id: 1,
        name: 1
    }).then(function fulfilled(docs) {
        console.log('Success : ');
        var result = {
            count: docs.length,
            movies: docs
        };
        res.send(result);
    }, function rejected(err) {
        err.code = 500;
        next(err);
    });
}

function showMovieDetail(req, res, next) {
    var movieId = req.params.movieId;
    Movie.findById(movieId).exec(function (err, doc) {
        if (err) {
            err.code = 500;
            return next(err);
        }
        res.send(doc);
    });
}

module.exports = router;