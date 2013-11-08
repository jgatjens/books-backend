var bookModel = require("../../models/books.js"),
		userModel = require("../../models/users.js"),
		Books = new bookModel(),
		Users = new userModel();

	
describe("Models - Books", function() {
  	//holds a customer to use in the each test  
  var currentBook = null, 
  		bookId = 0, 
  		userId = 0;
  
  var book = {
		title: "Javascript test", 
		author: "john john",
		description: "something"
	}

	var user = {
		name: "John Doe", 
		email: "john@doe.com",
		avatar: "--------",
	}

	// crear user before books test.
	before(function(done) {

		Users.create(user, function(data) {
			userId	= data._id.toHexString();
			data._id.should.not.be.empty;
			done();
		},  function(message){
		  message.should.equal(null);
		  done();
		});


	});

	// remove user after books test.
	after(function(done){
		
		Users.remove(userId, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	//tests...  

	it("Add a book", function(done){
		
		Books.create(book, function(data){

			bookId = data._id.toHexString();
			data.title.should.equal("Javascript test");
			data.author.should.equal("john john");
			data.description.should.equal("something");

			currentBook = data;

			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});


	it("Get all books", function(done){
		
		Books.all(function(data){
			data.length.should.be.above(0);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Get a book", function(done){
		
		Books.one(bookId, function(data, err){

			data.title.should.equal("Javascript test");
			data.author.should.equal("john john");
			data.description.should.equal("something");

			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Edit a book", function(done){
	
		currentBook.title = "js test";

		Books.update(bookId, currentBook, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Add user to book", function(done){

		Books.add_user(bookId, userId,
			function(data){
				data.should.have.properties(['_id','user']);
				done();
			}, function(message){
 	 			message.should.equal(null);
  			done();
		});

	});

	it("Remove user from book", function(done){

		Books.remove_user(bookId, userId,
			function(data){
				data.success.should.equal(true);
				done();
			}, function(message){
 	 			message.should.equal(null);
  			done();
		});

	});

	it("Add fake user to book should not be posible", function(done){

		var fakeUserId = "527af32ad4112c358af19975";

		Books.add_user(bookId, fakeUserId,
			function(data){
				data.success.should.equal(false);	
				done();
			}, function(message){
 	 			message.should.equal(null);
  			done();
		});

	});

	it("Remove a book", function(done){

		Books.remove(bookId, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});
	});

	it("Add user to fake book should not be posible", function(done){

		Books.add_user(bookId, userId,
			function(data){
				data.success.should.equal(false);			
				done();

			}, function(message){
 	 			message.should.equal(null);
  			done();
		});

	});


});