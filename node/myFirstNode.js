var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  var txt = (q.fname || '') + " " + (q.lname || '');

  fs.readFile("./index.html", function(err, htmlDocs) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(txt + "<br>"); 
    res.write(htmlDocs);     
    res.end();
  });
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
