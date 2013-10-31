var db  = require("../database.js"),
	sessionModel = require("../../models/sessions.js")(db);

	
describe("Models - Session", function(){

  	//holds a customer to use in the each test  
  var currentSession = null, sessionId = 0;
  
  var session = {
		iduser: "iduser",
		token: "token"
	}

	it("Add a session", function(done){
		
		sessionModel.create(session, function(data){

			_id = data._id.toHexString();
			data.iduser.should.equal("iduser");
			data.token.should.equal("token");

			currentSession = data;

			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});


	it("Get all session", function(done){
		
		sessionModel.all(function(data){
			data.length.should.be.above(0);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Get a session", function(done){
		
		sessionModel.one(_id, function(data, err){

			data[0].iduser.should.equal("iduser");
			data[0].token.should.equal("token");
			
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Edit a session", function(done){
	
		currentSession.token = "token change";

		sessionModel.update(_id, currentSession, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});

	it("Remove a session", function(done){

		sessionModel.remove(_id, function(data, err){
			data.success.should.equal(true);
			done();
		}, function(message){
		  message.should.equal(null);
		  done();
		});

	});
	
	
});