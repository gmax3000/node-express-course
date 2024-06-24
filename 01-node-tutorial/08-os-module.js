// Load the built-in os module
const os = require("os");

// Display some interesting information
console.log("Operating System Information:");
console.log(`- OS Type: ${os.type()}`);
console.log(`- OS Platform: ${os.platform()}`);
console.log(`- OS Release: ${os.release()}`);
console.log(`- CPU Architecture: ${os.arch()}`);
console.log(`- Number of CPUs: ${os.cpus().length}`);
console.log(`- Total Memory: ${os.totalmem()} bytes`);
console.log(`- Free Memory: ${os.freemem()} bytes`);
console.log(`- Uptime: ${os.uptime()} seconds`);

console.log("\nUser Information:");
console.log(os.userInfo());

console.log("\nNetwork Interfaces:");
console.log(os.networkInterfaces());

