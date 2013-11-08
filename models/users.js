var _ 	= require("underscore"),
		db 	= require("../conf/database.js");

module.exports = function(){
	
	var BaseModel = require('./base')(db);
	var userModel = _.extend(BaseModel.prototype, { modelName: "users"});

	return userModel;

};
