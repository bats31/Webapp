const http=require("http");

const host = 'localhost';
const port = 8080;

const books = JSON.stringify([
    {tilte: "the Alchemist",author:"Paul Coelho",year: 1988},
    {title: "Odyssee", author:"Homer",year: -700}

]);

const author = JSON.stringify([
    {name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth:1947},
    {name: "Homer", countryOfBirth: "Greek", yearOfBirth: -700}
]);

const requestListener = function(req,res){
    res.setHeader("Content-Type","application/json");
    switch (req.url){
        case"/books":
            res.writeHead(200);
            res.end(books);
            break
        
        case "/author":
            res.writeHead(200);
            res.end(author);
            break
    
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error: "Resource not found"}));    
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://'+host+':'+port);
});