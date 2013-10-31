var db  = require("../database.js"),
	userModel = require("../../models/users.js")(db);

describe("Models - Users", function(){
 
  var currentUser = null, _id = 0;
  
  var user = {
		name: "John Doe", 
		avatar: "https://lh6.googleusercontent.com/-1y868vOoWek/AAAAAAAAAAI/AAAAAAAAAoM/io8W15dlwW4/s120-c/photo.jpg",
		books: []
	}

	it("Add a user", function(done){
		
		userModel.create(user, function(data){

			_id = data._id.toHexString();
			data.name.should.equal("John Doe");
			data.avatar.should.equal("https://lh6.googleusercontent.com/-1y868vOoWek/AAAAAAAAAAI/AAAAAAAAAoM/io8W15dlwW4/s120-c/photo.jpg");

			currentUser = data;

			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});


	it("Get all user", function(done){
		
		userModel.all(function(data){
			data.length.should.be.above(0);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Get a user", function(done){
		
		userModel.one(_id, function(data, err){

			data[0].name.should.equal("John Doe");
			data[0].avatar.should.equal("https://lh6.googleusercontent.com/-1y868vOoWek/AAAAAAAAAAI/AAAAAAAAAoM/io8W15dlwW4/s120-c/photo.jpg");
			
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Edit a user", function(done){
	
		currentUser.avatar = "-.-";

		userModel.update(_id, currentUser, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Remove a user", function(done){

		userModel.remove(_id, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});
	
});