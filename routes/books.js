var db = require("../conf/database.js"),
    Books = require("../models/books.js").books;


function error(err) {
  console.log("error", err);
  if (err) return;
}

/*
 * GET books listing.
 * /books
 * curl -X GET http://localhost:4000/api/books
 */

exports.all = function(req, res){
  Books.all( function (data) {
      res.json(data);
    }, 
    error 
  )
};


/*
 * GET book specific.
 * /books/:id
 * curl -X GET http://localhost:4000/api/books/:id
 */

exports.one = function(req, res){
  Books.one( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};


/*
 * DELETE book specific.
 * /books/:id
 * curl -X DELETE http://localhost:4000/api/books/:id
 */

exports.remove = function(req, res){
  Books.remove( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};


/*
 * POST books new.
 * /books
 * curl -X POST -H "Content-Type: application/json" -d '{"title":"xyz","author":"xyz", "description": "xyz"}' http://localhost:4000/api/books
 */

exports.create = function(req, res){
    // res.json(req.body);
  Books.create( req.body, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};