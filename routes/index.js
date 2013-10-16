
var db = require("../conf/database.js");

exports.users = {};

/*
 * GET users listing.
 */


exports.users.one = function(req, res){
  var userId = db.ObjectId(req.params.id);
  db.users.find({ "_id": userId }, function(err, user){
    if (err) return;
    res.json(user);
  });
};

/*
 * POST users new.
 */

exports.users.new = function(req, res){
  res.json(req.body);
  // db.users.save(req.body);
};



exports.books = {};

/*
 * GET book specific.
 */

exports.books.one = function(req, res){
  var bookId = db.ObjectId(req.params.id);
  db.books.find({ "_id": bookId }, function(err, book){
    if (err) return;
    res.json(book);
  });
};

/*
 * POST books new.
 */

exports.books.new = function(req, res){
  res.json(req.body);
  db.books.save(req.body);
};

/*
 * GET books listing.
 */

exports.books.all = function(req, res){
  db.books.find({}, function(err, books){
    if (err) return;
    res.json(books);
  });
};

