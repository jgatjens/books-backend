var _ = require("underscore");

module.exports = function(db){

	if (!db) {
		db =  require("../conf/database.js");
	}

	// Base CRUD
	var BaseModel = require('./base')(db);

	// Set collection type
	var bookModel = _.extend(BaseModel.prototype, { modelName: "books"});

	return bookModel;
};