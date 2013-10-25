var db  = require("../database.js"),
	Books = require("../../models/books.js").books;

	// console.log(db);
	
describe("Books", function(){
  	//holds a customer to use in the each test  
  var currentBook = null;
  
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
			// currentBook = data;

			done();
		}, function(message){
		
		  message.should.equal(null);
		  
		  done();
		
		});



	});

	it("Adding a new book", function(done){
		
		Books.create(book, function(data){

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

	it("Get one book", function(done){
		
		Books.one(currentBook._id.toHexString(), function(data, err){

			// console.log(data);
			data[0].title.should.equal("Javascript test");
			data[0].author.should.equal("john john");
			data[0].description.should.equal("something");

			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});
	});




	it("Removing a book", function(done){
		
		Books.remove(currentBook._id.toHexString(), function(data, err){

			data.success.should.equal(true);

			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});
	});



});