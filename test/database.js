
var MongoClient = require('mongodb').MongoClient,
		mongodb = null;

describe("Library Database", function() {
		
		before(function(done){

			MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
			  if(err)	{
			  	console.log(err); 
			  	done();
			  }
			  mongodb = db;
			  done();
			});  
			
		});
  	
		it("Do we have connexion to the mongo database", function(done) {
				mongodb.serverConfig.connected.should.be.equal(true);
				done();	
		});

});
