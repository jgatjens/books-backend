var db  = require("../database.js"),
	Books = require("../../models/books.js")(db);

	
describe("Models - Books", function(){
  	//holds a customer to use in the each test  
  var currentBook = null, bookId = 0;
  
  var book = {
		title: "Javascript test", 
		author: "john john",
		description: "something"
	}

	// beforeEach(function(done){});

	// afterEach(function(done){
		//delete all the customer records    
		// Books.remove(currentBook._id.toHexString(), function() {
		//   done();
		// });
	// });
	//tests...  

	it("Get all books", function(done){
		
		Books.all(function(data){
			data.length.should.be.above(3);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

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

	it("Get a book", function(done){
		
		Books.one(bookId, function(data, err){

			data[0].title.should.equal("Javascript test");
			data[0].author.should.equal("john john");
			data[0].description.should.equal("something");

			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Edit a book", function(done){
	
		currentBook.title = "js test";

		Books.update(currentBook, function(data, err){
			data.success.should.equal(true);
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
	
});