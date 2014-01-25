
var dbUrl = process.env.NODE_ENV === "test" ? "library_test": "library";

if (process.env.NODE_ENV === "production" ) {
	dbUrl = "mongodb://heroku_app21581708:vcgoumt6r89kmvmcvsbhnck3tq@ds027769.mongolab.com:27769/heroku_app21581708";
}	

var collections = ["books","users", "sessions"];
var db = require("mongojs").connect(dbUrl, collections);

module.exports = db;