const { writeFile, readFile } = require('fs').promises;

async function writer() {
    const filePath = './temp.txt';
    const content = 'First line\nSecond line\nThird line';

    try {
        await writeFile(filePath, content);
        console.log('temp.txt written successfully.');
    } catch (error) {
        console.error('Error writing to temp.txt:', error);
    }
}

async function reader() {
    const filePath = './temp.txt';

    try {
        const data = await readFile(filePath, 'utf8');
        console.log('Content of temp.txt:');
        console.log(data);
    } catch (error) {
        console.error('Error reading from temp.txt:', error);
    }
}

async function readWrite() {
    await writer();
    await reader();
}

readWrite();
