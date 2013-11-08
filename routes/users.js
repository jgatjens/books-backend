var UserModel = require("../models/users.js"),
    Users = new UserModel();


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
      console.log(data);
      res.json(data);
    }, 
    error
  )
};

/*
 * PUT users update.
 * /users
 * curl -X PUT -H "Content-Type: application/json" -d '{"_id":"5270879f2e0f04a09459e58f", "name":"john"}' http://localhost:4000/api/users
 */

exports.update = function(req, res){
  // res.json(req.body);
  Users.update( req.body, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};
