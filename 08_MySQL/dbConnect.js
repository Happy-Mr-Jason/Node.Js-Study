const mysql = require('mysql2');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    // multipleStatements: true,
    database: 'nodejs'
});

module.exports = pool;