const http=require("http");
var port = process.env.PORT || 8080;

//for BestPractices async. Programming

http.createServer(function (req,res){
    //load data to build the page
    //_dirname = absolut Path
    fs.readFile("index.html", function(err,data){
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })

    //if there are any mistakes with reading file it entered the catch case
       .catch(err =>{

        res.writeHead(500);
        res.err(err);
        return;
       })

}).listen(port);