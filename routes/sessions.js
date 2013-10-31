var Sessions = require("../models/sessions.js");

function error(err) {
  console.log("error", err);
  if (err) return;
}

/*
 * GET session specific.
 * /sessions/:id
 * curl -X GET http://localhost:4000/api/sessions/:id
 */

exports.one = function(req, res){
  Sessions.one( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};

/*
 * DELETE session specific.
 * /sessions/:id
 * curl -X DELETE http://localhost:4000/api/sessions/:id
 */

exports.remove = function(req, res){
  Sessions.remove( req.params.id, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};


/*
 * POST sessions new.
 * /sessions
 * curl -X POST -H "Content-Type: application/json" -d '{"_id":"123","token":"2323232"}' http://localhost:4000/api/sessions
 */

exports.create = function(req, res){
  Sessions.create( req.body, 
    function (data) {
      res.json(data);
    }, 
    error
  )
};

/*
 * PUT sessions update.
 * /sessions
 * curl -X PUT -H "Content-Type: application/json" -d '{"_id":"1234", "" }' http://localhost:4000/api/sessions
 */

exports.update = function(req, res){
  // res.json(req.body);
  Books.update( req.body, 
    function (data) {
      res.json(data);
    }, 
    error 
  )
};