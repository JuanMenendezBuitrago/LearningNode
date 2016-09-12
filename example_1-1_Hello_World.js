// load HTTP module
var http = require('http');

// create HTTP server
http.createServer(function (req, res) {
	// content header
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	// write message and signal communication is complete
	res.end('Hello, world!\n');
}).listen(8123, function () {
	console.log('Server running on 8123');
});
