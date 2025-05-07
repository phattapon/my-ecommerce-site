var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require('path');

var server = http.createServer(function (req, res) {
  let filePath = "." + req.url;
  if (filePath === "./") filePath = "./index.html";

  const extname = path.extname(filePath);
  let contentType = 'text/html'; // ตั้ง default เป็น html

  if (extname === ".css") contentType = "text/css";
  else if (extname === ".js") contentType = "text/javascript";
  else if (extname === ".json") contentType = "application/json";
  else if (extname === ".png") contentType = "image/png";
  else if (extname === ".jpg") contentType = "image/jpeg";

  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 File Not Found !!!");
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.write(data);
    return res.end();
  });
});

server.listen(8080);
