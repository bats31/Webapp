const http=require("http");
var port = process.env.PORT || 8080;

//for BestPractices async. Programming

http.createServer(function (req,res){
    //load data to build the page
    //_dirname = absolut Path
    fs.readFile("/index.html")
        
        .then(contents =>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(contents);
    })

    //if there are any mistakes with reading file it entered the catch case
       .catch(err =>{

        res.writeHead(500);
        res.err(err);
        return;
       });
}).listen(port);

console.log('Server is running');