const fs = require('fs');
const path = require('path');

// Export a function that accepts directory, extension, and callback
module.exports = function (dirPath, extension, callback) {
  fs.readdir(dirPath, function (err, files) {
    if (err) {
      return callback(err);
    }

    // Filter files by extension
    const filteredFiles = files.filter(function (file) {
      return path.extname(file) === '.' + extension;
    });

    // Return the filtered list
    callback(null, filteredFiles);
  });
};
