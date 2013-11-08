var request  = require("supertest"),
		require = require("../../routes/books.js");
	
describe("Routes - Books", function() {
  
  var url = "http://localhost:4000";
	//tests...  

	it("POST - /api/books", function(done){
				
			var book = {
				title: "Javascript test", 
				author: "john john",
				description: "something"
			}

			request(url)
				.post('/api/books')
				.send(book)
				.expect('Content-Type', /json/)
				.expect(200, done)
	});


	it("GET - /api/books should reponse with status 200 and Content-Type JSON", function(done){
		
			request(url)
				.get('/api/books')
				.expect('Content-Type', /json/)
				.expect(200, done);
	});



});