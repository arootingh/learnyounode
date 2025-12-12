const http = require('http');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.setEncoding('utf8');

    req.on('data', function (chunk) {
      res.write(chunk.toUpperCase());
    });

    req.on('end', function () {
      res.end();
    });
  }
});

server.listen(port);
