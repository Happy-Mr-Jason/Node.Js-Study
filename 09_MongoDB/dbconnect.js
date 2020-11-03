const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/nodejs';
const dbName = 'nodejs';
var db;

MongoClient.connect(url, {
    useUnifiedTopology: true
}, function (err, client) {
    assert.strictEqual(null, err);
    console.log("Connected successfully to server");
    client.close();
});

module.exports = MongoClient;