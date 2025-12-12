const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const time = new Date(parsedUrl.query.iso);

  let result;

  if (parsedUrl.pathname === '/api/parsetime') {
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    };
  } else if (parsedUrl.pathname === '/api/unixtime') {
    result = {
      unixtime: time.getTime()
    };
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);

