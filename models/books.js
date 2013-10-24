var db = require("../conf/database.js");

var Books = function () {

	/*
	 * GET books listing.
	 * /books
	 */
	
	var _all = function (success, fail) {
		db.books.find({}, function(err, books){
		    if (err) fail(err);
		    success(books);
		});
	}

	/*
	 * GET book specific.
	 * /books/:id
	 */

	var _one = function (_id, success, fail) {
		var bookId = db.ObjectId(_id);
		db.books.find({ "_id": bookId }, function(err, book){
			if (err) fail(err);
			success(book);
		});
	}

	/*
	 * DELETE book specific.
	 * /books/:id
	 */

	var _remove = function (_id, success, fail) {
		var bookId = db.ObjectId(_id);
		db.books.remove({ "_id": bookId }, function(err, book){
			if (err) fail(err);
			
	  		if (book === 1)
		  		book = { "success": true };
		  	else 
		  		book = { "success": false };

	  		success(book);
		});
	}


	/*
	 * POST books new.
	 * /books
	 */

	_create = function(data, success, fail){

	  db.books.save(data, function (err, book) {
	  		if (err) fail(err);
	  		success(book);
	  });
	}

	return {
		all: _all,
		one: _one,
		create: _create,
		remove: _remove
	}

}();

exports.books = Books;