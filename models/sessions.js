var _ = require("underscore");

module.exports = function(db){

	if (!db) {
		db =  require("../conf/database.js");
	}
	
	var BaseModel = require('./base')(db);
	var sessionModel = _.extend(BaseModel.prototype, { modelName: "sessions"});


	return sessionModel;
};