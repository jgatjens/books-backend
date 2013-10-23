var db = require("../conf/database.js");

var Users = function () {

	/*
	 * GET users listing.
	 * /users
	 */
	
	var _all = function (sucess, fail) {
		db.users.find({}, function(err, users){
		    if (err) fail(err);
		    sucess(users);
		});
	}

	/*
	 * GET user specific.
	 * /users/:id
	 */

	var _one = function (_id, sucess, fail) {
		var userId = db.ObjectId(_id);
		db.users.find({ "_id": userId }, function(err, user){
			if (err) fail(err);
			sucess(user);
		});
	}

	/*
	 * DELETE user specific.
	 * /users/:id
	 */

	var _remove = function (_id, sucess, fail) {
		var userId = db.ObjectId(_id);
		db.users.remove({ "_id": userId }, function(err, user){
			if (err) fail(err);
			
	  		if (user === 1)
		  		user = { "sucess": true };
		  	else 
		  		user = { "sucess": false };

	  		sucess(user);
		});
	}

	/*
	 * POST users new.
	 * /users
	 */

	_create = function(data, sucess, fail){

	  db.users.save(data, function (err, user) {
	  		if (err) fail(err);
	  		sucess(user);
	  });
	}
	
	/*
	 * PUT users new book.
	 * /users/:id/books/:id
	 */

	//ObjectId("52671df12e677916a0fc80cb") userid
	//ObjectId("51771fce94d0d117cc333efe") bookid 
	_add_book = function(data, sucess, fail){
	
		var userId = db.ObjectId(data.userid);	
		var bookId = db.ObjectId(data.bookid);	

		// checks if user already contains the book
		// db.users.findOne({ _id: ObjectId("52671df12e677916a0fc80cb"), "books": ObjectId("51771fce94d0d117cc333efe") });
		var result = db.users.findOne({ _id: userid, books: bookId });

		console.log(result);


		// db.users.findAndModify({
		//     query: { _id: userid },
		//     update: $push: { "books": bookId  },
		//     new: true
		// }, function(err, user) {
	 //  		if (err) fail(err);
	 //  		sucess(user);
		// });		
	}

	return {
		all: _all,
		one: _one,
		create: _create,
		remove: _remove,
		add_book: _add_book
	}

}();

exports.users = Users;