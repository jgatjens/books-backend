var User = require("../../models/users.js"),
		userModel = new User();

describe("Models - Users", function(){
 
  var currentUser = null, _id = 0;
  
  var user = {
		name: "John Doe", 
		avatar: "--------",
	}

	it("Add a user", function(done){
		
		userModel.create(user, function(data){

			_id = data._id.toHexString();
			data.name.should.equal("John Doe");
			data.avatar.should.equal("--------");

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

			data.name.should.equal("John Doe");
			data.avatar.should.equal("--------");
			
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