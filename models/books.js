var db = require("../conf/database.js");

var Books = function () {

	/*
	 * GET books listing.
	 */
	
	var _all = function (sucess, fail) {
		db.books.find({}, function(err, books){
		    if (err) fail(err);
		    sucess(books);
		});
	}

	/*
	 * GET book specific.
	 */

	var _one = function (_id, sucess, fail) {
		var bookId = db.ObjectId(_id);
		db.books.find({ "_id": bookId }, function(err, book){
			if (err) fail(err);
			sucess(book);
		});
	}

	return {
		one: _one,
		all: _all
	}

}();

exports.books = Books;