# Using Database : MySQL

## Module for Database

### MySQL2 Module

refer to [npm mysql2](https://www.npmjs.com/package/mysql2)

```command
npm install mysql2
```

#### Connection

```javascript
mysql.createConnection(DATABASE-CONFIG);
```

Connnection Configuration(Options)

- host, port : DBMS Address and port(Default : 3306)
- user, password : DBMS Account
- database : Database Name
- multipleStatements : Allow multiple mysql statements per query. Be careful with this, it could increase the scope of SQL injection attacks. (Default: false)
- connectTimeout : The milliseconds before a timeout occurs during the initial connection to the MySQL server. (Default: 10000)
- ssl: object with ssl parameters or a string containing name of ssl profile. See SSL options.

Methods

- connect() : Establishing connections
- end() : Terminating a connection gracefully is done by calling this method
- query() : The most basic way to perform a query is to call the .query() method on an object (like a Connection, Pool, or PoolNamespace instance).

#### Connection Pool

``` javascript
mysql.createPool(Option);
```

Options

- acquireTimeout: The milliseconds before a timeout occurs during the connection acquisition. This is slightly different from connectTimeout, because acquiring a pool connection does not always involve making a connection. If a connection request is queued, the time the request spends in the queue does not count towards this timeout. (Default: 10000)
  
- waitForConnections: Determines the pool's action when no connections are available and the limit has been reached. If true, the pool will queue the connection request and call it when one becomes available. If false, the pool will immediately call back with an error. (Default: true)
  
- connectionLimit: The maximum number of connections to create at once. (Default: 10)
  
- queueLimit: The maximum number of connection requests the pool will queue before returning an error from getConnection. If set to 0, there is no limit to the number of queued connection requests. (Default: 0)

Pooling connections

```javascript
pool.getConnection(function(err, connection){
    connection.query(sql, function(error, results, fields){
        connction.release();
    })
});
```

pool events

- acquire
- connection
- enqueue
- release

Closing the connctions in a pool

```javascript
poll.end(function(err)){
    //all connctions in the pool have ended
}
```

query Results

- insertId : you can retrieve the insert id.

- affectedRows : You can get the number of affected rows from an insert, update or delete statement.

- changeRows : You can get the number of changed rows from an update statement.

#### Escaping query values

**Caution** These methods of escaping values only works when the NO_BACKSLASH_ESCAPES SQL mode is disabled (which is the default state for MySQL servers).

In order to avoid SQL Injection attacks, you should always escape any user provided data before using it inside a SQL query. You can do so using the mysql.escape(), connection.escape() or pool.escape() methods.

```javascript
var userId = 'some user provided value';
var sql    = 'SELECT * FROM users WHERE id = ' + connection.escape(userId);
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  // ...
});
```

Alternatively, you can use ? characters as placeholders for values you would like to have escaped like this:

```javascript
connection.query('SELECT * FROM users WHERE id = ?', [userId], function (error, results, fields) {
  if (error) throw error;
  // ...
});
```

#### Transaction

Please note that `beginTransaction()`, `commit()` and `rollback()` are simply convenience functions that execute the START TRANSACTION, COMMIT, and ROLLBACK commands respectively.

```javascript
connection.beginTransaction(function(err) {
  if (err) { throw err; }
  connection.query('INSERT INTO posts SET title=?', title, function (error, results, fields) {
    if (error) {
      return connection.rollback(function() {
        throw error;
      });
    }

    var log = 'Post ' + results.insertId + ' added';

    connection.query('INSERT INTO log SET data=?', log, function (error, results, fields) {
      if (error) {
        return connection.rollback(function() {
          throw error;
        });
      }
      connection.commit(function(err) {
        if (err) {
          return connection.rollback(function() {
            throw err;
          });
        }
        console.log('success!');
      });
    });
  });
});
```

### Sequelize ORM Module

> ORM(Object relational Mapping)

refer to [npm sequelize](https://www.npmjs.com/package/sequelize])

refer to [Sequelize API Reference Manual](https://sequelize.org/master/manual/)

```command
npm install sequelize
```

#### Connecting to a database

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
```

#### Model Basics

refer to [Sequelize API Reference : Model Basics](https://sequelize.org/master/manual/model-basics.html)

## Scheme for This Tutorial

```sql
SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS tbl_reviews;
DROP TABLE IF EXISTS tbl_movies;

/* Create Tables */

CREATE TABLE tbl_movies
(
  mno int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  runtime int,
  releasedate date,
  director varchar(50),
  writer varchar(50),
  PRIMARY KEY (mno)
);


CREATE TABLE tbl_reviews
(
  rno int NOT NULL AUTO_INCREMENT,
  mno int NOT NULL,
  reviewer varchar(50),
  review varchar(300),
  PRIMARY KEY (rno)
);

/* Create Foreign Keys */

ALTER TABLE tbl_reviews
ADD FOREIGN KEY (mno)
REFERENCES tbl_movies (mno)
ON UPDATE RESTRICT
ON DELETE RESTRICT
;

/* Create Indexes */

CREATE INDEX idx_reviews ON tbl_reviews (mno DESC, rno ASC);
```
