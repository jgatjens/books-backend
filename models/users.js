var db = require("../conf/database.js"),
	userId = 0, 
	bookId = 0;

var Users = function () {

	/*
	 * GET users listing.
	 * /users
	 */
	
	var _all = function (success, fail) {
		db.users.find({}, function(err, users){
		    if (err) fail(err);
		    success(users);
		});
	}

	/*
	 * GET user specific.
	 * /users/:id
	 */

	var _one = function (_id, success, fail) {
		var userId = db.ObjectId(_id);
		db.users.find({ "_id": userId }, function(err, user){
			if (err) fail(err);
			success(user);
		});
	}

	/*
	 * DELETE user specific.
	 * /users/:id
	 */

	var _remove = function (_id, success, fail) {
		var userId = db.ObjectId(_id);
		db.users.remove({ "_id": userId }, function(err, user){
			if (err) fail(err);
			
	  		if (user === 1)
		  		user = { "success": true };
		  	else 
		  		user = { "success": false };

	  		success(user);
		});
	}

	/*
	 * POST users new.
	 * /users
	 */

	_create = function(data, success, fail){

	  db.users.save(data, function (err, user) {
	  		if (err) fail(err);
	  		success(user);
	  });
	}
	
	/*
	 * PUT users new book.
	 * users/add/book
	 */

	_add_book = function(data, success, fail){
	
		userId = db.ObjectId(data.iduser),
		bookId = db.ObjectId(data.idbook);	

		// checks if book exist 
		db.books.findOne({ _id: bookId }, function (err, book) {
			// console.log("book", book);
			if (err) fail(err);

			if (!book){
				var msg = { "success": false, "errorMessage": "The book you are trying to associate does not exist"};
				success(msg);		
			}
		});	

		// checks if user already contains the book
		db.users.findOne({ _id: userId, books: bookId }, function (err, user) {
			// console.log("user", user);
			if (err) fail(err);
			
			if (user) {
				var msg = { "success": false, "errorMessage": "User already contains the book you are trying to add"};
				success(msg);
			}
		});

		// success(data);
		db.users.findAndModify({
		    query: { _id: userId },
		    update: { $push: { "books": bookId  } },
		    new: true
		}, function(err, user) {
	  		if (err) fail(err);
	  		success(user);
		});		
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