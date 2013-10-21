
var db = require("../conf/database.js"),
    Books = require("../models/books.js").books;

// HomePage
exports.homepage = function (req, res) { 
  res.send('Books restful api') 
}

// exports.users = {};

/*
 * GET users listing.
 */


// exports.users.one = function(req, res){
//   var userId = db.ObjectId(req.params.id);
//   db.users.find({ "_id": userId }, function(err, user){
//     if (err) return;
//     res.json(user);
//   });
// };

/*
 * POST users new.
 */

// exports.users.new = function(req, res){
//   res.json(req.body);
//   // db.users.save(req.body);
// };


console.log(Books);

exports.books = {};

/*
 * GET book specific.
 */

function error(err) {
   if (err) return;
}

exports.books.one = function(req, res){
  Books.one( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error() 
  )
};

/*
 * GET books listing.
 */

exports.books.all = function(req, res){
  Books.all( function (data) {
      res.json(data);
    }, 
    error() 
  )
};


/*
 * POST books new.
 */

// exports.books.new = function(req, res){
//   res.json(req.body);
//   db.books.save(req.body);
// };
