// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')
//////////////////////////////////////

// 10-fs-sync.js

const fs = require("fs");
const path = require("path");

// Define the path to the temporary directory and the file name
const tempDir = "./temporary";
const fileName = "fileA.txt";
const filePath = path.join(tempDir, fileName);

// Ensure the temporary directory exists
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

// Write lines to the file using append flag
fs.writeFileSync(filePath, "Line 1\n");
fs.writeFileSync(filePath, "Line 2\n", { flag: "a" });
fs.writeFileSync(filePath, "Line 3\n", { flag: "a" });

// Read the file synchronously
const fileContents = fs.readFileSync(filePath, "utf8");

// Print out the contents
console.log("File Contents:");
console.log(fileContents);


