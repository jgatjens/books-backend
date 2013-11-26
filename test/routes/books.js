var request  = require("supertest"),
		require = require("../../routes/books.js");
	
describe("Routes - Books", function() {
  
  var url = "http://localhost:4000";
	//tests...  

	it("POST - /api/books should save a book", function(done){
				
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

	it("POST - /api/books should only permit Content-Type: json in post request", function(done){
				
			var book = {
				title: "Javascript test", 
				author: "john john",
				description: "something"
			}

			request(url)
				.post('/api/books')
				.set('Content-Type', 'application/x-www-form-urlencoded')	
				.send({})
				.expect(400, { status: "asdads", msg: "message" }, done());
	});


	it("GET - /api/books should reponse with status 200 and Content-Type JSON", function(done){
		
			request(url)
				.get('/api/books')
				.expect('Content-Type', /json/)
				.expect(200, done);
	});



});