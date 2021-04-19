//const express = require('express');
const http = require("http");

//const host = 'http://lbbawebtest1.azurewebsites.net';
const port = 80;

function sayHello(req,res){
    console.log("We've got a request for " + req.url);
    
    // HTTP response header - the content will be HTML MIME type
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Write out the HTTP response body
    res.write('<html><body>' +
    '<h1>Hello Dynamic World Wide Web<h1>'+
    '</body></html>');
    
    // End of HTTP response
    res.end();
    
}
// Create the HTTP server

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log('Server is running on http://'+host+':'+port);
});

