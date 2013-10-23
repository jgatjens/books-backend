var db = require("../conf/database.js"),
    Users = require("../models/users.js").users;


function error(err) {
  console.log("error", err);
  if (err) return;
}


// USERS

exports.users = {};

/*
 * GET users listing.
 * /users
 * curl -X GET http://localhost:4000/api/users
 */

exports.users.all = function(req, res){
  console.log('users.all');
  Users.all( function (data) {
      res.json(data);
    }, 
    error() 
  )
};


/*
 * GET user specific.
 * /users/:id
 * curl -X GET http://localhost:4000/api/users/:id
 */

exports.users.one = function(req, res){
  Users.one( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error() 
  )
};

/*
 * DELETE user specific.
 * /users/:id
 * curl -X DELETE http://localhost:4000/api/users/:id
 */

exports.users.remove = function(req, res){
  Users.remove( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error() 
  )
};


/*
 * POST users new.
 * /users
 * curl -X POST -H "Content-Type: application/json" -d '{"name":"xyz","avatar":"----", "books": []}' http://localhost:4000/api/users
 */

exports.users.create = function(req, res){
  users.create( req.body, 
    function (data) {
      res.json(data);
    }, 
    error() 
  )
};

/*
 * PUT user new book.
 * /users/:id/users/:id
 * curl -X PUT -H "Content-Type: application/json" -d '{"iduser":"123","idbook":"123"}' http://localhost:4000/api/users/:id/users/:id
 */

exports.users.add_book = function(req, res){
    res.json(req.body);
  // Users.add_book( req.body, 
  //   function (data) {
  //     res.json(data);
  //   }, 
  //   error() 
  // )
};