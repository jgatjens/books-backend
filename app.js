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

// Allow request from others server
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


app.get('/', routes.homepage);

// Books
app.get('/api/books', routes.books.all);
app.get('/api/books/:id', routes.books.one);
app.post('/api/books', routes.books.create);
app.put('/api/books/:id', routes.books.update);
app.del('/api/books/:id', routes.books.remove);

// Users
// app.get('/api/users', routes.users.all);
app.get('/api/users/:id', routes.users.one);
app.post('/api/users/', routes.users.create);
app.put('/api/users/:id', routes.users.update);
app.put('/api/users/:user/:book', routes.users.add_book);
app.del('/api/users/:user/:book', routes.users.remove_book);
app.del('/api/users/:id', routes.users.remove);

// Sessions
app.get('/api/sessions/:id', routes.sessions.one);
app.post('/api/sessions', routes.sessions.create);
app.put('/api/sessions', routes.sessions.update);
app.del('/api/sessions/:id', routes.sessions.remove);


http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});


