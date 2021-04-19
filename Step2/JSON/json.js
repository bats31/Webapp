const http = require("http");

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {

    //Add response to HTTP-Header (Name and Value)
    //Name = show the format or Mediatype
    res.setHeader("Content-Type","application/json");
    res.writeHead(200);

    //this is a valid JSON argument
    res.end(`{message: "This is a JSON response"}`);

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://'+host+':'+port);
});
