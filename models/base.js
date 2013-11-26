module.exports = function (db) {

	resJson =  function(result) {
		return result === 1 ? { "success": true } : { "success": false };
	}

	var BaseModel = function (name) {
		this.modelName = name;
	};
	
	/*
	 * POST model new.
	 * /model
	 */

	BaseModel.prototype.create = function(data, success, fail){

	  db[this.modelName].save(data, function (err, coll) {
	  		if (err) fail(err);
	  		success(coll);
	  });
	};	

	/*
	 * GET model listing.
	 * /model
	 */

	BaseModel.prototype.all = function (success, fail) {
		
		db[this.modelName].find({}, function(err, coll){
		    if (err) fail(err);
		    success(coll);
		});
	};

	/*
	 * GET specific model.
	 * /model/:id
	 */

	BaseModel.prototype.one = function (_id, success, fail) {

		try {
			var id = db.ObjectId(_id);
		} catch(err) {
			var msg = { success: false, msg: "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters" }
			fail(msg);
		}

		db[this.modelName].findOne({ _id: id }, function(err, coll){
			if (err) fail(err);
			success(coll);
		});
	};

	/*
	 * GET any model.
	 */

	BaseModel.prototype.findOne = function (success, fail) {
		db[this.modelName].findOne({}, function(err, coll){
			if (err) fail(err);
			success(coll);
		});
	};



	/*
	 * PUT new model.
	 * /model
	 */
	
	BaseModel.prototype.update = function(_id, data, success, fail){

		try {
			var id = db.ObjectId(_id);
		} catch(err) {
			var msg = { success: false, msg: "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters" }
			fail(msg);
		}

		// Removing primary key
		delete data._id;

		// update model
		db[this.modelName].update({ _id: id }, data, function(err, coll) {
	  		if (err) fail(err);	
	  		success(resJson(coll));
		});			
	};

	/*
	 * DELETE model specific.
	 * /model/:id
	 */

	BaseModel.prototype.remove = function (_id, success, fail) {
		
		try {
			var id = db.ObjectId(_id);
		} catch(err) {
			var msg = { success: false, msg: "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters" }
			fail(msg);
		}

		db[this.modelName].remove({ _id: id }, function(err, coll){
			if (err) fail(err);
  		success(resJson(coll));
		});
	};

	return BaseModel;
}
