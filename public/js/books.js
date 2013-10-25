// 
var BookModel = Backbone.Model.extend({
	idAttribute: "_id"
});

var BookCollection = Backbone.Collection.extend({
	model: BookModel,
	url: 'api/books'
});

var Books = new BookCollection();
Books.fetch();


var UsersModel = Backbone.Model.extend({
	idAttribute: "_id"
});

var UsersCollection = Backbone.Collection.extend({
	model: UsersModel,
	url: 'api/users'
});

var Users = new UsersCollection();
Users.fetch();

