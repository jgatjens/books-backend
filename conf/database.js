
var dbUrl = process.env.NODE_ENV === "test" ? "library_test": "library";

// If we are running test kill node proces after 2 seconds
if (process.env.NODE_ENV === "test") {
	setTimeout(function() {
 		process.exit(1);	 
	}, 4000 );    
}

var collections = ["books","users", "sessions"];
var db = require("mongojs").connect(dbUrl, collections);

module.exports = db;