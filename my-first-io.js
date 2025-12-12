const fs = require('fs');

// Read the file path from the command-line arguments
const filePath = process.argv[2];

// Read file contents as a Buffer, then convert to string
const fileContents = fs.readFileSync(filePath, 'utf8');

// Split the file contents by newline and count lines
const lines = fileContents.split('\n').length - 1;

// Output the number of newlines
console.log(lines);
