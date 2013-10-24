var dbUrl = "library";
var collections = ["books","users"];

var db = require("mongojs").connect(dbUrl, collections);

module.exports = db;