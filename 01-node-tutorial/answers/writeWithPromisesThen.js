const { writeFile, readFile } = require('fs').promises;

const filePath = './temp.txt';
const content1 = 'First line\n';
const content2 = 'Second line\n';
const content3 = 'Third line';

writeFile(filePath, content1) // write line 1
    .then(() => {
        console.log('First line written successfully.');
        return writeFile(filePath, content2, { flag: 'a' }); // append line 2
    })
    .then(() => {
        console.log('Second line written successfully.');
        return writeFile(filePath, content3, { flag: 'a' }); // append line 3
    })
    .then(() => {
        console.log('Third line written successfully.');
        return readFile(filePath, 'utf8'); // read the file content
    })
    .then((data) => {
        console.log('Content of temp.txt:');
        console.log(data); // log the file content
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
