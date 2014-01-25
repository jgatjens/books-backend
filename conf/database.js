
// var dbUrl = process.env.NODE_ENV === "test" ? "library_test": "library";

// console.log(process.env);

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'library';

var collections = ["books","users", "sessions"];
var db = require("mongojs").connect(mongoUri, collections);

// console.log(db);

// var mongo = require('mongodb');

// var db = mongo.Db.connect(mongoUri, function (err, db) {
//   db.collection('mydocs', function(er, collection) {
//     collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
//     });
//   });
// });

module.exports = db;
