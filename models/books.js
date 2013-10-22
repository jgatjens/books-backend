var db = require("../conf/database.js");

var Books = function () {

	/*
	 * GET books listing.
	 * /books
	 */
	
	var _all = function (sucess, fail) {
		db.books.find({}, function(err, books){
		    if (err) fail(err);
		    sucess(books);
		});
	}

	/*
	 * GET book specific.
	 * /books/:id
	 */

	var _one = function (_id, sucess, fail) {
		var bookId = db.ObjectId(_id);
		db.books.find({ "_id": bookId }, function(err, book){
			if (err) fail(err);
			sucess(book);
		});
	}

	/*
	 * GET book specific.
	 * /books/:id
	 */

	var _remove = function (_id, sucess, fail) {
		var bookId = db.ObjectId(_id);
		db.books.remove({ "_id": bookId }, function(err, book){
			if (err) fail(err);
			
	  		if (book === 1)
		  		book = { "sucess": true };
		  	else 
		  		book = { "sucess": false };

	  		sucess(book);
		});
	}


	/*
	 * POST books new.
	 * /books
	 */

	_create = function(data, sucess, fail){

	  db.books.save(data, function (err, book) {
	  		if (err) fail(err);
	  		sucess(book);
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