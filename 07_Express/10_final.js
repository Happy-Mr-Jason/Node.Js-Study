const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./'));
app.use(morgan('dev'));
app.use(bodyParser.json());

var movieList = [];
fs.readFile('./10_final.json', (err, data) => {
    if (!err)
        movieList = JSON.parse(data);
});

app.get('/', (req, res) => {
    res.render('final', {
        title: 'Movie List',
        list: movieList
    });
});
app.route('/movies/:id')
    .get(searchMovie, (req, res) => {
        res.render('movie', {
            title: 'Movie Detail',
            movie: req.movieData
        });
    });

app.route('/movies/:id/reviews')
    .get(searchMovie, (req, res) => {
        var reviews = req.movieData.reviews;
        console.log(reviews);
        res.send(JSON.stringify(reviews));
    })
    .post(searchMovie, (req, res) => {
        var reviews = req.movieData.reviews;
        reviews.push(req.body);
        fs.writeFile('./10_final_save.json',JSON.stringify(movieList),'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        res.send(JSON.stringify({
            'Result': 'Success'
        }))
    })

function searchMovie(req, res, next) {
    var id = req.params.id;
    var movieData = {};
    movieList.forEach((movie) => {
        if (movie.id == id)
            movieData = movie;
    });
    req.movieData = movieData;
    next();
}

app.listen(3000);