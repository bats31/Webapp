const http=require("http");

const host = 'localhost';
const port = 8080;

//for BestPractices async. Programming
const fs = require('fs').promises;

const requestListener = function (req,res){
    //load data to build the page
    //_dirname = absolut Path
    fs.readFile(__dirname + "/index.html")
        
        .then(contents =>{

        res.setHeader("Content-Type","text/html");
        res.writeHead(200);
        res.end(contents);
    })

    //if there are any mistakes with reading file it entered the catch case
       .catch(err =>{

        res.writeHead(500);
        res.err(err);
        return;
       });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://'+host+':'+port);
});