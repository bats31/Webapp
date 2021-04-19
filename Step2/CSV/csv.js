//CSV = Comma Separated Values = Tabelformations

const http = require("http");

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
    //Content-Type is text/csv file
    res.setHeader("Content-Type","text/csv");
    //Tells browser, we want to display the data, 2nd arg = browser has to download file with name xyz
    res.setHeader("Content-Disposition","attachment;filename=gallischesdorf.csv");

    res.writeHead(200);
    res.end(' id,name,email \n 1, Gutemine, Guteminde@galleranien.com \n 2, Asterix,Asterix@gallieranien.com\n 3, Obelix, Obelix@gallieranien.com');
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://'+host+':'+port);
});
