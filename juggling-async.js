const http = require('http');

const results = [];
let completedRequests = 0;

// Helper function to fetch data from a URL
function fetchData(index) {
  http.get(process.argv[2 + index], function (response) {
    response.setEncoding('utf8');

    let data = '';

    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function () {
      results[index] = data;
      completedRequests++;

      // Once all requests are done, print in order
      if (completedRequests === 3) {
        results.forEach(function (result) {
          console.log(result);
        });
      }
    });
  });
}

// Start all three requests
for (let i = 0; i < 3; i++) {
  fetchData(i);
}
