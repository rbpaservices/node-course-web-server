
 
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
module.exports = middleware;