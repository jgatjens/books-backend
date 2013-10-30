module.exports = function(db){

	var resJson =  function(result) {
		return result === 1 ? { "success": true } : { "success": false };
	}

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

		db.books.find({ _id: bookId }, function(err, book){
			if (err) fail(err);
			success(book);
		});
	}

	/*
	 * PUT books new book.
	 * /books
	 */
	
	var _update = function(data, success, fail){
		// console.log(data);
		var bookId = db.ObjectId(data._id.toHexString());

		// Removing primary key
		delete data._id;

		// update user collection
		db.books.update({ _id: bookId }, data, function(err, book) {
	  		if (err) fail(err);	
	  		success(resJson(book));
		});			
	}

	/*
	 * DELETE book specific.
	 * /books/:id
	 */

	var _remove = function (_id, success, fail) {
		var bookId = db.ObjectId(_id);

		db.books.remove({ _id: bookId }, function(err, book){
			if (err) fail(err);
  		success(resJson(book));
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
		update: _update,
		remove: _remove
	}

};