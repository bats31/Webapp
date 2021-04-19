const http=require("http");

const host = 'localhost';
const port = 8080;

//for BestPractices async. Programming
const fs = require('fs').promises;

//Variable to save content
let indexFile;

const requestListener = function (req,res){
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);

    //Return content insteed of the whole page
    res.end(indexFile);
};


const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
        
    .then(contents =>{

        indexFile= contents;
        server.listen(port, host, () => {
        console.log('Server is running on http://'+host+':'+port);
        });
    })

    //if there are any mistakes with reading file it entered the catch case
    .catch(err =>{

        console.err("Could not read index.html file: ${err}");
        process.exit(1);
       });

// File will be loaded, before server get connected.