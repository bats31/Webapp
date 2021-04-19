//https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module-de

//Function for creation a server
const http = require("http");

//create host and port private 
//locale host = private addr. to refer on itself 127.0.0.1
//only locale avaiable
const host = 'https://lbbawebtest1.azurewebsites.net';

//Connection on port 8080
const port = 80;

//callable at 'http://localehost:8080'

//RequestListener -> insert HTTP-Request get any Response back
//function ( Requestobject, Responseobject)
const requestListener = function (req,res){
    
    //HTTP-statuscode "200=OK","404=Error"...
    res.setCode(200);
    res.setHeader('Content-Type', 'text/plain');
    
    //Answering to client 
    res.end('TestApp check');
};

//Server response a textfile druing incoming request

//Create new server-object via createServer, which is part of the http-Module
//Server accept request an get function requestlistener
const server = http.createServer(requestListener);

//binding to networkadress with port'n'host and responsefunction, which prints the text to the screen
server.listen(port,host,() => {
    console.log('Server is running on http://'+host+':'+port);
});

//node ... .js starts server
//curl http://localehost:8080 send GET-Request on adress http...8080
//Server listen on adress and hand over function "requestListener()" 