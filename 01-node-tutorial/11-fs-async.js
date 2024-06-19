// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')

//////

// 11-fs-async.js

const fs = require("fs");
const path = require("path");

// Define the path to the temporary directory and the file name
const tempDir = "./temporary";
const fileName = "fileB.txt";
const filePath = path.join(tempDir, fileName);

// Ensure the temporary directory exists
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

// Write lines to the file asynchronously using writeFile
fs.writeFile(filePath, "Line 1\n", (err) => {
    if (err) {
        console.error("Error writing line 1:", err);
        return;
    }
    console.log("Line 1 written successfully");

    fs.writeFile(filePath, "Line 2\n", { flag: "a" }, (err) => {
        if (err) {
            console.error("Error writing line 2:", err);
            return;
        }
        console.log("Line 2 appended successfully");

        fs.writeFile(filePath, "Line 3\n", { flag: "a" }, (err) => {
            if (err) {
                console.error("Error writing line 3:", err);
                return;
            }
            console.log("Line 3 appended successfully");

            console.log("All lines written successfully");
        });
    });
});

