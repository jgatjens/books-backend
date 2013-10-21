var dbUrl = "library_test";
var collections = ["books"];

var db = require("mongojs").connect(dbUrl, collections);

module.exports = db;