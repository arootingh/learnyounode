const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Stream the file directly to the response
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port);
