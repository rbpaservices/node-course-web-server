var express = require('express');
var app = express();
var listenPort = 3000;

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next) {
		 
		 var requestDate =	Date().toString();
		 console.log('Request: ' + requestDate + ' ' + req.method + ' ' + req.originalUrl);
		 next(); 
	}
};
 

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About us');

});

app.use(express.static(__dirname + '/public'));

app.listen(listenPort, function () {
	console.log('server listening on port ' + listenPort + '.');
});
