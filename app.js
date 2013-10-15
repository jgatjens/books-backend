
/**
 * Module dependencies.
 */

var express = require('express'), 
    routes = require('./routes'),
    // sass  = require('node-sass'),
    // fs = require('fs');
    http = require('http');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  // app.set('views', __dirname + '/views');
  // app.set('view engine', 'jade');
  // app.use(express.compress());
  // app.use(express.session( secret: 'inuyasha'));
  // app.use(express.static(__dirname + '/public'));
  
  app.use(express.favicon());
  app.use(express.logger('dev'));
  // app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/api/books', routes.books.all);
app.get('/api/books/:id', routes.books.one);
// app.post('/api/books', routes.books.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

