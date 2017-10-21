require('./api/data/db.js'); //mongoose connection
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');
// module.exports = function(){}

app.set('port', 3000);

app.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname  + '/node_modules'));

//enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
	//res.status(200), res.send();
})

var server = app.listen(app.get('port'), function() {
	console.log('Port 3000');
});



