var _ 	= require("underscore"),
		db 	= require("../conf/database.js");

module.exports = function(){
	
	var BaseModel = require('./base')(db);
	var sessionModel = _.extend(BaseModel.prototype, { modelName: "sessions"});


	return sessionModel;
};