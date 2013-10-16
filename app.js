/**
 * Module dependencies.
 */

var express = require('express'), 
    routes = require('./routes'),
    http = require('http');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(app.router);

});

app.configure('development', function () {
  app.use(express.errorHandler());
});

app.get('/', function (req, res) {
  res.send('Books restful api');
});

app.get('/api/books', routes.books.all);
app.get('/api/books/:id', routes.books.one);

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});


