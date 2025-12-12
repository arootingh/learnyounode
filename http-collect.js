const http = require('http');

// URL is passed as the third command-line argument
const url = process.argv[2];

// Make the HTTP GET request
http.get(url, function (response) {
  response.setEncoding('utf8');

  let fullData = '';

  // Collect each chunk of data
  response.on('data', function (chunk) {
    fullData += chunk;
  });

  // When all data is received
  response.on('end', function () {
    console.log(fullData.length);
    console.log(fullData);
  });

  // Handle errors
  response.on('error', function (err) {
    console.error(err);
  });
});
