var _ 	= require("underscore"),
		db 	= require("../conf/database.js");

module.exports = function(){

	// Base CRUD
	var BaseModel = require('./base')(db),
			Users = require("./users")(db);
	
	// Set collection type
	var bookModel = _.extend(BaseModel.prototype, { modelName: "books" });

	/*
	 * PUT user in book.
	 * book/user
	 */

	bookModel.add_user = function(bookid, userid, success, fail){
		
		
		var userId = db.ObjectId(userid),
	  		bookId = db.ObjectId(bookid),
	  		error = false;	

		// checks if book exist 
		bookModel.one(bookid, function (book) {
			// console.log("checks if book exist: ", book);
			if (!book){
				var msg = { "success": false, "errorMessage": "The book you are trying to associate does not exist"};
				success(msg);		
				error = true;
			}
		});	

		if (error) return;
		
		// checks if book already contains the user
		db.books.find({ _id: bookId, "user._id": userId  }, function (err, book) {

			if (err) fail(err);

			if (!book) {
				var msg = { "success": false, "errorMessage": "Book already contains the user you are trying to add"};
				success(msg);
				error = true;
			}
		});

		if (error) return;

		// console.log("\n userId: " + userid);

		Users.one(userid, 

			function(user) {

				// If user doesn't exist
				if (!user) {
					var msg = { "success": false, "errorMessage": "User doesn't exist" };
					success(msg);
					error = true;
				}
			
				if (error) return;

				// update user collection
				db.books.findAndModify({
				    query: { _id: bookId },
				    update: { $set: { "user": user  } },
				    new: true
				}, function(err, book) {
			  		if (err) fail(err);
			  		success(book);
				});		

			}, function(err) {
				fail(err);
			});

	}

	/*
	 * DELETE user from book.
	 * book/user
	 */

	bookModel.remove_user = function(bookid, userid, success, fail){
	
		var userId = db.ObjectId(userid),
	  		bookId = db.ObjectId(bookid),
	  		error = false;	

	  // checks if book already contains the user
		db.books.find({ _id: bookId, "user._id": userId  }, function (err, book) {

			if (err) fail(err);

			if (!book) {
				var msg = { "success": false, "errorMessage": "Book does not contains the user you are trying to remove"};
				success(msg);
				error = true;
			}

		});		

		if (error) return;

		// remove user from book
		db.books.update({ _id: bookId }, { $unset: { "user": "" } }, function(err, user) {
	  		if (err) fail(err);
	  		success({ "success": true });
		});		
	}

	return bookModel;
};