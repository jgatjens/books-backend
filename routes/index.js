
var rbooks = require("../routes/books.js"),
    rusers = require("../routes/users.js");

// HomePage
exports.homepage = function (req, res) { 
  res.send('Books restful api \n') 
}

exports.books = rbooks.books;
exports.users = rusers.users;