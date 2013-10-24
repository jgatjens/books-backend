var db = require("../conf/database.js"),
    Users = require("../models/users.js").users;


function error(err) {
  console.log("error", err);
  if (err) return;
}

// USERS

/*
 * GET users listing.
 * /users
 * curl -X GET http://localhost:4000/api/users
 */

exports.all = function(req, res){

  Users.all( function (data) {
      res.json(data);
    }, 
    error
  )
};


/*
 * GET user specific.
 * /users/:id
 * curl -X GET http://localhost:4000/api/users/:id
 */

exports.one = function(req, res){
  Users.one( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};

/*
 * DELETE user specific.
 * /users/:id
 * curl -X DELETE http://localhost:4000/api/users/:id
 */

exports.remove = function(req, res){
  Users.remove( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};


/*
 * POST users new.
 * /users
 * curl -X POST -H "Content-Type: application/json" -d '{"name":"xyz","avatar":"----", "books": []}' http://localhost:4000/api/users
 */

exports.create = function(req, res){
  users.create( req.body, 
    function (data) {
      res.json(data);
    }, 
    error
  )
};

/*
 * PUT user new book.
 * users/add/book
 * curl -X PUT -H "Content-Type: application/json" -d '{"iduser":"52671df12e677916a0fc80cb","idbook":"51771fce94d0d117cc333efe"}' http://localhost:4000/api/users/add/book
 */

exports.add_book = function(req, res){
  // res.json(req.body);
  Users.add_book( req.body, 
    function (data) {
      res.json(data);
    }, 
    error
  )
};