var dbUrl = "library_test";
var collections = ["books", "users", "sessions"];

var db = require("mongojs").connect(dbUrl, collections);

module.exports = db;