// load HTTP module
var http = require('http');
var fs = require('fs');

// create HTTP server
http.createServer(function (req, res) {
	// open and read in helloworld.js
	fs.readFile('example_1-1_Hello_World.js', 'utf8', function (err, data) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		if (err) {
			res.write('Could not find or open file for reading\n');
		} else {
			// if there's no error, write JS file to client
			res.write(data);
		}
		res.end();
	});
}).listen(8123, function () {console.log('Bound to port 8123');});


