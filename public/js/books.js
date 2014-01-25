// 
var BookModel = Backbone.Model.extend({
	idAttribute: "_id",
	urlRoot: '/api/v1/books'
});

var BookCollection = Backbone.Collection.extend({
	model: BookModel,
	url: '/api/v1/books'
});

var Books = new BookCollection();
Books.fetch();


var UsersModel = Backbone.Model.extend({
	idAttribute: "_id"
});

var UsersCollection = Backbone.Collection.extend({
	model: UsersModel,
	url: '/api/v1/users'
});

var Users = new UsersCollection();
Users.fetch();

