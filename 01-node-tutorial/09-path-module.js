// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)
////

// 09-path-module.js

// Load the built-in path module
const path = require("path");

// Define a sequence of alphanumeric strings
const parts = ["dir1", "dir2", "file.txt"];

// Use path.join to create a path
const fullPath = path.join(...parts);

// Print out the result
console.log("Joined Path:", fullPath);
