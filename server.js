var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var listenPort = 3000;
// add middleware here



app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About us');

});

app.use(express.static(__dirname + '/public'));

app.listen(listenPort, function () {
	console.log('server listening on port ' + listenPort + '.');
});
