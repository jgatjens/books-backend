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
		var id = db.ObjectId(_id);
		db[this.modelName].find({ _id: id }, function(err, coll){
			if (err) fail(err);
			success(coll);
		});
	};

	/*
	 * PUT new model.
	 * /model
	 */
	
	BaseModel.prototype.update = function(_id, data, success, fail){

		var id = db.ObjectId(_id);
		
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
		var id = db.ObjectId(_id);

		db[this.modelName].remove({ _id: id }, function(err, coll){
			if (err) fail(err);
  		success(resJson(coll));
		});
	};

	return BaseModel;
}
