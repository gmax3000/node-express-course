// Load the built-in path module
const path = require("path");

// Define a sequence of alphanumeric strings
const parts = ["dir1", "dir2", "file.txt"];

// Use path.join to create a path
const fullPath = path.join(...parts);

// Print out the result
console.log("Joined Path:", fullPath);
