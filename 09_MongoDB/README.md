# Using MongoDB

## Module for MongoDB

### mongodb

The official MongoDB driver for Node.js. Provides a high-level API on top of mongodb-core that is meant for end users.

refer to [npm mongodb](https://www.npmjs.com/package/mongodb)

__**Installation**__

```command
npm install mongodb
```

__**Connect to MongoDB**__

```javascript
const MongoClient = require('mongdb).MongoClient;
const assert = require('assert);
// Connection URL
const url = 'mongodb://localhost:27017';
//Database Name
const dbName = 'myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close
});
```

__**Insert a Document**__

```javascript
const insertDocuments = function(db, callback){
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([{a:1}, {a:2}, {a:3}], function(err, result){
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}
```

__**Find All Documents**__

```javascript
const findDocuments = function(db, callback){
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}
```

__**Update a document**__

```javascript
const updateDocument = function(db, callback){
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({a:2}, {$set: {b:1}}, function(err, result){
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("updated the document with the field a equal to 2");
        callback(result);
    });
}
```

__**Remove a document**__

```javascript
const removeDocument = function(db, callback){
    // Get the documents collection
    const collection = b.collection('documents')'
    // Delete document where a is 3
    collection.deleteOne({a:3}, function(err, result){
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
}
```

### mongoose

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

refert to [npm mongoose](https://www.npmjs.com/package/mongoose)

__**Installation**__

```command
npm install mongooose
```
