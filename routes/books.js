var Books = require("../models/books.js");

function error(err) {
  console.log("error", err, "\n");
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
 * curl -X DELETE http://localhost:4000/api/books/52682f94bc8689d9c7000001
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
 * PUT books update.
 * /books
 * curl -X PUT -H "Content-Type: application/json" -d '{"_id":"5270879f2e0f04a09459e58f", "title":"a","author":"a", "desc": "a"}' http://localhost:4000/api/books
 */

exports.update = function(req, res){
  // res.json(req.body);
  Books.update(req.params.id, req.body, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};


/*
 * POST books new.
 * /books
 * curl -X POST -H "Content-Type: application/json" -d '{"title":"xyz","author":"xyz", "desc": "xyz"}' http://localhost:4000/api/books
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