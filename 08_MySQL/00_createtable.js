const mysql = require('mysql2');
const fs = require('fs');

var createTable = fs.readFileSync('./movieTables.sql', 'utf8');
var insertMovies = fs.readFileSync('./insertMovies.sql', 'utf8');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    multipleStatements: true,
    database: 'nodejs'
});

pool.getConnection(function (err, connection) {
    if (err) {
        console.error('Connection Error occured....', err.message);
        return;
    }
    // console.log(createTable);
    connection.query(createTable, function (error, results, fields) {
        if (error) {
            console.error('SQL Error occured....', error.message);
            return;
        }
        console.log("Create Tables Successful~!");
        // console.log(insertMovies);
        connection.query(insertMovies, function (error, results, fields) {
            if (error) {
                console.error('SQL Error occured....', error.message);
                return;
            }
            console.log("Insert datas Successful~!");
            connection.release();
        });
    });
});