const fs = require('fs');
const path = require('path');

// Directory path and extension are passed as arguments
const dirPath = process.argv[2];
const extension = process.argv[3];

// Read the directory asynchronously
fs.readdir(dirPath, function (err, files) {
  if (err) {
    throw err;
  }

  // Loop through each file in the directory
  files.forEach(function (file) {
    // Check if file has the specified extension
    if (path.extname(file) === '.' + extension) {
      console.log(file);
    }
  });
});
