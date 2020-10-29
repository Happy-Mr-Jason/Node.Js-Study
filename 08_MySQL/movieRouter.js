const express = require('express');
var pool = require('./dbConnect');
var router = express.Router();

router.get('/movies', showMovieList);
router.post('/movies', addMovie);
router.get('/movies/:movieId', showMovieDetail);
router.put('/movies/:movieId', editMovie);
router.delete('/movies/:movieId', deleteMovie);
router.post('/movies/:movieId', addReview);
router.put('/movies/:movieId/:reviewId', editReview);
router.delete('/movies/:movieId/:reviewId', deleteReview);

function showMovieList(req, res, next) {
    pool.getConnection((err, connection) => {
        if (err) {
            err.code = 500;
            return next(err);
        }
        var sql = 'SELECT * FROM tbl_movies';
        connection.query(sql, (err, results, field) => {
            if (err) {
                err.code = 500;
                connection.release();
                return next(err);
            }
            res.send({
                result: 'Success',
                count: results.length,
                movies: results
            });
            connection.release();
        });
    });
}

function addMovie(req, res, next) {
    var movie = {
        name: req.body.name,
        runtime: req.body.runtime,
        releasedate: req.body.releasedate,
        director: req.body.director,
        writer: req.body.writer
    }
    console.log(movie);
    pool.getConnection((err, connection) => {
        if (err) {
            err.code = 500;
            return next(err);
        }
        var sql = 'INSERT INTO tbl_movies SET ?';
        connection.query(sql, movie, (err, results, fields) => {
            if (err) {
                err.code = 500;
                connection.release();
                return next(err);
            }
            var movieId = results.insertId;
            res.send({
                result: 'Success',
                movieId: movieId
            });
            connection.release();
        });
    });
}

function showMovieDetail(req, res, next) {
    var movieId = req.params.movieId;
    pool.getConnection((err, connection) => {
        if (err) {
            err.code = 500;
            return next(err);
        }
        var sql1 = 'SELECT * FROM tbl_movies WHERE mno = ?';
        connection.query(sql1, movieId, (err, results, fields) => {
            if (err) {
                err.code = 500;
                connection.release();
                return next(err);
            }
            if (results.length == 0) {
                res.status(404).send({
                    result: 'Error',
                    msg: 'Not Found'
                });
                connection.release();
                return next(err);
            }
            var movieInfo = {
                result: 'Success',
                movie: results[0]
            };

            var sql2 = 'SELECT * FROM tbl_reviews WHERE mno = ?';
            connection.query(sql2, movieId, (err, results, fields) => {
                if (err) {
                    err.code = 500;
                    connection.release();
                    return next(err);
                }

                movieInfo.reviews = results;
                res.send(movieInfo);
                connection.release();
            });
        });
    });
}

function editMovie(req, res, next) {
    var movieId = req.params.movieId;
    var name = req.body.name;
    var runtime = req.body.runtime;
    var releasedate = req.body.releasedate;
    var director = req.body.director;
    var writer = req.body.writer;

    var modifyData = {};
    if (name) {
        modifyData.name = name;
    }
    if (runtime) {
        modifyData.runtime = runtime;
    }
    if (releasedate) {
        modifyData.releasedate = releasedate;
    }
    if (director) {
        modifyData.director = director;
    }
    if (writer) {
        modifyData.writer = writer;
    }
    pool.getConnection((err, connection) => {
        if (err) {
            err.code = 500;
            return next(err);
        }
        var sql = 'UPDATE tbl_movies SET ? WHERE mno = ?';
        connection.query(sql, [modifyData, movieId], (err, results, fields) => {
            if (err) {
                err.code = 500;
                connection.release();
                return next(err);
            }
            res.send({
                result: 'Success'
            });
            connection.release();
        });
    });
}

function deleteMovie(req, res, next) {
    var movieId = req.params.movieId;
    pool.getConnection((err, connection) => {
        if (err) {
            err.code = 500;
            return next(err);
        }
        connection.beginTransaction((err) => {
            var sql = 'DELETE FROM tbl_reviews WHERE mno = ?';
            connection.query(sql, movieId, (err, results, fields) => {
                if (err) {
                    err.code = 500;
                    connection.release();
                    return next(err);
                }
                var sql2 = 'DELETE FROM tbl_movies WHERE mno = ?';
                connection.query(sql2, movieId, (err, results, fields) => {
                    if (err) {
                        err.code = 500;
                        connection.rollback();
                        connection.release();
                        return next(err);
                    }
                    results.
                    res.send({
                        result: 'Success'
                    });
                    connection.commit();
                    connection.release();
                });
            });
        });
    });
}

function addReview(req, res, next) {
    var movieId = req.params.movieId;
    var review = {
        mno: movieId,
        reviewer: req.body.reviewer,
        review: req.body.review
    };
    pool.getConnection((err, connection) => {
        if (err) {
            err.code = 500;
            return next(err);
        }
        var sql = 'INSERT INTO tbl_reviews SET ?';
        connection.query(sql, review, (err, results, fields) => {
            if (err) {
                err.code = 500;
                connection.release();
                return next(err);
            }
            res.send({
                result: 'Success',
                reviewId: results.insertId
            })
            connection.release();
        });
    });
}

function editReview(req, res, next) {
    var movieId = req.params.movieId;
    var reviewId = req.params.reviewId;
    var modifyData = {
        review: req.body.review
    };
    pool.getConnection((err, connection) => {
        if (err) {
            err.code = 500;
            return next(err);
        }
        var sql = 'UPDATE tbl_reviews SET ? WHERE mno = ? AND rno = ?';
        connection.query(sql, [modifyData, movieId, reviewId], (err, results, fields) => {
            if (err) {
                err.code = 500;
                connection.release();
                return next(err);
            }
            res.send({
                result: 'Success'
            });
            console.log(results.changedRows);
            connection.release();
        });
    });
}

function deleteReview(req, res, next) {
    var movieId = req.params.movieId;
    var reviewId = req.params.reviewId;
    pool.getConnection((err, connection)=>{
        if(err){
            err.code = 500;
            return next(err);
        }
        var sql = 'DELETE FROM tbl_reviews WHERE mno = ? AND rno = ?';
        connection.query(sql, [movieId, reviewId], (err, result, fields) =>{
            if(err){
                err.code = 500;
                connection.release();
                return next(err);
            }
            res.send({result : 'Success'});
            connection.release();
        });
    });
}

module.exports = router;