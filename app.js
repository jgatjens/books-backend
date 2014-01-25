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

  if (!req.is('json') && req.method == "POST") {
    var msg = { "success": false, "errorMessage": "We expect Content-type to be application/json"}
    res.json(msg);
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();

});


app.get('/', routes.homepage);

// Books
app.get('/api/v1/books', routes.books.all);
app.get('/api/v1/books/:id', routes.books.one);
app.post('/api/v1/books', routes.books.create);
app.put('/api/v1/books/:id', routes.books.update);
app.put('/api/v1/books/:book/:user', routes.books.add_user);
app.del('/api/v1/books/:book/:user', routes.books.remove_user);
app.del('/api/v1/books/:id', routes.books.remove);

// Users
app.get('/api/v1/users', routes.users.all);
app.get('/api/v1/users/:id', routes.users.one);
app.post('/api/v1/users/', routes.users.create);
app.put('/api/v1/users/:id', routes.users.update);
app.del('/api/v1/users/:id', routes.users.remove);

// Sessions
// app.get('/api/v1/sessions', routes.sessions.all);
app.get('/api/v1/sessions/:id', routes.sessions.one);
app.post('/api/v1/sessions', routes.sessions.create);
app.put('/api/v1/sessions', routes.sessions.update);
app.del('/api/v1/sessions/:id', routes.sessions.remove);


http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});


