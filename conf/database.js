
var dbUrl = process.env.NODE_ENV === "test" ? "library_test": "library";
var collections = ["books","users", "sessions"];
var db = require("mongojs").connect(dbUrl, collections);

module.exports = db;