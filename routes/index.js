var db = require("../conf/database.js");

exports.backbone = function(req, res){
  res.render('backbone', { title: 'THI Books' });
};

exports.jquery = function(req, res){
  res.render('jquery', { title: 'THI Books' });
};

exports.books = {};

exports.books.all = function(req, res){
  db.books.find({}, function(err, books){
    if (err) return;
    res.json(books);
  });
};

exports.books.one = function(req, res){
  var bookId =  db.ObjectId(req.params.id);
  db.books.find({ "_id": bookId }, function(err, book){
    if (err) return;
    res.json(book);
  });
};

exports.books.create = function(req, res){
  res.json(req.body);
  db.books.save(req.body);
};
