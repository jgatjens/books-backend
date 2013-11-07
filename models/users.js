var _ = require("underscore");

module.exports = function(db){

	if (!db) {
		db =  require("../conf/database.js");
	}
	
	var BaseModel = require('./base')(db);
	var userModel = _.extend(BaseModel.prototype, { modelName: "users"});

	/*/*
	 * PUT users new book.
	 * users/book
	 */

	/*userModel.add_book = function(user, book, success, fail){
	
		var userId = db.ObjectId(user),
	  		bookId = db.ObjectId(book);	

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

		// update user collection
		db.users.findAndModify({
		    query: { _id: userId },
		    update: { $push: { "books": bookId  } },
		    new: true
		}, function(err, user) {
	  		if (err) fail(err);
	  		success(user);
		});		
	}
	*/

	/*
	 * DELETE users a book.
	 * users/book
	 */

	/*userModel.remove_book = function(user, book, success, fail){
	
		var userId = db.ObjectId(user),
	  		bookId = db.ObjectId(book);	

		// checks if user contains the book
		db.users.findOne({ _id: userId, books: bookId }, function (err, user) {

			if (err) fail(err);
			
			if (!user) {
				var msg = { "success": false, "errorMessage": "User does not contains the book you are trying to remove"};
				success(msg);
			}
		});

		// update user collection
		db.users.findAndModify({
		    query: { _id: userId },
		    update: { $pull: { "books": bookId  } },
		    new: true
		}, function(err, user) {
	  		if (err) fail(err);
	  		success(user);
		});		
	}
*/

	return userModel;

};
