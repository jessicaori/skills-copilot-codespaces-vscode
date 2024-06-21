// Create Web Server

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);
    var resource = urlObj.pathname;
    var resourcePath = '.' + resource;

    if (resource === '/') {
        resourcePath = './index.html';
    }

    fs.readFile(resourcePath, 'utf-8', function(error, data) {
        if (error) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('500 Internal Server ' + error);
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(3000, function() {
    console.log('Server Running at http://