const mongoose = require('mongoose');
var url = 'mongodb://localhost/nodejs';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var connection = mongoose.connection;

connection.on('error', function (err) {
    console.error('Errors are occured during connecting mongoDb : ', err);
});

connection.on('open', function () {
    console.log('Connected to MongoDb...');
});

var MovieSchema = mongoose.Schema({
    name: String,
    runtime: Number,
    releasedate: Date,
    director: String,
    writer: String,
    actors: [String],
    reviews: [String]
});

var Movie = mongoose.model('Movie', MovieSchema);

// var movie1 = new Movie({
//     name: 'Han Solo 1',
//     runtime: 135,
//     releasedate: 2018 - 5 - 10,
//     director: 'Ron Howard',
//     writer: 'Jonathan Kasdan'
// });

// movie1.save(function (err, result, rows) {
//     if (err) {
//         console.error('Error:', err);
//     } else {
//         console.log('Success', result);
//     }
// });

// Movie.create({
//     name: 'Han Solo 2',
//     runtime: 135,
//     releasedate: 2018 - 5 - 10,
//     director: 'Ron Howard',
//     writer: 'Jonathan Kasdan'
// }).then(function fulfilled(result) {
//     console.log('Success :', result);
// }, function rejected(err) {
//     console.error('Error :', err);
// });

// Movie.create({
//     name: 'Han Solo 3',
//     runtime: 135,
//     releasedate: 2018 - 5 - 10,
//     director: 'Ron Howard',
//     writer: 'Jonathan Kasdan'
// }, function (err, result) {
//     if (err) {
//         console.error('Error : ', err);
//     } else {
//         console.log('Success : ', result);
//     }
// });

module.exports = Movie;