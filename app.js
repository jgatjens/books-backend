/**
 * Module dependencies.
 */

var express = require('express'), 
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

// console.log("Routers", routes);

app.get('/', routes.homepage);

// Books
app.get('/api/books', routes.books.all);
app.get('/api/books/:id', routes.books.one);
app.del('/api/books/:id', routes.books.remove);
app.post('/api/books', routes.books.create);

// Users
app.get('/api/users', routes.users.all);
app.get('/api/users/:id', routes.users.one);
app.del('/api/users/:id', routes.users.remove);
app.post('/api/users/', routes.users.create);
app.put('/api/users/add/book', routes.users.add_book);


http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});


