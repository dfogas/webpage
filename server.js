var express = require('express');

var app = express(); //create server

app.use(express.static(  __dirname + '/public') ); //link in for static files that are available to client

app.get('/', function(req,res) {
	res.render('index');
}); //define simple route

var port = 1445;

app.listen(port, function() {
	console.log( 'express started at port: ' + port );
});
