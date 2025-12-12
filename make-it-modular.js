const filterModule = require('./mymodule');

// Read command-line arguments
const dirPath = process.argv[2];
const extension = process.argv[3];

// Call the module function
filterModule(dirPath, extension, function (err, files) {
  if (err) {
    console.error(err);
    return;
  }

  // Print each file on its own line
  files.forEach(function (file) {
    console.log(file);
  });
});
