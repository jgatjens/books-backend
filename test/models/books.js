var db  = require("../database.js"),
	bookModel = require("../../models/books.js")(db);
	userModel = require("../../models/users.js")(db);
	
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

	// beforeEach(function(done){});
	// afterEach(function(done){});

	//tests...  

	it("Add a book", function(done){
		
		bookModel.create(book, function(data){

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
		
		bookModel.all(function(data){
			data.length.should.be.above(0);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Get ramdom user", function(done){
		
		userModel.findOne(function(data, err){
			// console.log(data);
			userId	= data._id.toHexString();
			data._id.should.not.be.empty;

			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Get a book", function(done){
		
		bookModel.one(bookId, function(data, err){

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

		bookModel.update(bookId, currentBook, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});


	it("Add user to book", function(done){

		bookModel.add_user(bookId, userId,
			function(data){
				data.should.have.properties(['_id','user']);
				done();
			}, function(message){
 	 			message.should.equal(null);
  			done();
		});

	});

	it("Remove user from book", function(done){

		bookModel.remove_user(bookId, userId,
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

		bookModel.add_user(bookId, fakeUserId,
			function(data){
				// console.log(data.success);
				data.success.should.equal(false);	
				done();
			}, function(message){
 	 			message.should.equal(null);
  			done();
		});

	});

	it("Remove a book", function(done){

		bookModel.remove(bookId, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});
	});


	it("Add user to fake book should not be posible", function(done){

		bookModel.add_user(bookId, userId,
			function(data){
				data.success.should.equal(false);			
				done();

			}, function(message){
 	 			message.should.equal(null);
  			done();
		});

	});


});