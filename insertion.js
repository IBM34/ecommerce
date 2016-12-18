var MongoClient = require('mongodb').MongoClient
var assert= require('assert');
var ObjectId = require('mongodb').ObjectID;

// Connection URL
var url = 'mongodb://localhost:27017/newBase2';
// Use connect method to connect to the Server



/*
var insertDocuments = function(db, callback) {
    // Get the documents collection

    db.collection('Produits').insert([
	{'type': 'telephone', 'marque': 'Apple', 'nom': 'iphone'},
	 {'type': 'telephone', 'marque': 'Samsung', 'nom': 'Galaxy S7'},
	 {'type': 'ipod', 'marque': 'Apple', 'nom': 'ipod touch'}
	]



  , function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}
*/



MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  //insertDocuments(db, function() {
    //db.close();
    //});
var fs = require('fs');
var mydocuments = fs.readFile('Produits.json', 'utf8', function (err, data) {

    var collection = db.collection('Produits');
    collection.insert(JSON.parse(data), function(err, docs) { // Should succeed
	collection.count(function(err, count) {
            //console.log(format("count = %s", count));
            console.log(data);
            db.close();
	});
    });
});

});
