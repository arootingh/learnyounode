
const http = require('http');

// URL passed as the third command-line argument
const url = process.argv[2];

// Make an HTTP GET request
http.get(url, function (response) {
  // Set encoding so we receive strings instead of buffers
  response.setEncoding('utf8');

  // Print data chunks as they are received
  response.on('data', function (data) {
    console.log(data);
  });

  // Handle errors
  response.on('error', function (err) {
    console.error(err);
  });
});
