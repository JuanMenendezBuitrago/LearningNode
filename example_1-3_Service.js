var http = require('http');
var fs = require('fs');

// write out numbers
function writeNumbers(res) {
	var counter = 0;

	// increment counter and write to client
	for (var i = 0; i<100; i++) {
		counter++;
		res.write(counter + '\n');
	}
}

// create http server
http.createServer(function (req, res) {
	// Output the request url to console
	console.log('Requesting ' + req.url);

	// compose the requested file's name from the url
	var query = require('url').parse(req.url).query;
	var app = require('querystring').parse(query).file + ".txt";

	// container header
	res.writeHead(200, {'Content-Type': 'text/plain'});

	// write out numbers
	writeNumbers(res);

	setTimeout(function () {
		console.log('opening ' + app);
		fs.readFile(app, 'utf8', function (err, data) {
			if (err) 
				res.write('Could not find or open file for reading\n');
			else
				res.write(data);
			res.end();
		});
	}, 2000);
}).listen(8123);

console.log('Server running at 8123');