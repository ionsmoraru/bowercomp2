'use strict';

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.favicon(__dirname + '/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/')));

// development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function () {
	console.log('comp2 server listening on port ' + app.get('port'));
});
