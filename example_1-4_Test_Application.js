var http = require('http');

// The url w want, plus the path and options that we need
var options = {
	host: 'localhost',
	port: 8123,
	path: '/?file=secondary',
	method: 'GET'
};

var processPublicTimeline = function (response) {
	console.log('finished request');
};

for (var i = 0; i<2000; i++) {
	http.request(options, processPublicTimeline).end();
}