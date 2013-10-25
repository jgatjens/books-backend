
var rbooks    = require("../routes/books.js"),
    rusers    = require("../routes/users.js"),
    rsessions = require("../routes/sessions.js");

// HomePage
exports.homepage = function (req, res) { 
  res.render("index")
}

exports.books    = rbooks;
exports.users    = rusers;
exports.sessions = rsessions;