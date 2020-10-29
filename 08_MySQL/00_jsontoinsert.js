const fs = require('fs');

module.exports = function(){

    var moviesFile = fs.readFileSync('./movies.json');
    var movies = JSON.parse(moviesFile);
    
    var sqlFileData = '';
    movies.forEach(movie => {
        var writer = '';
        if(movie.writer instanceof Array){
            writer = movie.writer[0];
        } else {
            writer = movie.writer;
        }
        
        var sql = `INSERT INTO tbl_movies(name, runtime, releasedate, director, writer) VALUES( "${movie.name}", "${movie.runtime}", "${movie.releasedate}", "${movie.director}", "${writer}");\n`
        sqlFileData += sql;
    });
    
    fs.writeFileSync('./insertMovies.sql', sqlFileData);
}
    